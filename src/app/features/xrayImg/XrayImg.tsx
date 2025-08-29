import { RADIUS_XRAY } from '@/app/shared/constants';
import { useState, type MouseEvent } from 'react';

interface IXrayImg {
    srcDownImg: string;
    srcUpImg: string;
    alt: string;
    classNameWrapper?: string;
    classNameDownImg?: string;
    classNameUpImg?: string;
}

const XrayImg = ({
    srcDownImg,
    srcUpImg,
    alt,
    classNameDownImg,
    classNameUpImg,
    classNameWrapper,
}: IXrayImg) => {
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
    const radius = RADIUS_XRAY;

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: -9999, y: -9999 });
    };
    return (
        <div
            className={`${classNameWrapper}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={srcDownImg}
                alt={alt}
                className={`absolute top-0 left-0 w-full h-full object-cover ${classNameDownImg}`}
            />

            <img
                src={srcUpImg}
                alt={alt}
                className={`absolute top-0 left-0 w-full h-full object-cover brightness-110 ${classNameUpImg}`}
                style={{
                    clipPath: `circle(${radius}px at ${mousePos.x}px ${mousePos.y}px)`,
                }}
            />
        </div>
    );
};

export default XrayImg;
