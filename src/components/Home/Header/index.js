import LoginInfo from "./LoginInfo"

const Header = () => {
    return (
        <div className="flex flex-row justify-between ml-4 mr-8">
            <div className="hidden md:flex flex-row justify-center items-center text-xs md:text-sm">
                <span className="opacity-60">
                    Perusahaan 
                </span>
                <img
                    className="mx-3"
                    src="/ChevronDoubleRight.svg"
                    height={10}
                    width={10}
                    alt="arrow-right"
                />
                <span className="font-semibold">
                    Mitramas Infosys Global
                </span>
            </div>
            <LoginInfo />
        </div>
    )
}

export default Header