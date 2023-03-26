<template>
  <header>
    <Header />
  </header>
  <form class="w-50 mx-auto mt-3" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputName1" class="form-label">Name</label>
      <input type="text" v-model="product.name" class="form-control" id="exampleInputName1" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPrice1" class="form-label">Price</label>
      <input type="number" v-model="product.price" class="form-control" id="exampleInputPrice1" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">description</label>
      <textarea v-model="product.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Add Product</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import Header from "../components/Header.vue";
const store = useStore();

const product = reactive({
  name: "",
  price: null,
  description: "",
});
const handleSubmit = () => {
  if (product.name.length > 0 && product.price != null && product.description.length > 0) {
    store.commit("addProduct", product);

    product.name = "";
    product.price = null;
    product.description = "";
  }
};
</script>
