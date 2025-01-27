import useUserStore from "@/store/user.store";

export default function WithdrawService() {
    const { getUserInfo } = useUserStore();



    return {
        getUserInfo
    }
}