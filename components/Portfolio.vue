<template>
    <section class="section">
        <div class="container">
          <a id="portfolio"></a>
            <h2 class="section__header">Наши работы</h2>
            <div class="row">
              <div class="carousel__wrapper">
              <client-only>
               <carousel :per-page="3" :navigate-to="someLocalProperty" :mouse-drag="true" :navigationEnabled="true" :autoplay="true" :autoplayHoverPause="true">
                 <slide>
                  <div class="carousel__item">
                    <div class="col-4">
                  <a href="http://htc-wallpaper.com/wp-content/uploads/2014/08/Makeup-girl.jpg?982602" data-fancybox="images" data-caption="Фото 1">
                    <img class="carousel__img" src="http://htc-wallpaper.com/wp-content/uploads/2014/08/Makeup-girl.jpg?982602" />
                  </a>
                  </div>
                  </div>
                 </slide>
                 <slide>
                  <div class="carousel__item">
                    <div class="col-4">
                  <a href="https://i.ytimg.com/vi/5bd91_Tm8BM/maxresdefault.jpg" data-fancybox="images" data-caption="Фото 2">
                    <img class="carousel__img" src="https://i.ytimg.com/vi/5bd91_Tm8BM/maxresdefault.jpg" />
                  </a>
                  </div>
                  </div>
                 </slide>
                 <slide>
                  <div class="carousel__item">
                    <div class="col-4">
                  <a href="https://orlandosolution.com/wp-content/uploads/2020/03/original-1-2.jpg" data-fancybox="images" data-caption="Фото 3">
                    <img class="carousel__img" src="https://orlandosolution.com/wp-content/uploads/2020/03/original-1-2.jpg" />
                  </a>
                  </div>
                  </div>
                 </slide>
                 <slide>
                  <div class="carousel__item">
                    <div class="col-4">
                  <a href="https://i1.wp.com/mlovesm.com/wp-content/uploads/2016/10/halloween_galaxy_makeup.jpg?resize=1280%2C1917&ssl=1" data-fancybox="images" data-caption="Фото 4">
                    <img class="carousel__img" src="https://i1.wp.com/mlovesm.com/wp-content/uploads/2016/10/halloween_galaxy_makeup.jpg?resize=1280%2C1917&ssl=1" />
                  </a>
                  </div>
                  </div>
                 </slide>
                 <slide>
                  <div class="carousel__item">
                    <div class="col-4">
                  <a href="https://mmoollllee.github.io/nuxt-starter-template/_nuxt/img/4b6b991-2000.jpg" data-fancybox="images" data-caption="Фото 5">
                    <img class="carousel__img" src="https://mmoollllee.github.io/nuxt-starter-template/_nuxt/img/4b6b991-2000.jpg" />
                  </a>
                  </div>
                  </div>
                 </slide>
              </carousel>
              </client-only>
              </div>
            </div> 
        </div>
    </section>
</template>