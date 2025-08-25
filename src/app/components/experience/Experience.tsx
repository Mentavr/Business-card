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
                <h2 className="text-[57px]  leading-[90%]   tablet:w-[50%] desktop:text-[90px]">
                    {t('experience.title').toUpperCase()}
                </h2>
                <div className="flex flex-col gap-[40px] tablet:gap-[80px] tablet:w-[50%]">
                   {experience.map(({title, description, date}) => {
                    return <ExperienceCard key={date}  title={title} description={description} date={date} />
                   })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
