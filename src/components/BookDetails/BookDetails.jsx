import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookContext } from "../context/BookContextMain";

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const newBook = books.find(book => book.bookId === parseInt(bookId))
    const { bookId: currentBookId, bookName, price, totalPages, publisher, yearOfPublishing, rating, author, image, tags, review } = newBook;

    const { handleMarkAsRead, handleIncrease } = useContext(BookContext);
    console.log(newBook);


    return (
        <div className="hero my-14">
            <div className="hero-content flex-col lg:flex-row gap-6">
                <div className="md:w-1/2 bg-base-200 p-16 rounded-xl">
                    <img
                        src={image}
                        className="w-full rounded-xl h-[550px]" />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="font-semibold text-lg text-gray-400">Author: {author}</p>
                    <div className="border"></div>
                    <p className="text-gray-600 text-lg">Fiction</p>
                    <p className="text-gray-600 text-lg"> ${price}</p>
                    <div className="border"></div>
                    {/* <p><span className="font-bold">Review:</span> {review}</p> */}
                    <div className="flex gap-6">
                        <span className="font-bold">Tag</span>
                        {
                            tags.map((tag, i) => <button key={i} className="btn btn-sm bg-green-100 rounded-full px-4 text-green-600">{tag}</button>)
                        }
                    </div>
                    <div className="border"></div>
                    <div className="overflow-x-auto">
                        <table className="table ml-0">
                            <tbody>
                                <tr className="border-none">
                                    <td className="text-gray-400 font-bold">Total pages Number</td>
                                    <td className="font-bold">{totalPages}</td>
                                </tr>
                                <tr className="border-none">
                                    <td className="text-gray-400 font-bold">Publisher:</td>
                                    <td className="font-bold">{publisher}</td>
                                </tr>
                                <tr className="border-none">
                                    <td className="text-gray-400 font-bold">Years of Publishing:</td>
                                    <td className="font-bold">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-400 font-bold">Rating:</td>
                                    <td className="font-bold">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <span>Quantity:{quantity}</span>
                    <span>Total Price:{totalPrice}</span> */}
                    <div className="flex gap-6">
                        <button
                            onClick={() => handleIncrease(newBook)}
                            className="btn btn-accent text-white">Increase +</button>
                        <button
                            onClick={() => handleDecrease(newBook)}
                            className="btn btn-secondary ">Decrease -</button>
                    </div>
                    <div className="flex gap-6">
                        <button
                            onClick={() => handleMarkAsRead(newBook)}
                            className="btn btn-accent btn-outline">Read As Read</button>
                        <button className="btn btn-accent text-white ">Wish List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;