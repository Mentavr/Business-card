import SocialLink from '@/app/features/socialLink/SocialLink';
import { ROUTS, TABLET } from '@/app/shared/constants';
import LnIcon from '@/app/shared/svg/LnIcon';
import TgIcon from '@/app/shared/svg/TgIcon';
import Button from '@/app/ui/button/Button';
import { useWindowSize } from '@uidotdev/usehooks';
import { type MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const [t] = useTranslation();
    const { width } = useWindowSize();
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
    const radius = 200;

    const { pathname } = useLocation();

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: -9999, y: -9999 });
    };

    return (
        <section className={`pb-[64px] tablet:pt-[122px] ${pathname === ROUTS.about ? 'tablet:pt-[2rem]' : 'pt-[64px] tablet:pb-[122px]'}`} >
            <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 ">
                <h2 className="text-[3.5625rem]  leading-[90%]   tablet:w-[50%] desktop:text-[5.625rem]">
                    {t('about.title').toUpperCase()}
                </h2>
                <div className="flex flex-col gap-[1.5rem] tablet:gap-[1rem] tablet:w-[50%]">
                    <h3 className="leading-[140%] font-medium text-[24px] tablet:text-[32px]">
                        {t('about.subTitle')}
                    </h3>
                    <p className=" text-gray text-[18px] tablet:text-[]">
                        {t('about.description')}
                    </p>
                    {pathname !== ROUTS.about && (
                        <Link
                            to={ROUTS.about}
                            className="block w-max mt-[1.5rem] tablet:mt-[2.5rem] uppercase text-yellow hover:text-[orange] border-b-[2px] "
                        >
                            {t('about.link')}
                        </Link>
                    )}
                    {pathname === ROUTS.about && (
                        <div className="flex items-center gap-[1rem] mt-[16px] tablet:mt-[24px]">
                            <Button
                                link
                                isIcon
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('about.resume')}
                            </Button>
                            <nav className="flex items-center gap-[1rem]">
                                <SocialLink
                                    icon={<LnIcon />}
                                    type="linkedin"
                                    value="/артем-быков-054449224/"
                                />
                                <SocialLink
                                    icon={<TgIcon />}
                                    type="telegram"
                                    value="@ArtemMentavr"
                                />
                            </nav>
                        </div>
                    )}
                </div>
                {width && width < TABLET && pathname !== ROUTS.about && (
                    <img src="./images/hero3.jpeg" className="w-full rounded-[1rem]" />
                )}
            </div>
            {pathname === ROUTS.about && (
                <div
                    className="relative w-full h-[31.25rem] mt-[60px] tablet:mt-[120px] tablet:h-[25rem] desktop:h-[37.5rem] overflow-hidden rounded-[1rem]"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="./images/about1.jpeg"
                        alt="my photo"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />

                    <img
                        src="./images/about2.jpeg"
                        alt="my photo"
                        className="absolute top-0 left-0 w-full h-full object-cover brightness-110"
                        style={{
                            clipPath: `circle(${radius}px at ${mousePos.x}px ${mousePos.y}px)`,
                        }}
                    />
                </div>
            )}
        </section>
    );
};

export default About;
