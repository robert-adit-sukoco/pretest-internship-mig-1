import BankAccount from "./BankAccount"

const Banks = () => {
    return (
        <div className="m-4 bg-white drop-shadow-xl p-5 flex flex-col">
            <div className="flex flex-row justify-between items-center mb-3">
                <div className="font-semibold">
                    Akun Bank
                </div>
                <a className="flex flex-row text-sm text-white bg-[#38743c] py-2 px-5 rounded-md" href="/">
                    <span>+</span> <span className="hidden md:flex ml-1">Tambah Akun Bank</span>
                </a>
            </div>
            <div>
                <BankAccount 
                    bankName="Bank Bukopin"
                    bankNo="**** 0876"
                    ownerName="Yusron Taufiq"
                    currency="IDR"
                />
                <BankAccount 
                    bankName="Citibank, NA"
                    bankNo="**** 5525"
                    ownerName="Si Tampan"
                    currency="USD"
                />
            </div>
        </div>
    )
}

export default Banks