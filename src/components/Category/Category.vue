<template>
  <div id="categories">
    <div class="container">
      <p class="title">Categorias</p>
    </div>
    <div class="selectors">
      <div v-bind:class="['box', 'box-'+type.type]"
        v-for="type in this.types"
        v-bind:key="type.id"
        @click="catFilter(type.type)">
        <p>{{ type.name }}</p>
      </div>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>
<style lang="scss" src="./index.scss"></style>
