import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';
import { ROUTS } from '@/app/shared/constants';
import PenIcon from '@/app/shared/svg/ PenIcon';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {

    const scrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        const target = document.querySelector(ROUTS.contacts);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            <Header />
            <a onClick={scrollToContacts} href={ROUTS.contacts} className="cursor-pointer fixed top-[10px] left-[200px] right-auto 
            tablet:left-auto tablet:top-auto tablet:bottom-[20px] tablet:right-[20px] 
            desktop:bottom-[40px] desktop:right-[40px] block h-[2rem] w-[2rem] rounded-full flex justify-center items-center z-[10]">
                <PenIcon />
            </a>
            {children}

            <Footer />
        </>
    );
};

export default Layout;
