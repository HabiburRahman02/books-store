import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mb-14">
            <h3 className="text-3xl font-semibold text-center">Books</h3>
            {books.length}
        </div>
    );
};

export default Books;