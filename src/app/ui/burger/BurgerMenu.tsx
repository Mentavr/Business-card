import ChangeLanguage from '@/app/features/changeLanguage/ChangeLanguage';
import { type ReactNode, useRef, useEffect } from 'react';

interface IBurgerMenu {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
}

const BurgerMenu = ({ children, isOpen, setIsOpen }: IBurgerMenu) => {
    const closeIconStyle = 'block w-[2rem] h-[0.125rem] bg-gray duration-300 ease-out';
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (!menuRef.current || !isOpen) return;
            const rect = menuRef.current.getBoundingClientRect();
            
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen, setIsOpen]);

    return (
        <div className='z-[50]'>
            <button
                ref={buttonRef}
                className={`block w-[1.875rem] h-[1.875rem] flex flex-col justify-center items-center border-[0] tablet:hidden gap-[0.3125rem]  ${isOpen ? 'absolute z-[40] top-[1.375rem] right-[1.25rem]' : 'relative'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span
                    className={`${closeIconStyle} ${isOpen ? 'rotate-[45deg]  translate-y-[6px] bg-main' : 'rotate-[0]'}`}
                ></span>
                <span
                    className={`${closeIconStyle} ${isOpen ? 'rotate-[-45deg] bg-main' : 'rotate-[0]'}`}
                ></span>
            </button>

            <nav
                ref={menuRef}
                className={`flex absolute p-[30px] absolute top-[0] right-[0] w-[300px] h-[300px] duration-300 ease-out
                 rounded-[100%] text-main text-[15px] flex-col justify-end   tablet:translate-x-[0] tablet:translate-y-[0]  tablet:relative
                tablet:text-gray tablet:text-[1rem] tablet:w-[100%] tablet:h-[100%] tablet:flex 
                tablet:flex-row tablet:shadow-none tablet:p-0 tablet:gap-[30px] tablet:overflow-visible ${
                    isOpen
                        ? ' translate-x-[35%] translate-y-[-35%] bg-yellow   overflow-visible z-[30]'
                        : ' translate-x-[200%] translate-y-[-200%] overflow-hidden'
                }`}
            >
                {children}
                <ChangeLanguage />
            </nav>
        </div>
    );
};

export default BurgerMenu;
