import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllProduct from '../AllProduct/AllProduct';

const Home = () => {

    const { data: cards = [], refetch } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/products`);
            const data = await res.json();
            return data;
        }
    })

    console.log(cards)

    return (
        <div className='mx-auto container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    cards?.products?.map(card => <AllProduct
                        key={card.id}
                        card={card}
                    >
                    </AllProduct>)
                }
            </div>
        </div>
    );
};

export default Home;