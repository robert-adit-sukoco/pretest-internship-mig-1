import { useState } from "react"
import SidebarItem from "./SidebarItem"
const Sidebar = () => {

    const [expanded, setExpanded] = useState(false)


    const sidebarItemsGroupOne = [
        {
            name : "Landing Page",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Home.svg",
            isActive: false
        },
        {
            name : "Tickets",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Coupon.svg",
            isActive: false
        },
        {
            name : "Inbox",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Archive.svg",
            isActive: false
        },
        {
            name : "To-Do List",
            linkTo: "/",
            logoSrc: "/sidebar-icons/CalendarSelected.svg",
            isActive: false
        },
        {
            name : "Company Profile",
            linkTo: "/",
            logoSrc: "/sidebar-icons/company-info.svg",
            isActive: true
        },
    ]

    const sidebarItemsGroupTwo = [
        {
            name: "Groups",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Group.svg",
            isActive: false
        },
        {
            name: "Layers",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Layers.svg",
            isActive: false
        },
        {
            name: "Cube",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Cube.svg",
            isActive: false
        },
        {
            name: "Transform",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Transform.svg",
            isActive: false
        },
        {
            name: "Search",
            linkTo: "/",
            logoSrc: "/sidebar-icons/Zoom.svg",
            isActive: false
        },
    ]

    return (
        <div
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)} 
            className={`mr-1 sm:mr-3 ${expanded ? "w-fit" : "w-[40px] sm:w-[80px]"} py-3 bg-white drop-shadow-xl h-screen fixed z-10`}
        >
            <div className="px-3 flex justify-center items-center">
                <img
                    src="/main-logo.svg"
                    alt="main logo"
                    width={60}
                />
            </div>

            <div className="my-10 flex flex-col">
                {sidebarItemsGroupOne.map((obj) => (
                    <SidebarItem
                        name={obj.name}
                        linkTo={obj.linkTo}
                        logoSrc={obj.logoSrc}
                        expanded={expanded}
                        isActive={obj.isActive}
                    />
                ))}
            </div>

            <div className="my-10 flex flex-col">
            {sidebarItemsGroupTwo.map((obj) => (
                <SidebarItem
                    name={obj.name}
                    linkTo={obj.linkTo}
                    logoSrc={obj.logoSrc}
                    expanded={expanded}
                />
            ))}
            </div>
        </div>
    )
}

export default Sidebar