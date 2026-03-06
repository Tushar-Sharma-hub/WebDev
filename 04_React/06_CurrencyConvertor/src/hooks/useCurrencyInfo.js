import { useState,useEffect, use } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        if (!currency) return;
        // API files are lowercase, the hook consumer often passes uppercase codes.
        const code = currency.toLowerCase();

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${code}.json`)
        .then((res)=>{
            if (!res.ok) {
                throw new Error(`failed to fetch ${res.status}`);
            }
            return res.json();
        }) //The data will come in string form we have to convert it into json form.
        .then((res)=> setData(res[code] || {}))
        .catch((err)=>{
            console.error('currency fetch error', err);
            setData({});
        });
    },[currency]) //when the currency will be changed the fxn inside of useEffect will be called.
    return data
}

export default useCurrencyInfo;