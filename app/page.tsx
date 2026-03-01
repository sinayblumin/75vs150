import { compareScenarios } from '@/lib/scenarioModel';
import DashboardClient from '@/components/DashboardClient';

export default function Home() {
    const compareData = compareScenarios(75, 150);

    return (
        <DashboardClient compareData={compareData} />
    );
}
