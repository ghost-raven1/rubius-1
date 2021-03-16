<template>
  <form id="contact-form" class="form">
  <div class="form__wrapper">
    <h3 class="form__title">Быстрая запись</h3>
    <div class="form__subtitle_wrapper">
      <p class="form__subtitle">Наш менеджер перезвонит в течении нескольких минут, уточнить подробности и согласует время.</p>
    </div>
    <div class="input__wrapper_common">
      <div class="input__wrapper_item">
        <input name="name" class="input" type="text" placeholder="Ваше имя" required>
      </div>
      <div class="input__wrapper_item">
        <input name="phone" class="input" type="text" placeholder="+7 (___) ___-__-__" required>
      </div>
    </div>
    <div class="form__btn_wrapper">
      <button class="form__btn_largeX">Записаться</button>
    </div>
    <p class="form__footer">Нажимая на кнопку вы соглашаетесь с обработкой <a class="link" href="#">персональных данных</a></p>
  </div>
</form>
</template>

<script>
export default {

}
</script>

<style>

</style>