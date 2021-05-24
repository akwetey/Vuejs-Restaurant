<template>
  <Banner
    :text="getRandomName"
    :getIngredient="getIngredient"
    :randomMealNumber="randomMealNumber"
  />
</template>
<script>
const Banner = () => ({
  component: import("@/components/Banner/Banner.vue"),
});

import { mapGetters } from "vuex";

export default {
  name: "MyMeal",
  components: {
    Banner,
  },
  data() {
    return {
      namesOfRestaurants: [
        "Chicken Inn",
        "KFC",
        "Pizza Hut",
        "Munch Eatery",
        "Papa's Pizza",
        "Koffee Lounge",
        "Barcelos",
        "Mcdonalds",
      ],
    };
  },
  computed: {
    ...mapGetters(["getIngredient"]),
    getRandomName() {
      const randomNames = this.namesOfRestaurants[
        Math.floor(Math.random() * this.namesOfRestaurants.length)
      ];
      return randomNames;
    },
    randomMealNumber() {
      return Math.floor(Math.random() * 10);
    },
  },
};
</script>
<style scoped></style>
