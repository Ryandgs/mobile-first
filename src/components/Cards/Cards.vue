<template>
  <div class="container">
    <div v-for="card in this.cards" v-bind:key="card.id">
      <div v-bind:class="['card card-' + card.id, (card.seen===true)?'c-checked':'']">
        <div class="category-color"
          v-bind:class="['type-' + card.type, (card.seen===true)?'t-checked':'']">
        </div>
        <div class="top" v-on:click="showDescription(card.id)">
          <h2 class="title">{{ card.title }}</h2>
          <h2 class="id">{{ card.id }}</h2>
        </div>
        <div class="center" v-if="card.files">
          <div class="files">
            <img src="../../assets/pdf.svg">
            <p>{{ card.files[0].url }}</p>
            <a v-bind:href="'http://localhost:84/' + card.files[0].url" target="_blank" title="Preview e Download">
              <img src="../../assets/download.svg">
            </a>
          </div>
        </div>
        <div class="bottom" v-on:click="showDescription(card.id)">
          <span class="category">{{ types[card.type].name }}</span>
          <span class="date">{{ formatDate(card.date) }}</span>
        </div>
        <div class="desc">
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./scripts.js"></script>
<style lang="scss" src="./index.scss"></style>
