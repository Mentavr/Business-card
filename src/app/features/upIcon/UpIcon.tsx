import { ROUTS } from '@/app/shared/constants';
import scrollTo from '@/app/shared/helpers/scrollTo';
import { useDocumentHeight } from '@/app/shared/hooks/useDocumentHeight';
import ArrowUpIcon from '@/app/shared/svg/ArrowUpIcon';
import { useWindowScroll } from '@uidotdev/usehooks';

const UpIcon = () => {
    const [scroll] = useWindowScroll();
    const height = useDocumentHeight();
    const progress = scroll ? scroll.y : 0 / (height - window.innerHeight);
    const opacity = Math.min(Math.max(progress ?? 0, 0), 1);

    return (
        <a
            onClick={(e) => scrollTo(e, ROUTS.header)}
            href={ROUTS.header}
            className="block group w-[2.5rem] h-[2.5rem] rounded-[100%] bg-light-gray cursor-pointer fixed top-[7.5rem] right-[0.9375rem] 
  tablet:left-auto tablet:top-auto tablet:bottom-[5rem] tablet:right-[1.25rem] 
  desktop:bottom-[6.25rem] desktop:right-[2.5rem] p-[0.625rem] z-[5]"
            style={{ opacity, transition: 'opacity 1s ease' }}
        >
            <ArrowUpIcon />
        </a>
    );
};

export default UpIcon;
