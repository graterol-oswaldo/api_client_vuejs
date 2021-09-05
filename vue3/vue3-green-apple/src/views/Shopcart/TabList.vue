<template>
  <div class="demo-tab mx-10">
    <h2>Listado de productos</h2>
    <hr />
    <div class="flex flex-wrap m-4">
      <div
        :class="{ 'sold-out': $store.getters.nearlySoldOut(product.id) }"
        @click="selectProduct(product)"
        v-for="product in productsOnStock"
        :key="product.id"
      >
        <div class="demo-tab m-4 w-60">
          <img :src="pathPhoto + product.photo" class="img-fluid" />
          <p class="text-blue-500 font-bold">{{ product.title }}</p>
          <br />
          {{ product.price }} <br />
          <i>{{ product.inventory }} </i><br />
          <button @click="addToCart(product)" class="btn btn-primary">
            Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "AppProductList",
  async created() {
    try {
      await this.$store.dispatch("getProducts");
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      pathPhoto: `http://api.mv.com/storage/products/`,
    };
  },
  methods: {
    ...mapActions({
      addToCart: "addProductToCart",
    }),
    ...mapMutations({
      selectProduct: "setSelectedProduct",
    }),
  },
  computed: {
    ...mapState(["selectedProduct"]),
    ...mapGetters(["productsOnStock"]),
    testing() {
      return null;
    },
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}
.sold-out {
  background-color: lightpink;
  border: 3px solid tomato;
  padding: 0.3rem;
  margin: 0.1rem;
}
</style>
