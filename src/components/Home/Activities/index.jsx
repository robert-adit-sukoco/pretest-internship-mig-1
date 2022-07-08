import ActivityEvent from "./ActivityEvent"

const Activities = () => {
    return (
        <div className="m-4 bg-white h-fit p-5 drop-shadow-xl">
            <div className="font-semibold mb-12">
                Aktivitas
            </div>
            <div className="flex flex-col">
                <ActivityEvent
                    detail={"Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa"}
                    date={"Hari ini, 08:00"}
                />
                <ActivityEvent
                    detail={"Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet"}
                    date={"Kemarin, 17:32"}
                />
                <ActivityEvent
                    detail={"Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi"}
                    date={"Kemarin, 17:32"}
                />
            </div>
        </div>
    )
}

export default Activities