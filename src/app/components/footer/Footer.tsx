import SendEmail from '@/app/features/sendEmail/SendEmaill';
import SocialLink from '@/app/features/socialLink/SocialLink';
import LnIcon from '@/app/shared/svg/LnIcon';
import TgIcon from '@/app/shared/svg/TgIcon';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation();
    return (
        <footer
            id="contacts"
            className="container pt-[4rem] pb-[1.25rem] tablet:pb-[4rem] tablet:pt-[7.625rem] tablet:pb-[7.625rem]"
        >
            <div className="flex flex-col justify-around gap-16 tablet:flex-row tablet:gap-10 desktop:gap-20 ">
                <div className="flex flex-col tablet:w-[50%]">
                    <h2 className="text-[3.5625rem]  leading-[90%]  desktop:text-[5.625rem] mb-[16px]">
                        {t('footer.title')}
                    </h2>
                    <div className="flex gap-[0.3125rem] text-[1.125rem] text-gray flex-wrap mb-[1.25rem]">
                        <span> {t('footer.description')}</span>
                        <a
                            href="mailto:mentarv94@gmail.com"
                            target="_blank"
                            className="cursor-pointer block w-max border-b-[0.125rem] text-yellow border-yellow hover:text-[orange] hover:border-[orange]"
                        >
                            mentarv94@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-[0.3125rem]  text-[1.125rem] text-gray mb-[2.5rem] flex-wrap">
                        <span>{t('footer.resumeTitle')}</span>
                        <a
                            className="cursor-pointer block w-max border-b-[0.125rem] text-yellow border-yellow hover:text-[orange] hover:border-[orange]"
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('footer.resume')}
                        </a>
                    </div>
                    <nav className="flex items-center gap-[1rem]">
                        <SocialLink
                            icon={<LnIcon />}
                            type="linkedin"
                            value="/артем-быков-054449224/"
                        />
                        <SocialLink icon={<TgIcon />} type="telegram" value="@ArtemMentavr" />
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
