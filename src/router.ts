import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";
import useUserStore from "@/store/user.store";
import NotFound from "@/pages/NotFound.vue";
import Home from "@/pages/home/Home.vue";
import Withdraw from "./pages/withdraw/Withdraw.vue";
import Recharge from "./pages/recharge/Recharge.vue";
import Notify from "./pages/notify/Notify.vue";
import Contact from "./pages/contact/Contact.vue";
import UserInfo from "@/pages/user/UserInfo.vue";
import Vip from "@/pages/vip/Vip.vue";
import CheckIn from "@/pages/checkin/CheckIn.vue";

export const HomePath = "/";
export const WithdrawPath = "/withdraw";
export const RechargePath = "/recharge";
export const NotifyPath = "/notify";
export const ContactPath = "/contact";
export const UserInfoPath = "/user-info";
export const VipPath = "/vip";
export const CheckInPath = "/check-in";

const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { isLogin } = useUserStore();
  next();
  // if (to.meta.requiresAuth && isLogin) next();
  // else next("/register-name");
};

const routes = [
  // 把默认的/转发到home
  {
    path: HomePath,
    component: Home,
    beforeEnter: [],
    name: "Home",
    meta: {
      transitionName: "fade-in",
      keepAlive: true,
      showNav: true,
    },
  },
  {
    path: WithdrawPath,
    component: Withdraw,
    beforeEnter: [],
    name: "Withdraw",
    meta: {
      transitionName: "fade-in",
      keepAlive: true,
      showNav: true,
    },
  },
  {
    path: RechargePath,
    component: Recharge,
    beforeEnter: [],
    name: "Recharge",
    meta: {
      transitionName: "fade-in",
      keepAlive: true,
      showNav: true,
    },
  },
  {
    path: NotifyPath,
    component: Notify,
    beforeEnter: [],
    name: "Notify",
    meta: {
      transitionName: "fade-in",
      keepAlive: true,
      showNav: true,
    },
  },
  {
    path: ContactPath,
    component: Contact,
    beforeEnter: [],
    name: "Contact",
    meta: {
      transitionName: "fade-in",
      keepAlive: true,
      showNav: true,
    },
  },
  {
    path: UserInfoPath,
    component: UserInfo,
    beforeEnter: [authGuard],
    name: "UserInfo",
    meta: {
      transitionName: "fade-in",
      keepAlive: false,
      requiresAuth: true,
    },
  },
  {
    path: VipPath,
    component: Vip,
    beforeEnter: [],
    name: "Vip",
    meta: {
      transitionName: "fade-in",
      keepAlive: false,
      requiresAuth: true,
    },
  },
  {
    path: CheckInPath,
    component: CheckIn,
    beforeEnter: [],
    name: "CheckIn",
    meta: {
      transitionName: "fade-in",
      keepAlive: false,
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "not-found",
    meta: {
      transitionName: "fade-in",
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
