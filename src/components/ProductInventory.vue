<template>
  <div class="tasks_container">
    <div class="tasks_content">
      <h1>Products</h1>
      <ul class="tasks_list">
        <li v-for="product in products" :key="product.id">
          <h2>{{ product.name }}</h2>
          <p>{{ product.category }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.supplier }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getData() {
      try {
        // fetch tasks
        const response = await this.$http.get(
          "http://localhost:8000/api/inventory"
        );
        // set the data returned as tasks
        this.products = response.data;
      } catch (error) {
        // log the error
        console.log(error);
      }
    },
  },
  created() {
    // Fetch tasks on page load
    this.getData();
  },
};
</script>
