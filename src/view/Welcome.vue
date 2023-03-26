<template>
  <header>
    <Header></Header>
  </header>
  <div class="container pt-3">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4" v-for="product in store.getters.getProducts" :key="product.id">
        <Card :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
const store = useStore();
</script>
