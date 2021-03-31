import configureMockStore from "redux-mock-store";
import { middleware } from "../store";
import {getCoinsList,getCoinsById,getEmptyCoinsById} from "../../src/action/getCoinsList";
import {GET_COINS,GET_COINS_BY_ID,GET_EMPTY_COINS_BY_ID,COINS_ERROR } from "../action/types";
import fetchMock from "fetch-mock";
import { config } from "../config/config";

const mockStore = configureMockStore(middleware);
const store = mockStore({});
const fetch = require('node-fetch'); 

describe("Coins List actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  /* FETCH ALL COINS LIST */
  it("fetch all coins list", () => {
    fetchMock.get(config.coinsListURL, {
      method: "GET"
    });
    store.dispatch(getCoinsList());
    expect(store.getState()).toEqual({});
  });

  /*Get Coins Details Based on Id */
  it("Get Coins Details Based on Id", () => {
    let coinsId = "bitcoin";
    fetchMock.get(config.coinsListById +coinsId, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    });

    store.dispatch(getCoinsById(coinsId));
    expect(store.getState()).toEqual({});
  });
  
  
});
