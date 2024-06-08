import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const {data, setData} = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(() => {
            return res.json()
            .then((res) => {
                return setData(res[currency])
                console.log(data);
            }, [currency])
        })
        console.log(data);
        return data
    })
}

export default useCurrencyInfo;