import { useTranslation } from 'react-i18next';

interface IExperienceCard {
    title: string;
    date: string;
    description: string;
}

const ExperienceCard = ({ title, date, description }: IExperienceCard) => {
    const [t] = useTranslation();

    return (
        <div className="flex flex-col gap-[0.75rem] tablet:gap-[1rem]">
            <div className="flex flex-col justify-between gap-[0.25rem] tablet:gap-[0] tablet:flex-row">
                <h3 className="font-medium text-[1.125rem] tablet:text-[1.5rem]">{t(title)}</h3>
                <span className="text-gray text-[1rem] tablet:text-[1.125rem]">{t(date)}</span>
            </div>
            <p className="text-gray text-[1rem] tablet:text-[1.125rem]">{t(description)}</p>
        </div>
    );
};

export default ExperienceCard;
