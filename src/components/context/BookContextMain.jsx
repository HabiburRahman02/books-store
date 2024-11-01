import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext(null);
const BookContextMain = ({ children }) => {
    const [markBooks, setMarkBooks] = useState([]);
    const handleMarkAsRead = book => {
        const isExist = markBooks.find(markBook => markBook.bookId === book.bookId)
        if (isExist) {
            return toast.error("Already added")
        }
        else {
            setMarkBooks([...markBooks, book])
            toast.success("Read list added this book")
        }

    }
    const info = {
        handleMarkAsRead,
        setMarkBooks,
        markBooks
    }
    return (
        <BookContext.Provider value={info}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextMain;