import SidebarMenu from "../components/Sidebar/Sidebar";
import Team from "../layouts/Team";
import Profile from "../layouts/Profile";
import StandUp from "./StandUp";

export default function Dashboard() {
    return (
        <>
            <SidebarMenu />
            <Profile />
            <StandUp />
            <Team />
        </>
    );
}
