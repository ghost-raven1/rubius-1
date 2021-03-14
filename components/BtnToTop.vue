<template>
  <button class="btn btn__totop" @click=scrollToTop() title="Наверх"><span>&uarr;</span></button>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 });
    }
  },
}
</script>

<style>

</style>