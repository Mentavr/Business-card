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
        <header className="w-[91.4%] m-[auto] pt-[1rem] pb-[1rem] tablet:w-[89.1%] tablet:p-[1.5rem] tablet:pr-[0rem] tablet:pl-[0rem] text-gray">
            <div className="flex justify-between items-center">
                <h1 className=" text-[1.75rem] tablet:text-[2rem]">
                    <Link to={ROUTS.main} className="block">
                        {t('header.name')}
                    </Link>
                </h1>
                <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}>
                    <ul className="w-[100% flex tablet:flex-row tablet:gap-[2rem] ">
                        {headerNav.map(({ title, link, positionX, positionY }) => {
                            return (
                                <NavHeader
                                    key={title}
                                    title={title}
                                    link={link}
                                    onChange={setIsOpen}
                                    positionX={positionX}
                                    positionY={positionY}
                                />
                            );
                        })}
                    </ul>
                </BurgerMenu>
            </div>
        </header>
    );
};

export default Header;
