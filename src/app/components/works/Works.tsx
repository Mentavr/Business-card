import { ROUTS } from '@/app/shared/constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Works = () => {
    const [t] = useTranslation();

    return (
        <section className="pt-[4rem] pb-[4rem] tablet:pt-[7.625rem] tablet:pb-[7.625rem]">
            <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 ">
                <h2 className="text-[57px]  leading-[90%]   tablet:w-[50%] desktop:text-[90px]">
                    {t('works.title')}
                </h2>
                <div className="flex flex-col gap-[24px] tablet:gap-[40px] tablet:w-[50%]">
                    <p className="text-gray text-[16px] tablet:text-[18px]">
                        {t('works.description')}
                    </p>
                    <Link
                        to={ROUTS.works}
                        className="block w-max text-yellow hover:text-[orange] border-b-[2px] "
                    >
                        {' '}
                        {t('works.link')}
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Works;
