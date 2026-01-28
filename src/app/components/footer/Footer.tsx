import SendEmail from '@/app/features/sendEmail/SendEmaill';
import SocialLink from '@/app/features/socialLink/SocialLink';
import socials from '@/app/shared/data/socials';
import i18n from '@/app/shared/i18n/i18n';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation();
    return (
        <footer
            id="contacts"
            className="container pt-[4rem] pb-[1.25rem] tablet:pb-[4rem] tablet:pt-[7.625rem] tablet:pb-[3.625rem]"
        >
            <div className="flex flex-col justify-around gap-16 tablet:flex-row tablet:gap-10 desktop:gap-20 ">
                <div className="flex flex-col tablet:w-[50%]">
                    <h2 className="text-[3.5625rem]  leading-[90%]  desktop:text-[5.625rem] mb-[1rem]">
                        {t('footer.title')}
                    </h2>
                    <div className="flex gap-[0.3125rem] text-[1.125rem] text-gray flex-wrap mb-[1.25rem]">
                        <span> {t('footer.description')}</span>
                        <a
                            href="mailto:mentarv94@gmail.com"
                            target="_blank"
                            className="cursor-pointer block w-max border-b-[0.125rem] text-yellow border-yellow desktop:hover:text-[orange] desktop:hover:border-[orange]"
                        >
                            mentarv94@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-[0.3125rem]  text-[1.125rem] text-gray mb-[2.5rem] flex-wrap">
                        <span>{t('footer.resumeTitle')}</span>
                        <a
                            className="cursor-pointer block w-max border-b-[0.125rem] text-yellow border-yellow desktop:hover:text-[orange] desktop:hover:border-[orange]"
                            href={i18n.language === 'en' ? "/ResumeEn.pdf" : "/ResumeRu.pdf"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('footer.resume')}
                        </a>
                    </div>
                    <nav className="flex items-center gap-[1rem]">
                        {socials.map(({ icon, type, value, id }) => {
                            return <SocialLink key={id} icon={icon} type={type} value={value} />;
                        })}
                    </nav>
                </div>
                <div className="tablet:w-[50%]">
                    <SendEmail />
                </div>
            </div>
            <span className="block mt-[2.5rem] tablet:mt-[1.25rem]">{`© ${new Date(Date.now()).getFullYear()} ${t('footer.name')}`}</span>
        </footer>
    );
};

export default Footer;
