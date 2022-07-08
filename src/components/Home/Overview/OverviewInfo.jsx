const OverviewInfo = (props) => {
    return (
        <div className="my-6">
            <div className="opacity-50 font-semibold text-sm">
                {props.name}
            </div>
            <div className="mt-3">
                {props.children}
            </div>
        </div>
    )
}

export default OverviewInfo