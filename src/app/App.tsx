import { Outlet } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import ScrollToTop from './features/scrollToTop/ScrollToTop';

const App = () => {
    return (
        <Layout>
            <ScrollToTop />
            <Outlet />
        </Layout>
    );
};

export default App;
