<template>
  <nav>
    <div class="flex navbar-container">
      <div class="flex nav-toggle-container">
        <button @click="isExpanded = !isExpanded" class="nav-toggle-mobile"></button>
        <img src="@/assets/images/shared/desktop/logo.svg" alt="audiophile logo">
      </div>
      <ul :class="['flex', 'navbar', isExpanded ? 'show-nav' : 'hide-nav']">
        <li><a href="#">Home</a></li>
        <li><a href="#">Headphones</a></li>
        <li><a href="#">Speakers</a></li>
        <li><a href="#">Earphones</a></li>
      </ul>
      <img src="@/assets/images/shared/desktop/icon-cart.svg" alt="cart icon">
    </div>
    <div class="divider"></div>
  </nav>
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'Navbar',
  data: function() {
    return {
      isExpanded: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/layout/_navbar.scss";

</style>
