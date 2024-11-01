import React, { useContext } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BookContext } from '../context/BookContextMain';


const Dashboard = () => {
    const { markBooks } = useContext(BookContext);

    return (
        <div className='my-14 h-[500px] md:w-1/2 mx-auto'>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={markBooks}
                >
                    <XAxis dataKey="yearOfPublishing" />
                    <YAxis dataKey='totalPages' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="yearOfPublishing" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;