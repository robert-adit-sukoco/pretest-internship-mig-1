import LocationInfo from "./LocationInfo"

const Locations = () => {
    return (
        <div className="m-4 bg-white drop-shadow-xl p-5 rounded-lg flex flex-col">
            <div className="font-semibold tracking-wide flex flex-row justify-between items-center mb-5">
                <span>
                    Lokasi
                </span>    
                <a className="text-sm text-[#669669] hover:underline" href="/">
                    Lihat semua
                </a>    
            </div>
            <div className="flex flex-row justify-center items-center">
                <LocationInfo
                    svgSrc={"/Main-Location.svg"}
                    numberOf={20}
                    name={"Induk"}
                />
                <LocationInfo
                    svgSrc={"/Store.svg"}
                    numberOf={3}
                    name={"Sub Lokasi Level 1"}
                />
                <LocationInfo
                    svgSrc={"/Key.svg"}
                    numberOf={1}
                    name={"Sub Lokasi Level 2"}
                />
            </div>
        </div>
    )
}

export default Locations