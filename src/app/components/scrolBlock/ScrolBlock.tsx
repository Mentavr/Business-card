import clsx from 'clsx';
import cls from './style.module.css';
import { useMouse, useWindowScroll } from '@uidotdev/usehooks';
import { Fade } from 'react-awesome-reveal';
import { useMemo, useRef, useState } from 'react';

export const Main = () => {
    const [{ y }] = useWindowScroll();
    const [mouse] = useMouse();

    const [isAnimate, setAnimate] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useMemo(() => {
        if (!ref.current?.clientHeight || !y) return;
        if (y > ref.current?.clientHeight / 2) {
            setAnimate(true);
        }
        if (y < ref.current?.clientHeight / 10) {
            setAnimate(false);
        }
    }, [y]);

    const xIntersecting = mouse.x;
    const yIntersecting = mouse.y;

    Object.assign(document.documentElement, {
        style: `
      --scrollTop: ${y};
      --scrollBlur: ${y && y / 50}px;
      --move-x:${(xIntersecting - window.innerWidth / 2) * -0.005}px;
      --move-y:${(yIntersecting - window.innerHeight / 2) * -0.005}px;
      `,
    });
    return (
        <div className="w-[100vw]">
            <div className={cls.mainWrapper}>
                <div ref={ref} className="sticky top-[0px] ">
                    <div className="h-[100vh] bg-black overflow-hidden">
                        <div className={clsx(cls.titleWrapper, cls.firstTitle)}>
                            {isAnimate && (
                                <Fade duration={3000} triggerOnce>
                                    <div className="flex">
                                        <p className={cls.text}>I </p>
                                        <span>' '</span>
                                        <p className={cls.text}>C</p>
                                        <p className={cls.text}>R</p>
                                        <p className={cls.text}>E</p>
                                        <p className={cls.text}>A</p>
                                        <p className={cls.text}>T</p>
                                        <p className={cls.text}>E</p>
                                    </div>
                                </Fade>
                            )}
                        </div>
                        <div className={clsx(cls.titleWrapper, cls.secondTitle)}>
                            {isAnimate && (
                                <Fade duration={3000} triggerOnce>
                                    <div className="flex">
                                        <p className={cls.text}>T</p>
                                        <p className={cls.text}>H</p>
                                        <p className={cls.text}>E</p>
                                        <span>' '</span>
                                        <p className={cls.text}>F</p>
                                        <p className={cls.text}>U</p>
                                        <p className={cls.text}>T</p>
                                        <p className={cls.text}>U</p>
                                        <p className={cls.text}>R</p>
                                        <p className={cls.text}>E</p>
                                    </div>
                                </Fade>
                            )}
                        </div>
                        <div className={cls.imgWrapperBack}>
                            <img
                                className={cls.imgSecond}
                                src="./images/mainPage/bgSecond.jpeg"
                                alt=""
                            />
                        </div>
                        <div className={clsx(cls.imgWrapperFront)}>
                            <img className={clsx(cls.img)} src="./images/mainPage/bg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100vh] w-[100vw] bg-[red]">asd</div>
        </div>
    );
};
