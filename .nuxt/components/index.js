export { default as About } from '../../components/About.vue'
export { default as Advantages } from '../../components/Advantages.vue'
export { default as Brands } from '../../components/Brands.vue'
export { default as BtnToTop } from '../../components/BtnToTop.vue'
export { default as Contacts } from '../../components/Contacts.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Masters } from '../../components/Masters.vue'
export { default as Portfolio } from '../../components/Portfolio.vue'
export { default as Prices } from '../../components/Prices.vue'
export { default as Services } from '../../components/Services.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => c.default || c)
export const LazyAdvantages = import('../../components/Advantages.vue' /* webpackChunkName: "components/advantages" */).then(c => c.default || c)
export const LazyBrands = import('../../components/Brands.vue' /* webpackChunkName: "components/brands" */).then(c => c.default || c)
export const LazyBtnToTop = import('../../components/BtnToTop.vue' /* webpackChunkName: "components/btn-to-top" */).then(c => c.default || c)
export const LazyContacts = import('../../components/Contacts.vue' /* webpackChunkName: "components/contacts" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyMasters = import('../../components/Masters.vue' /* webpackChunkName: "components/masters" */).then(c => c.default || c)
export const LazyPortfolio = import('../../components/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => c.default || c)
export const LazyPrices = import('../../components/Prices.vue' /* webpackChunkName: "components/prices" */).then(c => c.default || c)
export const LazyServices = import('../../components/Services.vue' /* webpackChunkName: "components/services" */).then(c => c.default || c)
