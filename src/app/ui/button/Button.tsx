import ArrayIcon from '@/app/shared/svg/ArrayIcon';
import { forwardRef, useState, MouseEventHandler } from 'react';
import type { ButtonHTMLAttributes, TouchEventHandler } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isIcon?: boolean;
    link?: boolean;
    href?: string;
    target?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    ({ children, isIcon, className, link = false, href, target, ...props }, ref) => {
        const [isHover, setHover] = useState<boolean>(false);

        const mouseEnter: MouseEventHandler<HTMLButtonElement | HTMLElement> = () => {
            setHover(true);
        };
        const mouseLeave: MouseEventHandler<HTMLButtonElement | HTMLElement> = () => {
            setHover(false);
        };

        const touchStart: TouchEventHandler<HTMLButtonElement | HTMLElement> = () => {
            setHover(true);
        };
        const touchEnd: TouchEventHandler<HTMLButtonElement | HTMLElement> = () => {
            setHover(false);
        };

        const style = `font-bold text-[14px] flex gap-[12px] items-center h-[3rem] p-[0.25rem] pl-[1rem]  duration-200 ease-out rounded-[6.25rem] bg-yellow hover:bg-[orange] text-main   desktop:text-[16px] ${isHover && isIcon ? 'pr-[0.375rem]' : 'pr-[1rem]'}`;

        return link ? (
            <a
                href={href}
                className={`${style} ${className} hover:text-main`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
                target={target}
                rel="noopener noreferrer"
            >
                {children}
                {isIcon && (
                    <div
                        className={`bg-main rounded-[100%] duration-200 ease-out ${isHover ? 'w-[2.5rem] h-[2.5rem]' : 'w-[0.625rem] h-[0.625rem]'} flex justify-center items-center`}
                    >
                        <ArrayIcon
                            width={isHover ? '13' : '0'}
                            height={isHover ? '13' : '0'}
                            color={isHover ? 'white' : 'black'}
                        />
                    </div>
                )}
            </a>
        ) : (
            <button
                ref={ref}
                {...props}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`${style} ${className}`}
            >
                {children}
                {isIcon && (
                    <div
                        className={`bg-main rounded-[100%] duration-200 ease-out ${isHover ? 'w-[2.5rem] h-[2.5rem]' : 'w-[0.625rem] h-[0.625rem]'} flex justify-center items-center`}
                    >
                        <ArrayIcon
                            width={isHover ? '13' : '0'}
                            height={isHover ? '13' : '0'}
                            color={isHover ? 'white' : 'black'}
                        />
                    </div>
                )}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
