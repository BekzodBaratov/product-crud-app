import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { v4 as uuidv4 } from "uuid";

const vuexLocal = new VuexPersistence({ storage: window.localStorage });

const store = createStore({
  state() {
    return {
      products: [
        {
          id: 0,
          name: "Olma",
          price: 249,
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 1,
          name: "Anor",
          price: 566,
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 2,
          name: "Sabzi",
          price: 349,
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
      productId: null,
      search: "",
    };
  },
  getters: {
    getProducts(state) {
      return state.products.filter((pr) => pr.name.toLowerCase().includes(state.search.toLowerCase()));
    },
    getOneProduct(state) {
      return state.products.find((product) => product.id === state.productId);
    },
  },
  mutations: {
    changeProductId(state, id) {
      state.productId = id;
    },
    changeSearch(state, search) {
      state.search = search;
    },
    addProduct(state, { name, price, description }) {
      state.products.push({ id: uuidv4(), name, price, description });
    },
    updProduct(state, { id, product }) {
      const index = state.products.findIndex((pr) => pr.id == id);
      state.products[index] = {
        id: state.products[index].id,
        name: product.name,
        price: product.price,
        description: product.description,
      };
    },
    delProduct(state, payload) {
      const index = state.products.findIndex((pr) => pr.id === payload);
      state.products.splice(index, 1);
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
