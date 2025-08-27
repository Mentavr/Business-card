import { ROUTS } from '@/app/shared/constants';
import PenIcon from '@/app/shared/svg/PenIcon';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Popover } from 'react-tiny-popover';

const Contacts = () => {
    const [t] = useTranslation();
    const [isPopoverOpen, setOpen] = useState(false);

    const scrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.querySelector(ROUTS.contacts);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['left']}
            content={
                 (
                    <div className="text-[0.5rem] tablet:text-[0.875rem] desktop:text-[1rem] text-[orange] bg-[rgba(10,10,10,0.1)] backdrop-blur-md p-[10px] pt-[5px] pb-[5px] rounded-[30px] border-[1px] border-[orange]">
                        {t('hero.contacts')}
                    </div>
                )
            }
            padding={10}
        >
            <a
                onClick={scrollToContacts}
                href={ROUTS.contacts}
                className="block group w-[40px] h-[40px] rounded-[100%] bg-light-gray cursor-pointer fixed top-[60px] right-[15px] 
          tablet:left-auto tablet:top-auto tablet:bottom-[20px] tablet:right-[20px] 
          desktop:bottom-[40px] desktop:right-[40px] p-[10px] z-[50]"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <PenIcon />
            </a>
        </Popover>
    );
};

export default Contacts;
