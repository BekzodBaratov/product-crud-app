<template>
  <div v-if="product" class="card text-bg-secondary mb-3" style="max-width: 30rem">
    <div class="card-header">{{ product.price }}$</div>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
    </div>
    <div class="row card-body justify-content-end gap-2">
      <p class="col d-none d-xl-block"></p>
      <RouterLink :to="'/products/edit/' + product.id" class="col text-xs text-nowrap btn btn-primary">
        Update Product
      </RouterLink>
      <button @click="() => handleDel(product.id)" class="col text-xs text-nowrap btn btn-danger">
        Delete Product
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["product"]);
const product = computed(() => props.product);

const handleUpd = (id) => {};
const handleDel = (id) => {
  store.commit("delProduct", id);
};
</script>
