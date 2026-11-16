import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css';


export function HomePage({ cart }) {
    /*fetch ('http://localhost:3000/api/products')
    .then((response)=>{
        response.json()
        }).then((data)=>{ //products data from the backend which will be an array of products
        console.log(data);
        useEffect lets us control when a code is running.
        a dependency array lets us control when useeffect runs so [] only runs it once
    });*/
    const [products, setProducts] = useState([]); //data and the updater function(update value and regenerate HTML)

    useEffect(()=>{
        const getHomeData = async ()=>{
            const response = await axios.get ('http://localhost:3000/api/products');
            setProducts(response.data);
        }
        getHomeData();
    }, []);//dependency array lets us control when useeffect runs so [] only runs it once

    return (
        <>
            <title> Ecommerce Site</title>

            <Header cart={cart}/>

            <div className="home-page">
                <ProductsGrid products={(products)} />
            </div>
        </>
    );
}