import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';
import Contacts from '@/app/features/contants/Contacts';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Contacts />
            <Footer />
        </>
    );
};

export default Layout;
