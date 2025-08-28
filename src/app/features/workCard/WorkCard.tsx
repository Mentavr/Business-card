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
                    className="rounded-[12px] bg-light-gray p-[20px] tablet:p-[30px] group cursor-pointer"
                >
                    <img src={img} alt="Картинка проекта" className="scale-[1] duration-200 ease-out group-hover:scale-[0.9]" />
                </div>
                <Modal
                    className="max-w-full tablet:max-w-[600px] desktop:max-w-[1000px]"
                    size="custom"
                    isOpen={isOpen}
                    setOpen={setOpen}
                >
                    <img
                        src={img}
                        alt="Картинка проекта"
                        className="object-cover  rounded-[30px] max-h-[660px]"
                    />
                </Modal>
            </div>
            <div className="desktop:w-[50%] flex flex-col">
                <div className="mb-[24px] tablet:mb-[32px]">
                    <h3 className="font-medium text-[24px] tablet:text-[32px]">{t(name)}</h3>
                    <p className="text-gray text-[16px] tablet:text-[18px]">{t(description)}</p>
                </div>
                <ul className="object-cover flex flex-col gap-[5px] mb-[30px] tablet:gap-[10px] tablet:mb-[50px]">
                    {works.map((elem, index) => {
                        return (
                            <li key={index} className="list-disc ml-[15px]">
                                {t(elem)}
                            </li>
                        );
                    })}
                </ul>
                <div className="text-yellow flex flex-wrap gap-[5px] desktop:gap-[10px] desktop:mt-[auto]">
                    {stack.map((elem, index) => {
                        return <OneSkill key={index} text={elem} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
