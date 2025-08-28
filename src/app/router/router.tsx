import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import App from '../App';
import AboutMe from '../pages/AboutMe/AboutMe';
import Company from '../pages/Company/Company';
import { ROUTS } from '../shared/constants';


export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: ROUTS.main,
                element: <Main />,
            },
            {
                path: ROUTS.about,
                element: <AboutMe />,
            },
            {
                path: ROUTS.works,
                element: <Company />,
            },
        ],
    },
]);
