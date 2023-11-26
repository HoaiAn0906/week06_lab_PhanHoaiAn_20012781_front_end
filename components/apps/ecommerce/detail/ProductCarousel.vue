<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useEcomStore } from '@/stores/apps/eCommerce'
import 'vue3-carousel/dist/carousel.css'
import product1 from '~/images/products/s1.jpg'
import product2 from '~/images/products/s2.jpg'
import product3 from '~/images/products/s3.jpg'
import product4 from '~/images/products/s4.jpg'
import product5 from '~/images/products/s5.jpg'
import product6 from '~/images/products/s6.jpg'
import product7 from '~/images/products/s7.jpg'
import product8 from '~/images/products/s8.jpg'

const store = useEcomStore()
const route = useRoute()

const getDetailImage = computed(() => {
  return store.products[route.params.id - 1].image
})

const slideShow = [
  {
    image: getDetailImage.value,
    id: 1,
  },
  {
    image: product1,
    id: 2,
  },
  {
    image: product2,
    id: 3,
  },
  {
    image: product3,
    id: 4,
  },
  {
    image: product4,
    id: 5,
  },
  {
    image: product5,
    id: 6,
  },
  {
    image: product6,
    id: 7,
  },
  {
    image: product7,
    id: 8,
  },
  {
    image: product8,
    id: 9,
  },
]

const currentSlide = ref(0)
function slideTo(val) {
  currentSlide.value = val
}
</script>

<template>
  <div>
    <carousel id="gallery" v-model="currentSlide" :items-to-show="1" :wrap-around="false">
      <slide v-for="(slide, i) in slideShow" :key="i">
        <div class="carousel__item">
          <img alt="product" class="w-100 rounded-md" :src="slide.image" />
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <carousel
      id="thumbnails"
      ref="carousel"
      v-model="currentSlide"
      :current-slide="currentSlide"
      :items-to-show="6"
      :transition="500"
      :wrap-around="true"
    >
      <slide v-for="(slide, i) in slideShow" :key="i">
        <div class="carousel__item cursor-pointer" @click="slideTo(slide.id - 1)">
          <img alt="product" class="w-100" :src="slide.image" />
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>
<style lang="scss">
#thumbnails {
  .carousel__slide {
    border: 2px solid transparent;
    line-height: 0px;
  }
  .carousel__slide--active {
    border: 2px solid rgb(var(--v-theme-primary));
  }
}
</style>
