import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Card = () => {

    const { data: allData = [], isLoading, refetch } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await fetch(`https://new-task-server-zeta.vercel.app/allData`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`https://new-task-server-zeta.vercel.app/allData/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application.json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Delete Confirmed')
                    refetch()
                }
            })
            .catch(err => console.error(err))
    }


    if (isLoading) {
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }


    return (
        <div className='mx-auto container'>
            <div>
                <h1 className='text-start text-2xl font-serif p-4'>Here our all order</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>title</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>brand</th>
                            <th>stock</th>
                            <th>discountPercentage</th>
                            <th>category</th>
                            <th>description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData?.map((data, i) =>
                                <tr key={data.id}>
                                    <th>{i + 1}</th>
                                    <th><div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={data.thumbnail} />
                                        </div>
                                    </div></th>
                                    <th className='font-semibold'>{data?.title}</th>
                                    <td className='font-semibold'>{data?.price}</td>
                                    <td className='font-semibold'>{data?.rating}</td>
                                    <td className='font-semibold'>{data?.brand}</td>
                                    <td className='font-semibold'>{data?.stock}</td>
                                    <td className='font-semibold'>{data?.discountPercentage}</td>
                                    <td className='font-semibold'>{data?.category}</td>
                                    <td className='font-semibold'>{data?.description.slice(0, 20)}...</td>
                                    <td> <div>
                                        <button onClick={() => handleDelete(data._id)} className="btn btn-square w-full btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </div>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card;

