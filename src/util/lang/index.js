import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
// import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    // message: {
    //     banner: 'banner'
    //   }
    ...enLocale,
    // ...elementEnLocale
  },
  zh: {
    // message: {
    //     banner: '轮播'
    //   }
    ...zhLocale,
    // ...elementZhLocale
  }
}

const i18n = new VueI18n({
//   locale: Cookies.get('language') || 'zh', // set locale
  locale: 'zh', // 语言标识
  messages // set locale messages
})

export default i18n