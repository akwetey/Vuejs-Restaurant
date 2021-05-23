<template>
  <div class="store-list">
    <div class="d-flex mb-5">
      <p>
        Here you can find all of our restaurants. We have
        {{ storesCount }} stores right now!
      </p>
      <div class="ml-auto">
        <input
          type="search"
          v-model="search"
          class="form-control"
          @keyup="filteredRecords"
        />
      </div>
    </div>
    <template v-if="storesWithImages.length">
      <div class="row">
        <div
          class="col-sm-12 col-md-3 col-lg-3"
          v-for="store in storesWithImages"
          :key="store.id"
        >
          <Store
            class="store-list__item"
            :title="store.name"
            :photo="store.image"
            :location="store.location"
          />
        </div>
      </div>
      <button @click="loadMore" style="margin:30px; text-align:center;">
        Load More
      </button>
    </template>
    <template v-else>
      <div style="text-align:center">
        <h4>No data found</h4>
      </div>
    </template>
  </div>
</template>
<style lang="scss">
@import "./StoreList.scss";
</style>
<script>
import Store from "@/components/Store/Store";
import _ from "lodash";

export default {
  name: "StoreList",
  components: {
    Store,
  },
  props: {
    stores: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      size: 10,
      search: "",
      mutabelStore: this.stores,
    };
  },
  computed: {
    storesWithImages() {
      let store = this.mutabelStore.slice(0, this.size).map((item) => ({
        ...item,
        image: "https://via.placeholder.com/300?text=" + item.name,
      }));

      return store;
    },
    storesCount() {
      return _.size(this.stores);
    },
  },

  watch: {
    search(n) {
      if (n) {
        this.filteredRecords();
        this.mutabelStore = this.stores;
        this.size = 10;
      } else {
        this.search = "";
        this.mutabelStore = this.stores;
        this.size = 10;
      }
    },
  },

  methods: {
    loadMore() {
      if (this.size < this.storesCount) {
        this.size = this.size + 10;
      }
    },
    filteredRecords() {
      this.mutabelStore = this.mutabelStore.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
