import axios from "axios";

const DEFAULT_HEADERS = {
  "User-Agent": `beer-rating-finder (${process.env.UNTAPPD_CLIENT_ID})`,
};
const AUTH_PARAMS = {
  client_id: process.env.UNTAPPD_CLIENT_ID,
  client_secret: process.env.UNTAPPD_SECRET,
};

export const findBeer = async (beerName: string): Promise<any> => {
  const SEARCH_URL = "https://api.untappd.com/v4/search/beer";
  const BEER_INFO_URL = "https://api.untappd.com/v4/beer/info/";

  //TODO: Caching?
  const beerId = await axios
    .get(SEARCH_URL, {
      params: {
        q: beerName,
        limit: 1,
        ...AUTH_PARAMS,
      },
      headers: DEFAULT_HEADERS,
    })
    .then((response) => {
      console.log(response.data.response.beers);
      return response.data.response.beers.items[0].beer.bid;
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });

  return axios
    .get(BEER_INFO_URL + beerId, {
      params: {
        compact: "true",
        ...AUTH_PARAMS,
      },
      headers: DEFAULT_HEADERS,
    })
    .then((response) => {
      console.log(response.data.response.beer);
      const {
        bid,
        beer_name,
        rating_count,
        rating_score,
      } = response.data.response.beer;
      return { bid, beer_name, rating_score, rating_count };
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
};
