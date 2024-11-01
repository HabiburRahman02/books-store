import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();

    const newBook = books.find(book => book.bookId === parseInt(bookId))
    const { bookId: currentBookId, bookName, author, image, tags } = newBook;

    return (
        <div className="hero my-14">
            <div className="hero-content flex-col lg:flex-row gap-6">
                <div className="md:w-1/2 bg-base-200 p-16 rounded-xl">
                    <img
                        src={image}
                        className="w-full rounded-xl h-[550px]" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;