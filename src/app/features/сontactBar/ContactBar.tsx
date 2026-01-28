import Button from '@/app/ui/button/Button';
import SocialLink from '../socialLink/SocialLink';
import socials from '@/app/shared/data/socials';
import { useTranslation } from 'react-i18next';
import i18n from '@/app/shared/i18n/i18n';

interface IContactBar {
    value: string;
}

const ContactBar = ({ value }: IContactBar) => {
    const [t] = useTranslation();
    return (
        <div className="flex items-center gap-[1rem] mt-[1rem] tablet:mt-[1.5rem]">
            <Button
                link
                isIcon
                href={i18n.language === 'en' ? '/ResumeEn.pdf' : '/ResumeRu.pdf'}
                target="_blank"
                rel="noopener noreferrer"
            >
                {t(value)}
            </Button>
            <nav className="flex items-center gap-[1rem]">
                {socials.map(({ icon, type, value, id }) => {
                    return <SocialLink key={id} icon={icon} type={type} value={value} />;
                })}
            </nav>
        </div>
    );
};

export default ContactBar;
