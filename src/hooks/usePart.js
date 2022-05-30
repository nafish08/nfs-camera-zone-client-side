import { useEffect, useState } from "react";

const usePart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://damp-island-00679.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}

export default usePart;