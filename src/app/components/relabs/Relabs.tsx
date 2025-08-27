import CompanyCard from '@/app/features/companyCard/CompanyCard';
import { relabs } from '@/app/shared/data/works';

const Relabs = () => {
    return (
        <CompanyCard
            className="mt-[74px] tablet:mt-[96px]"
            companyName="relabs"
            companyItems={relabs}
        />
    );
};

export default Relabs;
