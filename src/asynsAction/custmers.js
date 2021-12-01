import { addManyCustomersAction } from "../store/cardReduser";


export const fetchCustomens = () =>{
    return function(dispatch){
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)));
    }
}


/// https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT

