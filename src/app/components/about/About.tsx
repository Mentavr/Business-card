import XrayImg from '@/app/features/xrayImg/XrayImg';
import ContactBar from '@/app/features/сontactBar/ContactBar';
import { ROUTS, TABLET } from '@/app/shared/constants';
import { useWindowSize } from '@uidotdev/usehooks';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const [t] = useTranslation();
    const { width } = useWindowSize();

    const { pathname } = useLocation();



    return (
        <section
            className={`pb-[4rem] tablet:pt-[7.625rem] ${pathname === ROUTS.about ? 'tablet:pt-[2rem] mt-[4.625rem] tablet:mt-[6rem]' : 'pt-[4rem] tablet:pb-[7.625rem]'}`}
        >
            <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 ">
                <h2 className="text-[3.5625rem]  leading-[90%]   tablet:w-[50%] desktop:text-[5.625rem]">
                    {t('about.title')}
                </h2>
                <div className="flex flex-col gap-[1.5rem] tablet:gap-[1rem] tablet:w-[50%]">
                    <h3 className="leading-[140%] font-medium text-[1.5rem] tablet:text-[2rem]">
                        {t('about.subTitle')}
                    </h3>
                    <p className=" text-gray text-[1.125rem] tablet:text-[]">
                        {t('about.description')}
                    </p>
                    {pathname !== ROUTS.about && (
                        <Link
                            to={ROUTS.about}
                            className="block w-max mt-[1.5rem] tablet:mt-[2.5rem] text-yellow hover:text-[orange] border-b-[0.125rem] "
                        >
                            {t('about.link')}
                        </Link>
                    )}
                    {pathname === ROUTS.about && <ContactBar value="about.resume" />}
                </div>
                {width && width < TABLET && pathname !== ROUTS.about && (
                    <img src="./images/hero3.jpeg" className="w-full rounded-[1rem]" />
                )}
            </div>
            {pathname === ROUTS.about && (
                <XrayImg
                    classNameWrapper="relative w-full h-[31.25rem] mt-[3.75rem] tablet:mt-[7.5rem] tablet:h-[25rem] desktop:h-[37.5rem] overflow-hidden rounded-[1rem]"
                    srcDownImg="./images/about1.jpeg"
                    srcUpImg="./images/about2.jpeg"
                    alt="my photo"
                />
            )}
        </section>
    );
};

export default About;
