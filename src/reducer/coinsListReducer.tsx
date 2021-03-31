import { GET_COINS,GET_COINS_BY_ID,GET_EMPTY_COINS_BY_ID,COINS_ERROR} from '../action/types';

const initialState = {
    coinsList:[],
    coinData:{},
    coinsError:[]
}

export default function reducer(state = initialState, action:any) {
    switch (action.type) {
        case GET_COINS:
            return {
                ...state,
                coinsList:action.payload
            };  
        case GET_COINS_BY_ID:   
        return {
            ...state,
            coinData:action.payload
        };
        case GET_EMPTY_COINS_BY_ID:
            return{
                ...state,
                coinData:{}
            }
        case COINS_ERROR:
            return{
                ...state,
                coinsError:action.payload
            }
        default:
            return state;
    }
}
