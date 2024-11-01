import { useContext } from "react";
import { BookContext } from "../context/BookContextMain";
import MarkBook from "../MarkBook/MarkBook";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    const { markBooks } = useContext(BookContext);
    console.log(markBooks);
    return (
        <div className="my-14">
            <Tabs>
                <TabList>
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