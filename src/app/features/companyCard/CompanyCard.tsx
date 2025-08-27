import WorkCard from "@/app/features/workCard/WorkCard";
import { CompanyItems } from "@/app/shared/data/type";
import { useTranslation } from "react-i18next";

interface ICompanyCard {
    companyName: string,
    companyItems: CompanyItems[];
    className?: string;
}

const CompanyCard = ({companyItems, companyName, className}:ICompanyCard) => {

    const [t] = useTranslation();

    return (
        <section
        className={`pb-[4rem] tablet:pt-[2rem] tablet:pb-[7.625rem] ${className}`}
    >
        <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 tablet:mb-[130px]">
            <h2 className="text-[57px]  leading-[90%]   tablet:w-[50%] desktop:text-[90px]">
                {t(`${companyName}.title`)}
            </h2>
            <div className="flex flex-col gap-[24px] tablet:gap-[40px] tablet:w-[50%]">
                <p className="text-gray text-[16px] tablet:text-[18px]">
                    {t(`${companyName}.description`)}
                </p>
            </div>
        </div>
        <div className="flex flex-wrap justify-between gap-[30px] desktop:gap-[50px]">
            {companyItems.map(({title, img, description, works, stack}, index) => {
                return <WorkCard key={index} name={title} img={img} description={description} works={works} stack={stack}/> 
            })}
        </div>
    </section>
    )
}

export default CompanyCard;