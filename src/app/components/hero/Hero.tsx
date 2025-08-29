import XrayImg from '@/app/features/xrayImg/XrayImg';
import ContactBar from '@/app/features/сontactBar/ContactBar';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const [t] = useTranslation();

    return (
        <section className="flex flex-col justify-around mt-[4.625rem] tablet:mt-[6rem] gap-16 mb-[4rem] tablet:flex-row tablet:mb-[5rem] tablet:gap-10 desktop:gap-20 ">
            <div className="tablet:w-[50%] flex flex-col justify-center gap-[2rem] tablet:gap-[2.5rem]">
                <div className="flex flex-col justify-center gap-[0.9375rem] tablet:gap-[0.625rem]">
                    <h2 className="text-[2.5rem] desktop:text-[5rem] leading-[90%]">
                        {t('hero.title')}
                    </h2>
                    <span className="block text-[1rem] tablet:text-[0.875rem] desktop:text-[1.125rem] tablet:text-gray">
                        {t('hero.description')}
                    </span>
                </div>
                <ContactBar value="hero.resume" />
            </div>
            <XrayImg
                classNameWrapper="relative w-full h-[31.25rem] tablet:w-[50%]  tablet:h-[25rem] desktop:w-[37.5rem]  desktop:h-[37.5rem] overflow-hidden rounded-[1rem]"
                srcDownImg="./images/hero.jpeg"
                srcUpImg="./images/hero2.jpeg"
                alt="my photo"
            />
        </section>
    );
};

export default Hero;
