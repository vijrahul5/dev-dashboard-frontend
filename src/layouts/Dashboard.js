import SidebarMenu from "../components/Sidebar/Sidebar";
import Team from "../layouts/Team";
import Profile from "../layouts/Profile";
import Home from "../layouts/Home";

export default function Dashboard() {
    return (
        <>
            <SidebarMenu />
            <Home />
            <Team />
            <Profile />
        </>
    );
}
