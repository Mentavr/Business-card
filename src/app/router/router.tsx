import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import App from '../App';
import AboutMe from '../pages/AboutMe/AboutMe';
import Company from '../pages/Company/Company';


export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/about',
                element: <AboutMe />,
            },
            {
                path: '/works',
                element: <Company />,
            },
        ],
    },
]);
