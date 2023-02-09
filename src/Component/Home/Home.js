import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";


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
        if (secondIndex > 30) {
            setFirstIndex(0)
            setSecondIndex(9)
        }
    }
    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
        setFirstIndex(firstIndex - 9)
        setSecondIndex(secondIndex - 9)
        if (secondIndex < 10) {
            setFirstIndex(0)
            setSecondIndex(9)
        }
    }

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
            <div className='flex justify-center p-4'>
                <button onClick={handlePrev} className='btn hover:text-xl mr-2'><BsFillArrowLeftSquareFill /></button>
                <button onClick={handleNext} className='btn hover:text-xl'><BsFillArrowRightSquareFill /></button>
            </div>
        </div>
    );
};

export default Home;