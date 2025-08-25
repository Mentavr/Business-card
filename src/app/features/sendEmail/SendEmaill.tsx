import Button from '@/app/ui/button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/app/shared/shema/shema';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';

interface ISendEmail {
    name: string;
    email: string;
    message: string;
    subject: string;
}

const SendEmail = () => {
    const [t] = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ISendEmail>({
        resolver: yupResolver(schema),
    });

    const form = useRef<HTMLFormElement>(null);

    const onSubmit: SubmitHandler<ISendEmail> = (data) => {
        console.log(data);
    
        if (!form.current) return;
    
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            toast.success(t('toast.success'));
            reset();
        })
        .catch(() => toast.error(t('toast.error')));
    
    };

    const newInputStyle = `bg-light-gray h-[46px] rounded-[4px] p-[10px]  tablet:p-[12px] tablet:h-[51px] pt-[16px] pb-[16px]`;
    const newTextAreaStyle = `bg-light-gray h-[148px] rounded-[4px] p-[10px] tablet:p-[12px] tablet:h-[156px] pt-[16px] pb-[16px]`;

    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px] tablet:gap-[10px]">
                <label htmlFor="name" className="text-[1rem] text-gray">
                    {t('form.name')}
                </label>
                <input
                    id="name"
                    {...register('name')}
                    name='name'
                    type="text"
                    className={`${newInputStyle}`}
                />
                {<span className="text-[red] text-[12px]">{t(errors?.name?.message ?? '')}</span>}
            </div>
            <div className="flex flex-col gap-[8px] tablet:gap-[10px]">
                <label htmlFor="email" className="text-[1rem] text-gray">
                    {t('form.email')}
                </label>
                <input
                    {...register('email')}
                    id="email"
                    type="mail"
                    name='email'
                    className={`${newInputStyle}`}
                />
                {<span className="text-[red] text-[12px]">{t(errors.email?.message ?? '')}</span>}
            </div>
            <div className="flex flex-col gap-[8px] tablet:gap-[10px]">
                <label htmlFor="subject" className="text-[1rem] text-gray">
                    {t('form.subject')}
                </label>
                <input
                    {...register('subject')}
                    id="subject"
                    type="text"
                    className={`${newInputStyle}`}
                    name='subject'
                />
                {<span className="text-[red] text-[12px]">{t(errors.subject?.message ?? '')}</span>}
            </div>
            <div className="flex flex-col gap-[8px] tablet:gap-[10px]">
                <label htmlFor="message" className="text-[1rem] text-gray">
                    {t('form.message')}
                </label>
                <textarea
                    {...register('message')}
                    name='message'
                    id="message"
                    className={`${newTextAreaStyle}`}
                ></textarea>
                {<span className="text-[red] text-[12px]">{t(errors.message?.message ?? '')}</span>}
            </div>
            <Button className="w-max" type="submit">
                {t('button.footer')}
            </Button>
        </form>
    );
};

export default SendEmail;
