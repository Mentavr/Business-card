import NavHeader from '@/app/features/navHeader/NavHeader';
import { ROUTS } from '@/app/shared/constants';
import { headerNav } from '@/app/shared/data/headerNav';
import BurgerMenu from '@/app/ui/burger/BurgerMenu';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const [t] = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header
            className="fixed top-0 left-0 z-10 w-full bg-[rgba(10,10,10,0.6)] backdrop-blur-md"
        >
            <div className="m-auto max-w-[1440px]">
                <div className="w-[91.4%] m-auto pt-[8px] pb-[8px] tablet:w-[89.1%] tablet:p-[1rem] tablet:pr-0 tablet:pl-0 text-gray flex justify-between items-center">
                    <h1 className="text-[1.75rem] tablet:text-[2rem]">
                        <Link to={ROUTS.main} className="block hover:desktop:text-[orange]">
                            {t('header.name')}
                        </Link>
                    </h1>
                    <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}>
                        <ul className="w-full flex tablet:flex-row tablet:gap-[2rem]">
                            {headerNav.map(({ title, link, positionX, positionY }) => (
                                <NavHeader
                                    key={title}
                                    title={title}
                                    link={link}
                                    onChange={setIsOpen}
                                    positionX={positionX}
                                    positionY={positionY}
                                />
                            ))}
                        </ul>
                    </BurgerMenu>
                </div>
            </div>
        </header>
    );
};

export default Header;
