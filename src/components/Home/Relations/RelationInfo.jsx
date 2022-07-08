const RelationInfo = (props) => {
    return (
        <div className="flex flex-row items-center my-3">
            <img
                src="/Share.svg"
                width={40}
                alt="share icon"
            />
            <div className="flex flex-col ml-5">
                <div className="text-lg font-semibold tracking-wider">
                    {props.numberOf}
                </div>
                <div className="text-sm opacity-50">
                    {props.name}
                </div>
            </div>

        </div>
    )
}

export default RelationInfo