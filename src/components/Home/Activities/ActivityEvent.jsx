const ActivityEvent = (props) => {
    return (
        <div className="flex flex-col my-3">
            <div className="">
                {props.detail}
            </div>
            <div className="mt-4 opacity-50">
                {props.date}
            </div>
        </div>
    )

}

export default ActivityEvent