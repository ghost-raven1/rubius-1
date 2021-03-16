import Vue from 'vue'

const components = {
  About: () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => c.default || c),
  Advantages: () => import('../../components/Advantages.vue' /* webpackChunkName: "components/advantages" */).then(c => c.default || c),
  Brands: () => import('../../components/Brands.vue' /* webpackChunkName: "components/brands" */).then(c => c.default || c),
  BtnToTop: () => import('../../components/BtnToTop.vue' /* webpackChunkName: "components/btn-to-top" */).then(c => c.default || c),
  Contacts: () => import('../../components/Contacts.vue' /* webpackChunkName: "components/contacts" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Masters: () => import('../../components/Masters.vue' /* webpackChunkName: "components/masters" */).then(c => c.default || c),
  Portfolio: () => import('../../components/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => c.default || c),
  Prices: () => import('../../components/Prices.vue' /* webpackChunkName: "components/prices" */).then(c => c.default || c),
  Services: () => import('../../components/Services.vue' /* webpackChunkName: "components/services" */).then(c => c.default || c),
  FormsContactForm: () => import('../../components/forms/ContactForm.vue' /* webpackChunkName: "components/forms-contact-form" */).then(c => c.default || c),
  SocialBtnsInst: () => import('../../components/socialBtns/Inst.vue' /* webpackChunkName: "components/social-btns-inst" */).then(c => c.default || c),
  SocialBtnsVk: () => import('../../components/socialBtns/Vk.vue' /* webpackChunkName: "components/social-btns-vk" */).then(c => c.default || c),
  SocialBtnsYoutube: () => import('../../components/socialBtns/Youtube.vue' /* webpackChunkName: "components/social-btns-youtube" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
