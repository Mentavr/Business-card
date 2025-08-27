interface IOneSkill {
    text: string;
}

const OneSkill = ({ text }: IOneSkill) => {
    return (
        <div className="flex items-center justify-center p-[12px] pt-[10px] pb-[10px] border-second-gray border-[1px] rounded-[100px] tablet:p-[12px]  w-max">
            <span className="text-white text-[10px] font-bold tablet:text-[12px]">{text}</span>
        </div>
    );
};

export default OneSkill;
