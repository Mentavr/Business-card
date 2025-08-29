import { useTranslation } from 'react-i18next';
import OneSkill from '../oneSkill/oneSkill';
import Modal from '@/app/ui/modal/Modal';
import { useState } from 'react';

interface IWorkCard {
    img: string;
    name: string;
    description: string;
    works: string[];
    stack: string[];
}

const WorkCard = ({ name, description, works, img, stack }: IWorkCard) => {
    const [t] = useTranslation();
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="flex flex-col gap-10 tablet:w-[45%] tablet:flex-wrap  desktop:flex-nowrap desktop:w-[100%] desktop:flex-row  desktop:gap-20 ">
            <div className="desktop:w-[50%]">
                <div
                    onClick={handleOpen}
                    className="rounded-[0.75rem] bg-light-gray p-[1.25rem] tablet:p-[1.875rem] group cursor-pointer"
                >
                    <img src={img} alt="Картинка проекта" className="scale-[1] duration-200 ease-out group-hover:scale-[0.9]" />
                </div>
                <Modal
                    className="max-w-full tablet:max-w-[37.5rem] desktop:max-w-[62.5rem]"
                    size="custom"
                    isOpen={isOpen}
                    setOpen={setOpen}
                >
                    <img
                        src={img}
                        alt="Картинка проекта"
                        className="object-cover  rounded-[1.875rem] max-h-[41.25rem]"
                    />
                </Modal>
            </div>
            <div className="desktop:w-[50%] flex flex-col">
                <div className="mb-[1.5rem] tablet:mb-[2rem]">
                    <h3 className="font-medium text-[1.5rem] tablet:text-[2rem]">{t(name)}</h3>
                    <p className="text-gray text-[1rem] tablet:text-[1.125rem]">{t(description)}</p>
                </div>
                <ul className="object-cover flex flex-col gap-[0.3125rem] mb-[1.875rem] tablet:gap-[0.625rem] tablet:mb-[3.125rem]">
                    {works.map((elem, index) => {
                        return (
                            <li key={index} className="list-disc ml-[0.9375rem]">
                                {t(elem)}
                            </li>
                        );
                    })}
                </ul>
                <div className="text-yellow flex flex-wrap gap-[0.3125rem] desktop:gap-[0.625rem] desktop:mt-[auto]">
                    {stack.map((elem, index) => {
                        return <OneSkill key={index} text={elem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
