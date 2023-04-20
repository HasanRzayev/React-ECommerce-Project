import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import { FaSlidersH } from 'react-icons/fa';
import $ from 'jquery'

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrices, setSelectedPrices] = useState([0, 0]);

  const filteredProducts = products.filter((item) => {
    if (selectedCategory === 'all') {
      if (selectedPrices[1] - selectedPrices[0] !== 0) {
        return item.price >= selectedPrices[0] && item.price <= selectedPrices[1]
      }
      return true;
    }
    else if (selectedPrices[1] - selectedPrices[0] === 0) {
      return item.category === selectedCategory
    }
    else {
      return item.category === selectedCategory && (item.price >= selectedPrices[0] && item.price <= selectedPrices[1]);
    }
  });

  const handleFiltering = () => {
    $('#price-options').fadeToggle(150).css({
      'display': 'flex'
    });
  }

  const handlePriceChange = (e) => {
    var priceArr = e.target.value.split(',')

    var price1 = parseInt(priceArr[0])
    var price2 = parseInt(priceArr[1])

    setSelectedPrices([price1, price2])
  }

  return (
    <div>
      <Hero />
      <section className='py-12'>
        <div className='container mx-auto'>
          <div className='flex justify-center gap-6'>
            <div>
              <button className='p-3 border rounded-lg border-gray-700 text-gray-700 ease-in duration-100 hover:text-white hover:bg-gray-700' onClick={handleFiltering}>
                <FaSlidersH className='text-2xl'></FaSlidersH>
              </button>
            </div>

            <div className='flex flex-col gap-6 mb-12'>
              <div className='flex item-center justify-center gap-6'>
                <button className='py-3 px-4 border rounded-lg border-gray-700 ease-in duration-100 hover:text-white hover:bg-gray-700' onClick={() => setSelectedCategory('all')}>
                  All
                </button>
                <button className='py-3 px-4 border rounded-lg border-gray-700 ease-in duration-100 hover:text-white hover:bg-gray-700' onClick={() => setSelectedCategory('men\'s clothing')}>
                  Men's Clothing
                </button>
                <button className='py-3 px-4 border rounded-lg border-gray-700 ease-in duration-100 hover:text-white hover:bg-gray-700' onClick={() => setSelectedCategory('women\'s clothing')}>
                  Women's Clothing
                </button>
                <button className='py-3 px-4 border rounded-lg border-gray-700 ease-in duration-100 hover:text-white hover:bg-gray-700' onClick={() => setSelectedCategory('jewelery')}>
                  Jewelery
                </button>
                <button className='py-3 px-4 border rounded-lg border-gray-700 ease-in duration-100 hover:text-white hover:bg-gray-700' onClick={() => setSelectedCategory('electronics')}>
                  Electronics
                </button>
              </div>

              <div id='price-options' className={`hidden items-center justify-center gap-8`}>
                <div className='flex items-center gap-2'>
                  <input type='radio' id='0-50' name='price' value={'0,50'} onChange={handlePriceChange} className='appearance-none w-3 h-3 rounded-full border border-gray-700'></input>
                  <label htmlFor='0-50'>0$ - 50$</label>
                </div>

                <div className='flex items-center gap-2'>
                  <input type='radio' id='50-100' name='price' value={'50,100'} onChange={handlePriceChange} className='appearance-none w-3 h-3 rounded-full border border-gray-700'></input>
                  <label htmlFor='50-100'>50$ - 100$</label>
                </div>

                <div className='flex items-center gap-2'>
                  <input type='radio' id='100-200' name='price' value={'100,200'} onChange={handlePriceChange} className='appearance-none w-3 h-3 rounded-full border border-gray-700'></input>
                  <label htmlFor='100-200'>100$ - 200$</label>
                </div>

                <div className='flex items-center gap-2'>
                  <input type='radio' id='200-500' name='price' value={'200,500'} onChange={handlePriceChange} className='appearance-none w-3 h-3 rounded-full border border-gray-700'></input>
                  <label htmlFor='200-500'>200$ - 500$</label>
                </div>

                <div className='flex items-center gap-2'>
                  <input type='radio' id='500-1000' name='price' value={'500,1000'} onChange={handlePriceChange} className='appearance-none w-3 h-3 rounded-full border border-gray-700'></input>
                  <label htmlFor='500-1000'>500$ - 1000$</label>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;