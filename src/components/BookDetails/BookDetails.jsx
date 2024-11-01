import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();

    const newBook = books.find(book => book.bookId === parseInt(bookId))
    const { bookId: currentBookId, bookName, totalPages, publisher, yearOfPublishing, rating, author, image, tags, review } = newBook;

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
                    <p>Author: {author}</p>
                    <div className="border"></div>
                    <p className="text-gray-600 text-lg">Fiction</p>
                    <div className="border"></div>
                    <p><span className="font-bold">Review:</span> {review}</p>
                    <div className="flex gap-6">
                        <span className="font-bold">Tag</span>
                        {
                            tags.map((tag, i) => <button key={i} className="btn btn-sm bg-green-100 rounded-full px-4 text-green-600">{tag}</button>)
                        }
                    </div>
                    <div className="border"></div>
                    {/* <div className="flex gap-12">
                        <span className="text-gray-500 font-bold">Number of Pages:</span>
                        <span className="font-bold"> {totalPages}</span>
                    </div>
                    <div className="flex gap-12">
                        <span className="text-gray-500 font-bold">Publisher:</span>
                        <span className="font-bold"> {publisher}</span>
                    </div>
                    <div className="flex gap-12">
                        <span className="text-gray-500 font-bold">Year of Publishing:</span>
                        <span className="font-bold"> {yearOfPublishing}</span>
                    </div>
                    <div className="flex gap-12">
                        <span className="text-gray-500 font-bold">Rating:</span>
                        <span className="font-bold"> {rating}</span>
                    </div> */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="text-gray-400 font-bold">Total pages Number</td>
                                    <td className="font-bold">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-400 font-bold">Publisher:</td>
                                    <td className="font-bold">{publisher}</td>
                                </tr>
                                <tr>
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
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;