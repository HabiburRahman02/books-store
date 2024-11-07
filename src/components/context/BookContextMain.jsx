import { createContext, useState } from "react";

export const BookContext = createContext(null);
const BookContextMain = ({ children }) => {
    const [markBooks, setMarkBooks] = useState([]);
    console.log(markBooks);


    // const handleMarkAsRead = book => {
    //     const isExist = markBooks.find(markBook => markBook.bookId === book.bookId)
    //     if (isExist) {
    //         return toast.error("Already added")
    //     }
    //     else {
    //         setMarkBooks([...markBooks, book])
    //         toast.success("Read list added this book")
    //     }

    // }
    const handleMarkAsRead = book => {
        setMarkBooks([...markBooks, book])
        const price = markBooks.map(bk => bk);
        // console.log(price);
    }

    const handleIncrease = (book) => {
        const current = [...markBooks].find(bk => bk.bookId === book.bookId);
        const remaining = [...markBooks].filter(bk => bk.bookId !== book.bookId)
        if (current) {
            current.quantity++
            setMarkBooks([...remaining, current]);
        }
        else {
            book.quantity = 1
            setMarkBooks([...markBooks, book])
        }

    }

    const handleDecrease = () => {
        // if (quantity > 1) {
        //     setQuantity(prevQuantity => prevQuantity - 1)
        // }
    }

    const info = {
        handleMarkAsRead,
        setMarkBooks,
        markBooks,
        handleIncrease,
        handleDecrease,
    }
    return (
        <BookContext.Provider value={info}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextMain;