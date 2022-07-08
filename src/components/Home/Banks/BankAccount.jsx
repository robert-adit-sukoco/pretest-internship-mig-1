const BankAccount = (props) => {
    return (
        <div className="px-3 py-2 flex flex-row items-center">
            <div className="w-1/3 h-full flex justify-center items-center">
                <img
                    src="/credit-card-6379.svg"
                    width={150}
                    alt="bank"
                />
            </div>
            <div className="ml-5 flex flex-col flex-1 justify-between w-2/3 items-stretch">
                <div className="font-semibold text-sm md:text-lg flex flex-row justify-between">
                    <span>
                        {props.bankName}
                    </span>
                    <div className="flex flex-row items-center">
                        <a href="/">
                            <img
                                src="/Pencil.svg"
                                width={20}
                                alt="edit"
                            />
                        </a>
                        <a className="ml-3" href="/">
                            <img
                                src="/Trash.svg"
                                width={20}
                                alt="delete"
                            />
                        </a>
                    </div>
                </div>
                <div className="mt-6 opacity-50 text-sm md:text-md">
                    {props.bankNo} - {props.ownerName}
                </div>
                <div className="opacity-50 text-xs md:text-sm">
                    {props.currency}
                </div>
            </div>
        </div>
    )
}

export default BankAccount