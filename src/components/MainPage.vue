<template>
  <div class="main-page">
    <h1 class="main-page__title">Task manager</h1>
    <router-link class="main-page__link" to="/tasklist">К списку задач</router-link>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../assets/reset.css';
@import '../assets/style.css';
.main-page {
  max-width: 900px;
  margin: auto;
  padding-top: 50px;

  &__title {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    margin-bottom: 40px;
  }

  &__link {
    text-decoration: none;
  }
}
</style>