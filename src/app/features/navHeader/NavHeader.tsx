import { useTranslation } from 'react-i18next';
import { useWindowSize } from '@uidotdev/usehooks';
import { TABLET } from '@/app/shared/constants';
import { Link, useLocation } from 'react-router-dom';

interface INavHeader {
    link: string;
    title: string;
    onChange: (e: boolean) => void;
    positionX: number;
    positionY: number;
}

const NavHeader = ({ link, title, onChange, positionX, positionY }: INavHeader) => {
    const [t] = useTranslation();
    const { width } = useWindowSize();
    const { pathname } = useLocation();

    const textTitle = t(title);

    return (
        <Link
            to={link}
            onClick={() => onChange(false)}
            className={`text-main' ${width && width < TABLET ? 'absolute font-medium' : 'relative desktop:hover:text-[orange]'} 
            ${pathname === link && width && width < TABLET && 'text-[gray]'} 
            ${pathname === link && width && width > TABLET && 'text-yellow'}`}
            style={width && width < TABLET ? { top: positionY, left: positionX } : {}}
        >
            {textTitle}
        </Link>
    );
};

export default NavHeader;
