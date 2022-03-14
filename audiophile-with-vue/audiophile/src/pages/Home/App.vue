<template>
  <div id="app">
     <header class="text-light">
      <div class="bg-dark-2">
        <div class="container">

          <Navbar />
          <Hero />

        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero-Section.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
  }

}
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";

</style>
