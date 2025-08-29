import WorkCard from "@/app/features/workCard/WorkCard";
import { CompanyItems } from "@/app/shared/data/type";
import { useTranslation } from "react-i18next";

interface ICompanyCard {
    companyName: string,
    companyItems: CompanyItems[];
    className?: string;
    id?: string;
}

const CompanyCard = ({companyItems, companyName, className, id}:ICompanyCard) => {

    const [t] = useTranslation();

    return (
        <section
        className={`pb-[4rem] tablet:pt-[2rem] tablet:pb-[7.625rem] ${className}`}
        id={id}
    >
        <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 tablet:mb-[8.125rem]">
            <h2 className="text-[3.5625rem]  leading-[90%]   tablet:w-[50%] desktop:text-[5.625rem]">
                {t(`${companyName}.title`)}
            </h2>
            <div className="flex flex-col gap-[1.5rem] tablet:gap-[2.5rem] tablet:w-[50%]">
                <p className="text-gray text-[1rem] tablet:text-[1.125rem]">
                    {t(`${companyName}.description`)}
                </p>
            </div>
        </div>
        <div className="flex flex-wrap justify-between gap-[1.875rem] desktop:gap-[3.125rem]">
            {companyItems.map(({title, img, description, works, stack}, index) => {
                return <WorkCard key={index} name={title} img={img} description={description} works={works} stack={stack}/> 
            })}
        </div>
    </section>
    )
}

export default CompanyCard;