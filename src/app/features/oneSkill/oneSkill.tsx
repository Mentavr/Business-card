interface IOneSkill {
    text: string;
}

const OneSkill = ({ text }: IOneSkill) => {
    return (
        <div className="flex items-center justify-center p-[0.75rem] pt-[0.625rem] pb-[0.625rem] border-second-gray border-[0.0625rem] rounded-[6.25rem] tablet:p-[0.75rem]  w-max">
            <span className="text-white text-[0.625rem] font-bold tablet:text-[0.75rem]">{text}</span>
        </div>
    );
};

export default OneSkill;
