import { useState, useEffect } from "react";
function useInstamart() {
    const [items, setItems] = useState();
    useEffect(() => {
        const getMarts = async () => {
            const data = await fetch("https://dummyjson.com/products")
            const json = await data.json();
            setItems(json);
        }
        getMarts();
    }, [])
    return items;
}
export default useInstamart;
