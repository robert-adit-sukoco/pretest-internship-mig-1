const SidebarItem = (props) => {
    

    return (
        <a className="flex flex-row transition duration-200 ease-in-out w-full" href={props.linkTo}>
            <div className={`p-3 my-2 flex ${props.expanded ? "w-full" : "justify-center w-[80px]"} items-center border-l-4 hover:bg-[#90b4903A] ${props.isActive ? "border-[#5e925e] bg-[#90b4903A] " : "border-transparent "} ease-in-out duration-75`}>
                <img
                    className="opacity-60"
                    src={props.logoSrc}
                    alt="sidebar item"
                    width={20}
                />
                <div className={`whitespace-nowrap ml-5 text-sm pr-12 ${props.expanded ? "" : "hidden"} opacity-60 font-semibold`}>
                    <span>
                        {props.name}
                    </span>
                </div>
            </div>
        </a>
    )
}

export default SidebarItem