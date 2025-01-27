// 是否开发模式
console.log(import.meta.env)
export const isDev = import.meta.env.DEV;

// 配置
export const config = {
	isDev,
	// 项目信息
	app: {
		name: import.meta.env.VITE_NAME,
		// 路由
		router: {
			// 模式
			mode: "history",
			// 转场动画
			transition: "slide"
		},
		// 字体图标库
		iconfont: []
	},

	// 忽略规则
	ignore: {
		// 页面不需要登录验证
		token: ["/login", "/401", "/403", "/404", "/500", "/502"]
	},

	// 当前环境

};

export * from "./proxy";
