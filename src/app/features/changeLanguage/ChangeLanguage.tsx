import { TABLET } from '@/app/shared/constants';
import { useWindowSize } from '@uidotdev/usehooks';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const { width } = useWindowSize();

    return (
        <div
            className={`flex gap-2 tablet:mt-0 ${width && width < TABLET ? 'absolute font-medium' : 'relative'}`}
            style={width && width < TABLET ? { top: 245, left: 100 } : {}}
        >
            <button
                className="w-[1.875rem] h-[1.875rem] tablet:w-[1.25rem] tablet:h-[1.25rem] hover:text-hover-text"
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <span>/</span>
            <button
                className="w-[1.875rem] h-[1.875rem] tablet:w-[1.25rem] tablet:h-[1.25rem] hover:text-hover-text"
                onClick={() => changeLanguage('ru')}
            >
                RU
            </button>
        </div>
    );
};

export default ChangeLanguage;
