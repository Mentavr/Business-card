import ClimbingCompany from '@/app/components/climbingCompany/ClimbingCompany';
import Relabs from '@/app/components/relabs/Relabs';
import Line from '@/app/features/line/Line';

const Company = () => {
    return (
        <main className="container">
            <Relabs />
            <ClimbingCompany />
            <Line />
        </main>
    );
};

export default Company;
