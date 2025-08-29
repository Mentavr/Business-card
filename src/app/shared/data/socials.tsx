import TgIcon from '@/app/shared/svg/TgIcon';
import LnIcon from '@/app/shared/svg/LnIcon';
import type { ReactNode } from 'react';

type Socials = {
    icon: ReactNode;
    type: 'linkedin' | 'telegram' | 'email' | 'phone' | 'github' | 'instagram' | 'custom';
    value: string;
    id: number;
};

const socials: Socials[] = [
    {
        icon: <LnIcon />,
        type: 'linkedin',
        value: '/артем-быков-054449224/',
        id: 1,
    },
    {
        icon: <TgIcon />,
        type: 'telegram',
        value: '@ArtemMentavr',
        id: 2
    },
];

export default socials;
