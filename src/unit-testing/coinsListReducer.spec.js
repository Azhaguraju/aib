import {GET_COINS,GET_COINS_BY_ID,GET_EMPTY_COINS_BY_ID,COINS_ERROR } from "../action/types";
  import coinsListReducer, {
    initialState
  } from "../reducer/coinsListReducer";
  
  describe("Coins Reducer", () => {

    /* coins details by id*/
  it("should display the coins", () => {
    let object = {        
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      name: "Bitcoin",
      symbol: "btc",
      current_price: "50029",
      high_24h: "50816",
      low_24h: "48910",
    };
    let newState = coinsListReducer(initialState, {
      payload: object,
      type: GET_COINS,
    });
    expect(newState.coinsList).toEqual(object);
  });
    
    /* coins details by id */
    it("should handle coins details by id", () => {
      let object = {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "btc",
        hashing_algorithm: "SHA-256",
        genesis_date: "2009-01-03",        
      };
      let newState = coinsListReducer(initialState, {
        payload: object,
        type: GET_COINS_BY_ID,
      });
      expect(newState.coinData).toEqual(object);
    });

     /* coins details should be empty */
     it("coins details should be empty", () => {     
      let object = {};
      let newState = coinsListReducer(initialState, {
        payload: object,
        type: GET_EMPTY_COINS_BY_ID,
      });
      expect(newState.coinData).toEqual(object);
    });

  })
    