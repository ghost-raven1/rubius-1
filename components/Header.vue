<template>
      <header class="header">
      <div class="container header__container">

        <div class="header__top">
          <a class="logo header__logo" href="/">Мир красоты</a>

          <nav class="navigation header__nav">
            <ul class="navigation__list">
              <li class="navigation__item"><a class="navigation__link" href="#services">Услуги и цены</a></li>
              <li class="navigation__item"><a class="navigation__link" href="#masters">Мастера</a></li>
              <li class="navigation__item"><a class="navigation__link" href="#portfolio">Наши работы</a></li>
              <li class="navigation__item"><a class="navigation__link" href="#about">О нас</a></li>
            </ul>
          </nav>

          <div class="header__phone">
            <h4>8 (499) 686-17-62</h4>
            <p>с 10.00 до 19.00 без выходных</p>
          </div>
        </div>

        <div class="header__content">
          <div class="hero header__hero">
            <h1 class="hero__title">Создай свой образ вместе с нами</h1>
            <p class="hero__subtitle">Идеальный образ за 60 минут</p>
            <button class="btn btn_large hero__btn">Записаться онлайн</button>
          </div>
          <client-only>
          <ul class="social header__social">
            <li class="social__item"><a href=""><YoutubeBtn /></a></li>
            <li class="social__item"><a href=""><VKBtn /></a></li>
            <li class="social__item"><a href=""><InstBtn /></a></li>
          </ul>
          </client-only>
        </div>

        <div class="header__girl header-girl">
          <img class="header-girl__img" src="https://competent-mclean-4c8788.netlify.app/img/header-bg.png" alt="">
        </div>
      </div>
    </header>
</template>

<script>
import YoutubeBtn from '~/components/socialBtns/Youtube';
import VKBtn from '~/components/socialBtns/Vk';
import InstBtn from '~/components/socialBtns/Inst';
export default {
  components: {
    YoutubeBtn,
    VKBtn,
    InstBtn,
  }

}
</script>

<style>

</style>