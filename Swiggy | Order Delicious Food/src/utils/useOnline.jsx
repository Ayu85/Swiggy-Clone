import { useEffect, useState } from "react";

const useOnline = () => {
    const [result, setResult] = useState();
    useEffect(() => {
        window.addEventListener('online', () => {
            setResult(true);
        })
        window.addEventListener('offline', () => {
            setResult(false)
        })
    })
    return result;
}
export default useOnline;