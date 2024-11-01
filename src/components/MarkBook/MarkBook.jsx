
const MarkBook = ({ markBook }) => {
    const { bookId, bookName, author, image, tags, yearOfPublishing, totalPages } = markBook
    return (
        <div className="card bg-base-100 shadow-xl h-full hover:shadow-2xl">
            <figure className="bg-gray-100">
                <img
                    className="h-56 py-4"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex gap-6 ">
                    {
                        tags.map((tag, i) => <button key={i} className="btn btn-sm bg-green-100 rounded-full px-4 text-green-600">{tag}</button>)
                    }
                </div>
                <h2 className="card-title ">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Author: {author}</p>
                <div className="border  border-dashed my-4  "></div>
                <div className="card-actions justify-between ">
                    <div className="badge badge-outline">Fiction</div>
                    <div>Pages: {totalPages}</div>
                    <div>Published: {yearOfPublishing}</div>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-300" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkBook;