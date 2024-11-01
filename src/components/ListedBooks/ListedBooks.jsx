import { useContext, useState } from "react";
import { BookContext } from "../context/BookContextMain";
import MarkBook from "../MarkBook/MarkBook";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    const { markBooks, setMarkBooks } = useContext(BookContext);
    const [sort, setSort] = useState('');

    const handleSort = type => {
        setSort(type)
        if (type === 'Sort-by-pages') {
            const sortedByPages = [...markBooks].sort((a, b) => a.totalPages - b.totalPages);
            setMarkBooks(sortedByPages)
        }
        else if (type === 'Sort-by-year') {
            const sortedByYear = [...markBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setMarkBooks(sortedByYear);
        }
    }


    return (
        <div className="my-14">
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 btn-accent text-white">{
                    sort ? sort : 'Sort By'
                }</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Sort-by-pages')}><a>Sort by pages number</a></li>
                    <li onClick={() => handleSort('Sort-by-year')}><a>Sort by year</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList className={' max-w-64 mx-auto'}>
                    <Tab>Listed Books</Tab>
                    <Tab>Wished Books</Tab>
                </TabList>

                <TabPanel>
                    <h4 className="text-2xl font-semibold text-center my-8">Listed Books: {markBooks.length}</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                        {
                            markBooks.map(markBook => <MarkBook key={markBook.bookId} markBook={markBook}></MarkBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;