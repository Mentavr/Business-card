import ExperienceCard from '@/app/features/experienceCard/ExperienceCard';
import { experience } from '@/app/shared/data/experience';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const [t] = useTranslation();

    return (
        <section
            className="pt-[4rem] pb-[4rem] tablet:pt-[7.625rem] tablet:pb-[7.625rem]"
            id="about"
        >
            <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 ">
                <h2 className="text-[3.5625rem]  leading-[90%]   tablet:w-[50%] desktop:text-[5.625rem]">
                    {t('experience.title')}
                </h2>
                <div className="flex flex-col gap-[2.5rem] tablet:gap-[5rem] tablet:w-[50%]">
                   {experience.map(({title, description, date}) => {
                    return <ExperienceCard key={date}  title={title} description={description} date={date} />
                   })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
