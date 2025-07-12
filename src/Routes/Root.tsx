import {
    createBrowserRouter,
    // Navigate,
} from "react-router";
import Main from "../Layouts/Main";
import Error from "../Pages/ErrorPage/Error";
import Books from "../Pages/Books/Books";
import CreateBook from "../Pages/Books/CreateBook";
import SingleBook from "../Pages/Books/SingleBook";
import EditBook from "../Pages/Books/EditBook";
import Borrow from "../Pages/Borrows/Borrow";
import BorrowSummarry from "../Pages/Borrows/BorrowSummarry";

const Root = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Books></Books>
                // element: <Navigate to="/books" />
            },
            {
                path: '/books',
                element: <Books></Books>
            },
            {
                path: "/create-book",
                element: <CreateBook></CreateBook>
            },
            {
                path: '/books/:id',
                element: <SingleBook></SingleBook>
            },
            {
                path: '/edit-boook/:id',
                element: <EditBook></EditBook>
            },
            {
                path: '/borrow/:BookId',
                element: <Borrow></Borrow>
            },
            {
                path: '/borrow-summary',
                element: <BorrowSummarry></BorrowSummarry>
            }
        ]
    },
]);

export default Root;