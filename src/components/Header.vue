<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <RouterLink class="navbar-brand" to="/products">Product App</RouterLink>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/products">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products/add">Add Product</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input v-model="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button @click.prevent="handleChange" class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const search = ref("");

const handleChange = () => store.commit("changeSearch", search);
</script>
