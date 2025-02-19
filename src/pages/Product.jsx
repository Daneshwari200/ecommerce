
import  React, { useEffect,useState} from "react";
 
const product = () => {
    const [products, setProducts] = useState([]);
     
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts([...data]);
        };

        fetchData();

    }, []);

    return (
        <div>
        <h1>Products page</h1>
        {product.map((product) => (
            <p key={product.id}>{product.title}</p>
        ))}
    </div>
    );
};

        
    
