import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [url])
    const getData = async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        data
    )
}

export default useFetch
