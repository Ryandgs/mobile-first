<template>
  <div id="home">
    <Category />
    <Cards />
  </div>
</template>

<script>
import Category from '../components/Category/Category.vue';
import Cards from '../components/Cards/Cards.vue';

export default {
  components: {
    Category, Cards,
  },
};
</script>
