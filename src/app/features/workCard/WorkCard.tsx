import { useTranslation } from 'react-i18next';

interface IWorkCard {
    img: string;
    name: string;
    description: string;
    works: string[];
    stack: string[];
}

const WorkCard = ({ name, description, works, img, stack }: IWorkCard) => {
    const [t] = useTranslation();
    return (
        <div className="flex flex-col gap-10 tablet:w-[45%] tablet:flex-wrap  desktop:flex-nowrap desktop:w-[100%] desktop:flex-row  desktop:gap-20 ">
            <div className="desktop:w-[50%]">
                <div className="rounded-[12px] bg-light-gray p-[20px] tablet:p-[30px]">
                    <img src={img} alt="Картинка проекта" className="object-cover" />
                </div>
            </div>
            <div className="desktop:w-[50%] flex flex-col">
                <div className="mb-[24px] tablet:mb-[32px]">
                    <h3 className="font-medium text-[24px] tablet:text-[32px]">{t(name)}</h3>
                    <p className="text-gray text-[16px] tablet:text-[18px]">{t(description)}</p>
                </div>
                <ul className="object-cover flex flex-col gap-[5px] mb-[30px] tablet:gap-[10px] tablet:mb-[50px]">
                    {works.map((elem) => {
                        return <li className="list-disc ml-[15px]">{t(elem)}</li>;
                    })}
                </ul>
                <div className="text-yellow flex flex-wrap gap-[5px] desktop:gap-[10px] desktop:mt-[auto]">
                    {stack.map((elem, index) => {
                        if (index === stack.length - 1) {
                            return <span key={index}>{elem}.</span>;
                        }
                        return <span key={index}>{elem},</span>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
