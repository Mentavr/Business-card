import { useTranslation } from 'react-i18next';
import { useWindowSize } from '@uidotdev/usehooks';
import { TABLET } from '@/app/shared/constants';
import { Link } from 'react-router-dom';

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

    const textTitle = t(title);

    return link[0] === '#' ? (
        <a
            href={link}
            onClick={() => onChange(false)}
            className={`${width && width < TABLET ? 'absolute font-medium' : 'relative'}`}
            style={width && width < TABLET ? { top: positionY, left: positionX } : {}}
        >
            {' '}
            {textTitle}
        </a>
    ) : (
        <Link
            to={link}
            onClick={() => onChange(false)}
            className={`${width && width < TABLET ? 'absolute font-medium' : 'relative'}`}
            style={width && width < TABLET ? { top: positionY, left: positionX } : {}}
        >
            {textTitle}
        </Link>
    );
};

export default NavHeader;
