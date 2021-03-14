<template>
   <div class="wrapper">
     <Header />

     <main class="main">

     <About />

     <Advantages />

     <Services />

     <Prices />

     <Masters />

     <Portfolio />

     <Brands />

     <BtnToTop />

     <Contacts />

    </main>

    <Footer />
    
  </div>
</template>

<script>
import Header from '~/components/Header';
import About from '~/components/About';
import Advantages from '~/components/Advantages';
import Services from '~/components/Services';
import Prices from '~/components/Prices';
import Masters from '~/components/Masters';
import Portfolio from '~/components/Portfolio';
import Brands from '~/components/Brands';
import Contacts from '~/components/Contacts';
import Footer from '~/components/Footer';
import BtnToTop from '~/components/BtnToTop';

export default {
  components: {
      Header,
      About,
      Advantages,
      Services,
      Prices,
      Masters,
      Portfolio,
      Brands,
      Contacts,
      Footer,
      BtnToTop,
  }
}
</script>

<style>
</style>
