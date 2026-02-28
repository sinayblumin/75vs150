import { compareScenarios } from '@/lib/scenarioModel';
import oecdContext from '@/data/oecd_context.json';
import DashboardClient from '@/components/DashboardClient';

export default function Home() {
    const compareData = compareScenarios(75, 150);

    return (
        <DashboardClient compareData={compareData} oecdContext={oecdContext} />
    );
}
