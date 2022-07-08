const OverviewHeader = () => {
    return (
        <div className="flex flex-col items-center">
            <img 
                className="rounded-t-lg"
                src="/mitramas-header.jpg"
                width={"100%"}
                height={150}
                alt="header"
            />
            <img
                className="-translate-y-12 border-2 border-green rounded-full"
                src="/mitramas-logo.jpg"
                width={"35%"}
                alt="logo"
            />
            <div className="mb-3 text-xl font-semibold text-center">
                Mitramas Infosys Global
            </div>
            <div className="font-light opacity-50">
                Layanan IT
            </div>
        </div>
    )
}

export default OverviewHeader