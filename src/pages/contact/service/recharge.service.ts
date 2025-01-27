import useUserStore from "@/store/user.store";

export default function RechargeService() {
    const { getUserInfo } = useUserStore();



    return {
        getUserInfo
    }
}