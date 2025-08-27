import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';
import Contacts from '@/app/features/contants/Contacts';
import UpIcon from '@/app/features/upIcon/UpIcon';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <UpIcon />
            <Contacts />
            <Footer />
        </>
    );
};

export default Layout;
