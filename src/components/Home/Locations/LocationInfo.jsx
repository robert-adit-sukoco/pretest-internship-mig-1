

const LocationInfo = (props) => {

    return (
        <div className={`w-1/4 bg-[#48944c] basis-1/3 py-5 mx-1 md:mx-4 px-4 rounded-lg flex flex-row justify-between items-center`}>
            <div className="w-1/2 md:w-fit">
                <img 
                    src={props.svgSrc}
                    width={50}
                    alt={"vector"}
                />
            </div>
            <div className="text-white flex flex-col justify-center items-end">
                <div className="text-md md:text-2xl font-bold">
                    {props.numberOf}
                </div>
                <div className="font-light whitespace-nowrap hidden md:flex">
                    {props.name}
                </div>
            </div>
        </div>
    )
}

export default LocationInfo