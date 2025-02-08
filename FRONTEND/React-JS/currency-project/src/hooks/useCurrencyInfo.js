// hooks are never in jsx, always js

import { useEffect, useState } from "react";
function useCurrencyInfo(currency){  //no optional argument, currency is a variable passed
     const[data,setData]=useState({})
    useEffect(()=>{
     fetch(`https://www.floatrates.com/daily/${currency}.json`)
        .then((res)=>res.json())
        .then((data)=> setData(res[currency]))
        .catch((error) => console.error("Error fetching currency data:", error));
     },[currency])
     console.log(data);
     return data
}
export default useCurrencyInfo;