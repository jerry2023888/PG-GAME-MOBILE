import { createI18n, useI18n } from 'vue-i18n';
// 导入所有语言文件
import pt from '@/assets/locales/pt.json';
type Locale = "pt" | "en"; // 定义支持的语言类型

// 默认语言
const defaultLocale: Locale = (localStorage.getItem('locale') as Locale) || 'pt';


// 创建 i18n 实例
const i18n = createI18n({
    legacy: false, // componsition API需要设置为false 
    globalInjection: true, // 可以在template模板中使用$t
    locale: defaultLocale,
    fallbackLocale: 'pt',
    messages: {
        pt,
    },
});

// 切换语言
export const changeLang = (val: Locale) => {
    const { locale } = useI18n()
    locale.value = val
    localStorage.setItem('locale', val)
    location.reload()
}


export default i18n;
