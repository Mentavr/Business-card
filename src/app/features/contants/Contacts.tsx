import { ROUTS } from '@/app/shared/constants';
import scrollTo from '@/app/shared/helpers/scrollTo';
import PenIcon from '@/app/shared/svg/PenIcon';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Popover } from 'react-tiny-popover';

const Contacts = () => {
    const [t] = useTranslation();
    const [isPopoverOpen, setOpen] = useState(false);

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['left']}
            content={
                 (
                    <div className="text-[0.5rem] tablet:text-[0.875rem] desktop:text-[1rem] text-[orange] bg-[rgba(10,10,10,0.1)] backdrop-blur-md p-[0.625rem] pt-[0.3125rem] pb-[0.3125rem] rounded-[1.875rem] border-[0.0625rem] border-[orange]">
                        {t('hero.contacts')}
                    </div>
                )
            }
            padding={10}
        >
            <a
                onClick={(e) => scrollTo(e, ROUTS.contacts)}
                href={ROUTS.contacts}
                className="block group w-[2.5rem] h-[2.5rem] rounded-[100%] bg-light-gray cursor-pointer fixed top-[3.75rem] right-[0.9375rem] 
          tablet:left-auto tablet:top-auto tablet:bottom-[1.25rem] tablet:right-[1.25rem] 
          desktop:bottom-[2.5rem] desktop:right-[2.5rem] p-[0.625rem] z-[5]"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <PenIcon />
            </a>
        </Popover>
    );
};

export default Contacts;
