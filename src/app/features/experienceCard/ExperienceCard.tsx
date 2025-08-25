import { useTranslation } from 'react-i18next';

interface IExperienceCard {
    title: string;
    date: string;
    description: string;
}

const ExperienceCard = ({ title, date, description }: IExperienceCard) => {
    const [t] = useTranslation();

    return (
        <div className="flex flex-col gap-[12px] tablet:gap-[16px]">
            <div className="flex flex-col justify-between gap-[4px] tablet:gap-[0] tablet:flex-row">
                <h3 className="font-medium text-[18px] tablet:text-[24px]">{t(title)}</h3>
                <span className="text-gray text-[16px] tablet:text-[18px]">{t(date)}</span>
            </div>
            <p className="text-gray text-[16px] tablet:text-[18px]">{t(description)}</p>
        </div>
    );
};

export default ExperienceCard;
