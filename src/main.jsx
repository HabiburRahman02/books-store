import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import BookContextMain from './components/context/BookContextMain';
import ListedBooks from './components/ListedBooks/ListedBooks';
import Dashboard from './components/Dashboard/Dashboard';
import CounterApp from './components/CounterApp';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/booksData.json`)
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'loca',
        element: <CounterApp></CounterApp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContextMain>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </BookContextMain>
  </StrictMode>,
)
