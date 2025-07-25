import SideNavBarItem from "./SideNavBarItem";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export default function SideNavBar() {
  return <>
    <div style={sideNavBarStyles}>
        <div style={sideNavBarUserStyles}>
            <div style={sideNavBarUserIconStyles}>
                <div style={sideNavBarUserIconCircleStyles}></div>
            </div>
            <div style={sideNavBarUserNameStyles}>
                User
            </div>
        </div>
        <SideNavBarItem Icon={MdOutlineSpaceDashboard} iconStyle={dashboardIconStyles} text="Dashboard" hasTopBorder={true}/>
        <SideNavBarItem Icon={MdOutlineSpaceDashboard} text="Dashboard" />
        <SideNavBarItem Icon={MdOutlineSpaceDashboard} text="Dashboard" />
    </div>
  </>;
}

const sideNavBarStyles = {
    width: "250px",
    height: "100vh",
    backgroundColor: "#17263C",
    boxSizing: "border-box",
    display: "flex",
    "flex-direction": "column",
};

const sideNavBarUserStyles = {
    width: "100%",
    height: "70px",
    display: "flex",
    "flex-direction": "row",
};

const sideNavBarUserIconStyles = {
    width: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const sideNavBarUserIconCircleStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
}

const sideNavBarUserNameStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const dashboardIconStyles = {
    transform: "scale(-1, 1) rotate(90deg)",
}