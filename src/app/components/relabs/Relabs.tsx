import CompanyCard from '@/app/features/companyCard/CompanyCard';
import { relabs } from '@/app/shared/data/works';

const Relabs = () => {
    return (
        <CompanyCard
            className="mt-[4.625rem] tablet:mt-[6rem]"
            companyName="relabs"
            companyItems={relabs}
        />
    );
};

export default Relabs;
