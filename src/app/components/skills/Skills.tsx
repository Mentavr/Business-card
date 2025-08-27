import OneSkill from '@/app/features/oneSkill/oneSkill';
import { stack } from '@/app/shared/data/skils';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const [t] = useTranslation();

    return (
        <section className="pt-[4rem] pb-[4rem] tablet:pt-[7.625rem] tablet:pb-[7.625rem]" id="about">
            <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 ">
                <h2 className="text-[57px]  leading-[90%]   tablet:w-[50%] desktop:text-[90px]">
                    {t('skills.title')}
                </h2>
                <div className="flex flex-col gap-[0.625rem] tablet:w-[50%]">
                    <p className=" text-gray text-[1rem] tablet:text-[1.125rem]">
                        {t('skills.description')}
                    </p>
                    <span className='text-[1.25rem] tablet:text-[1.5625rem]'>{t('skills.stack')}</span>
                    <div className='flex flex-wrap text-yellow gap-[0.3125rem] text-[1rem] tablet:text-[1.125rem] tablet:gap-[0.5rem] mt-[16px] '>
                        {stack.map((elem, index) => {
                            return <OneSkill key={index} text={elem} />
                        })}
                    </div>
                </div>
            </div>
            {/* <Marquee>
                <div className="flex flex-nowrap mr-[12px] gap-[12px] mt-[1.5rem] tablet:gap-[16px] tablet:mr-[16px] tablet:mt-[3.875rem] min-w-[200%] whitespace-nowrap">
                    {stack.map((elem) => (
                        <OneSkill text={elem} />
                    ))}
                </div>
            </Marquee> */}
        </section>
    );
};

export default Skills;
