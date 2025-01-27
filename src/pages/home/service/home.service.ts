import useUserStore from "@/store/user.store";

export default function HomeService() {
    const { getUserInfo } = useUserStore();



    return {
        getUserInfo
    }
}