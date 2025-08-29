import type { MouseEvent } from 'react';

type IScrollTo = (e: MouseEvent<HTMLAnchorElement>, path: string) => void;


const scrollTo: IScrollTo = ( e, path ) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};

export default scrollTo 