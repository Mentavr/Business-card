import { ROUTS } from '@/app/shared/constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Works = () => {
    const [t] = useTranslation();

    return (
        <section className="pt-[4rem] pb-[4rem] tablet:pt-[7.625rem] tablet:pb-[7.625rem]">
            <div className="flex flex-col justify-between gap-10 tablet:flex-row  desktop:gap-20 ">
                <h2 className="text-[3.5625rem]  leading-[90%]   tablet:w-[50%] desktop:text-[5.625rem]">
                    {t('works.title')}
                </h2>
                <div className="flex flex-col gap-[1.5rem] tablet:gap-[2.5rem] tablet:w-[50%]">
                    <p className="text-gray text-[1rem] tablet:text-[1.125rem]">
                        {t('works.description')}
                    </p>
                    <Link
                        to={ROUTS.works}
                        className="block w-max text-yellow hover:text-[orange] border-b-[0.125rem] "
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
