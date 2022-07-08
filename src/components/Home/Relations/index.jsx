import RelationInfo from "./RelationInfo"

const Relations = () => {
    return (
        <div className="mx-4 bg-white p-5 drop-shadow-xl">
            <div className="flex flex-row justify-between items-center mb-5">
                <div className="font-semibold">
                    Relasi
                </div>
                <a className="text-sm text-[#669669] hover:underline" href="/">
                    Lihat semua
                </a>
            </div>
            <div>
                <RelationInfo 
                    name={"Memiliki"}
                    numberOf={20}
                />
                <RelationInfo 
                    name={"Menggunakan"}
                    numberOf={108}
                />
                <RelationInfo 
                    name={"Meminjam"}
                    numberOf={67}
                />
            </div>
        </div>
    )
}

export default Relations