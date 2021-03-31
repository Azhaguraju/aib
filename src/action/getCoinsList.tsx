import { GET_COINS,GET_COINS_BY_ID, COINS_ERROR,GET_EMPTY_COINS_BY_ID} from "../action/types";
import fetch from '../utils/leoFetch'
import { config } from "../config/config";
import message from '../../src/message/message.json'

  export const getCoinsList = () => (dispatch:any) => {      
    fetch(config.coinsListURL, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(coins => {       
        dispatch({
          payload: coins,
          type: GET_COINS
        });
      })
      .catch(err => {
        let data=[{
          error:message.coinsDisplayErrorMsg
        }]      
        dispatch({
          payload:data,
          type: COINS_ERROR         
        });
      });
  };

  export const getCoinsById = (coinsId:any) => (dispatch:any) => {      
    fetch(config.coinsListById + coinsId, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(res => res.json())
      .then(coinsList => {       
        dispatch({
          payload: coinsList,
          type: GET_COINS_BY_ID
        });
      })
      .catch(err => {
        let data=[{
          error:message.coinsDisplayErrorMsg
        }]        
        dispatch({
          payload:data,
          type: COINS_ERROR
        });
      });
  };

  export const getEmptyCoinsById = (coinsEmpty:any) => (dispatch:any) => {   
    dispatch({
      payload: coinsEmpty,
      type: GET_EMPTY_COINS_BY_ID
    });
  }
