import CompanyCard from '@/app/features/companyCard/CompanyCard';
import { climbingCompany } from '@/app/shared/data/works';

const ClimbingCompany = () => {
    return <CompanyCard companyName="climbing" companyItems={climbingCompany} />;
};

export default ClimbingCompany;
