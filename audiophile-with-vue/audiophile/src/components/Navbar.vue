<template>
  <nav>
    <div class="flex navbar-container">
      <img src="@/assets/images/shared/desktop/logo.svg" alt="audiophile logo">
      <ul class="flex">
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
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/layout/_navbar.scss";

</style>
