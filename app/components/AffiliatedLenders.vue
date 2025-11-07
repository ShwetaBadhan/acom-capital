<template>
  <section class="affiliate-section">
    <div class="container">
      <h2 class="section-title">Our Affiliate Lenders</h2>

      <ClientOnly>
        <Swiper
          class="affiliate-swiper"
          :modules="[Autoplay]"
          :loop="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :slides-per-view="5"
          :space-between="40"
          :pagination="{ clickable: true }"
          :breakpoints="{
            320: { slidesPerView: 2, spaceBetween: 20 },
            576: { slidesPerView: 3, spaceBetween: 30 },
            992: { slidesPerView: 4, spaceBetween: 40 },
            1200: { slidesPerView: 5, spaceBetween: 50 }
          }"
        >
          <!-- Hardcoded Images -->
          <SwiperSlide>
            <img src="/images/lender1.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lenders2.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lenders3.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lender4.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lenders5.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lenders6.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lenders7.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lenders8.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lender1.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lenders9.webp" alt="Lender 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/lender10.webp" alt="Lender 1" />
          </SwiperSlide>
          

   
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

// Import Swiper CSS
import 'swiper/css'

</script>

<style scoped>

</style>
