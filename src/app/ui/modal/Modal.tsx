import clsx from 'clsx';
import { type MouseEvent, useState, useEffect, ReactNode } from 'react';

import useDisableScrolling from '@/app/shared/hooks/useDisableScrolling';
import Portal from '../portal/Portal';
import CloseIcon from '@/app/shared/svg/CloseIcon';

interface IModal {
    isOpen: boolean;
    setOpen: (e: boolean) => void;
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'custom';
    footerText?: ReactNode;
    className?: string;
}

const Modal = ({ isOpen, setOpen, children, size = 'md', footerText, className }: IModal) => {
    const [isMouseDownOutside, setIsMouseDownOutside] = useState(false);

    useDisableScrolling(isOpen);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, setOpen]);

    if (!isOpen) return null;

    const handleMouseDown = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsMouseDownOutside(true);
        }
    };

    const handleMouseUp = (e: MouseEvent) => {
        if (e.target === e.currentTarget && isMouseDownOutside) {
            setOpen(false);
        }
        setIsMouseDownOutside(false);
    };

    const dialogRadiusStyle = {
        ['rounded-[18px]']: size === 'sm',
        ['rounded-[30px]']: size === 'lg',
        ['rounded-[14px]']: size === 'md',
        ['rounded-[35px]']: size === 'custom',
    };

    const modalSizeStyle = {
        ['p-[45px] pt-[42px] pb-[48px] w-[450px] rounded-[18px]']: size === 'sm',
        ['p-[10px] w-[1000px]  rounded-[30px]']: size === 'lg',
        ['p-[40px] pb-[32px] pt-[42px] w-[550px] rounded-[14px]']: size === 'md',
        ['p-[10px]']: size === 'custom',
    };

    return (
        <Portal>
            <div
                className="w-full h-[100vh] bg-black/50  z-[100] fixed top-[0] left-[0] flex"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <dialog
                    open
                    onClick={(e) => e.stopPropagation()}
                    className={clsx('relative m-auto z-[101]', dialogRadiusStyle)}
                >
                    <button
                        className="top-[20px] absolute right-[20px] cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon />
                    </button>
                    <div className={clsx(modalSizeStyle, className)}>{children}</div>
                    {size === 'md' && (
                        <div className="rounded-b-[14px] h-[72px] pt-[25px] pb-[25px] flex justify-center flex-center bg-orange-color text-white-color">
                            {footerText}
                        </div>
                    )}
                </dialog>
            </div>
        </Portal>
    );
};

export default Modal;

Modal.displayName = 'Modal';
