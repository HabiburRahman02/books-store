import { createContext, useState } from "react";

export const BookContext = createContext(null);
const BookContextMain = ({ children }) => {
    const [markBooks, setMarkBooks] = useState([]);
    const handleMarkAsRead = book => {
        setMarkBooks([...markBooks, book])
        // console.log(markBooks);
    }
    const info = {
        handleMarkAsRead,
        markBooks
    }
    return (
        <BookContext.Provider value={info}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextMain;