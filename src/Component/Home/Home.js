import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [firstIndex, setFirstIndex] = useState(0)
    const [secondIndex, setSecondIndex] = useState(9)

    const { data: cards = [], refetch } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/products`);
            const data = await res.json();
            return data;
        }
    })

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
        setFirstIndex(firstIndex + 9)
        setSecondIndex(secondIndex + 9)
    }
    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
        setFirstIndex(firstIndex - 9)
        setSecondIndex(secondIndex - 9)
    }
    console.log(currentPage)


    return (
        <div className='mx-auto container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    cards?.products?.slice(firstIndex, secondIndex).map(card => <AllProduct

                        key={card.id}
                        card={card}
                    >
                    </AllProduct>)
                }

            </div>
            <div>
                <button onClick={handlePrev} className='btn'>Prev</button>
                <button onClick={handleNext} className='btn'>Next</button>
            </div>
        </div>
    );
};

export default Home;