import SocialLink from '@/app/features/socialLink/SocialLink';
import LnIcon from '@/app/shared/svg/LnIcon';
import TgIcon from '@/app/shared/svg/TgIcon';
import Button from '@/app/ui/button/Button';
import { type MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const [t] = useTranslation();
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
    const radius = 200;

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
        <section className="flex flex-col justify-around mt-[74px] tablet:mt-[96px] gap-16 mb-[64px] tablet:flex-row tablet:mb-[5rem] tablet:gap-10 desktop:gap-20 ">
            <div className="tablet:w-[50%] flex flex-col justify-center gap-[2rem] tablet:gap-[2.5rem]">
                <div className="flex flex-col justify-center gap-[0.9375rem] tablet:gap-[10px]">
                    <h2 className="text-[40px] desktop:text-[80px] leading-[90%]">
                        {t('hero.title')}
                    </h2>
                    <span className="block text-[1rem] tablet:text-[0.875rem] desktop:text-[1.125rem] tablet:text-gray">
                        {t('hero.description')}
                    </span>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <Button
                        link
                        isIcon
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('hero.resume')}
                    </Button>
                    <nav className="flex items-center gap-[1rem]">
                        <SocialLink
                            icon={<LnIcon />}
                            type="linkedin"
                            value="/артем-быков-054449224/"
                        />
                        <SocialLink icon={<TgIcon />} type="telegram" value="@ArtemMentavr" />
                    </nav>
                </div>
                {/* <a
                    href={`${ROUTS.contacts}`}
                    className="block w-max  uppercase text-yellow hover:text-[orange] border-b-[2px] "
                >
                    {t('hero.contacts')}
                </a> */}
            </div>

            <div
                className="relative w-full h-[31.25rem] tablet:w-[50%]  tablet:h-[25rem] desktop:w-[37.5rem]  desktop:h-[37.5rem] overflow-hidden rounded-[1rem]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src="./images/hero.jpeg"
                    alt="my photo"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                <img
                    src="./images/hero2.jpeg"
                    alt="my photo"
                    className="absolute top-0 left-0 w-full h-full object-cover brightness-110"
                    style={{
                        clipPath: `circle(${radius}px at ${mousePos.x}px ${mousePos.y}px)`,
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
