import OverviewHeader from "./OverviewHeader"
import OverviewInfo from "./OverviewInfo"
import { Switch } from "antd"

const onChange = (checked) => {
    console.log("Switch switched to " + checked)
}

const Overview = () => {
    return (
        <div className="m-4 pb-10 bg-white drop-shadow-xl rounded-lg">
            <OverviewHeader />
            <div className="p-5">
                <OverviewInfo name="Status Perusahaan">
                    <div className="flex flex-row justify-between items-center w-full">
                        <span>
                            Aktif
                        </span>
                        <Switch defaultChecked onChange={onChange} size="medium"/>
                    </div>
                </OverviewInfo>
                <OverviewInfo name="Singkatan">
                    MIG
                </OverviewInfo>
                <OverviewInfo name="Alamat Perusahaan">
                    Jl. Tebet Raya No. 42, Jakarta Selatan
                </OverviewInfo>
                <OverviewInfo name="Penanggung Jawab (PIC)">
                    John Doe
                </OverviewInfo>
                <OverviewInfo name="Tanggal PKP">
                    03 Maret 2021
                </OverviewInfo>
                <OverviewInfo name="E-mail">
                    <div className="flex flex-row items-center">
                        <img
                            src="/Mail.svg"
                            width={20}
                            alt="logo"
                        />
                        <a className="underline text-[#50944c] ml-2" href="mailto:mig@mitrasolusi.group">
                            mig@mitrasousi.group
                        </a>
                    </div>
                </OverviewInfo>
                <OverviewInfo name="No. Telp">
                    <div className="flex flex-row items-center">
                        <img
                            src="/Phone.svg"
                            width={20}
                            alt="logo"
                        />
                        <a className="underline text-[#50944c] ml-2" href="tel:+622156781234">
                            021-5678-1234
                        </a>
                    </div>
                </OverviewInfo>
                <OverviewInfo name="Situs Web">
                    <div className="flex flex-row items-center">
                        <img
                            src="/Globe.svg"
                            width={20}
                            alt="logo"
                        />
                        <a className="underline text-[#50944c] ml-2" href="https://www.mitramas.com">
                            mitramas.com
                        </a>
                    </div>
                </OverviewInfo>
            </div>
        </div>
    )
}

export default Overview