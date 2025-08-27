import { ROUTS } from '@/app/shared/constants';
import { useDocumentHeight } from '@/app/shared/hooks/useDocumentHeight';
import ArrowUpIcon from '@/app/shared/svg/ArrowUpIcon';
import { useWindowScroll } from '@uidotdev/usehooks';

const UpIcon = () => {
    const scrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.querySelector(ROUTS.header);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [scroll] = useWindowScroll();
    const height = useDocumentHeight();
    const progress = scroll ? scroll.y : 0 / (height - window.innerHeight);
    const opacity = Math.min(Math.max(progress ?? 0, 0), 1);

    return (
        <a
            onClick={scrollToContacts}
            href={ROUTS.header}
            className="block group w-[40px] h-[40px] rounded-[100%] bg-light-gray cursor-pointer fixed top-[120px] right-[15px] 
  tablet:left-auto tablet:top-auto tablet:bottom-[80px] tablet:right-[20px] 
  desktop:bottom-[100px] desktop:right-[40px] p-[10px] z-[50]"
            style={{ opacity, transition: 'opacity 1s ease' }}
        >
            <ArrowUpIcon />
        </a>
    );
};

export default UpIcon;
