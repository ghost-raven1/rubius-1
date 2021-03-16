<template>
    <section class="section">
        <div class="container">
          <a id="contacts"></a>
          <div class="row">
            <div class="col">
              <h2>Контакты</h2>
              <div class="padding-top32px">
                <p>Томск, проспект Ленина, дом 13</p>
              </div>
              <div class="padding-top20px">
                <p><a class="link" href="tel:+7 (499) 686-17-62">+7 (499) 686-17-62</a></p>
              </div>
              <div class="padding-top20px">
                <p><a class="link" href="mailto:info@more-krasoty.ru">info@more-krasoty.ru</a></p>
              </div>
              <div class="padding-top32px">
                <p class="sText">Мы в социальных сетях</p>
              </div>
              <div class="social_wrapper">
                <div class="row">
                  <div class="col"><YoutubeBtn /></div>
                  <div class="col"><VKBtn /></div>
                  <div class="col"><InstBtn /></div>
                </div>
              </div>
            </div>
            <div class="col">
              <ContactForm />
            </div>
          </div>
        </div>
    </section>
</template>

<script>
import ContactForm from '~/components/forms/ContactForm.vue';
import YoutubeBtn from '~/components/socialBtns/Youtube';
import VKBtn from '~/components/socialBtns/Vk';
import InstBtn from '~/components/socialBtns/Inst';

export default {
  components: {
    ContactForm,
    YoutubeBtn,
    VKBtn,
    InstBtn,
  }
}
</script>

<style>

</style>