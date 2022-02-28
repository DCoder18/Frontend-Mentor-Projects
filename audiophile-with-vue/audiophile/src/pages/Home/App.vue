<template>
  <div id="app">
     <header class="text-light">
      <div class="bg-dark-2">
        <!-- <div class="container"> -->

          <Navbar />

          <!-- <section class="hero flow flex">
            <div>
              <p class="heading heading--7">New product</p>
              <h2 class="heading heading--1">XX99 Mark II Headphones</h2>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <a class="btn btn--primary" href="#">See product</a>
            </div>
          </section> -->

        <!-- </div> -->
      </div>
    </header>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }

}
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";

</style>
