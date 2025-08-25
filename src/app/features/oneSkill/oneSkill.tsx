interface IOneSkill {
    text: string;
}

const OneSkill = ({ text }: IOneSkill) => {
    return (
        <div className="flex items-center justify-center p-[24px] pt-[16px] pb-[16px] border-second-gray border-[1px] rounded-[100px] tablet:p-[40px] tablet:pt-[20px] tablet:pb-[20px] w-max">
            <span className="text-white text-[14px] font-bold tablet:text-[16px]">{text}</span>
        </div>
    );
};

export default OneSkill;
