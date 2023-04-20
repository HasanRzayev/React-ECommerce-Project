import React, { useContext, useState } from "react";
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Products = () => {
    const { products } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <section className="container mx-auto">
            <div className='container flex flex-col items-center justify-center pt-24 pb-12 gap-6'>
                <div className="container flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className='border-2 rounded-3xl py-2 px-4 text-lg w-1/2'
                        onChange={(event) => setSearchTerm(event.target.value)}
                    ></input>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {filteredProducts.map((product) => {
                        return <Product product={product} key={product.id} />;
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products;
