<template>
  <div>
    <Banner text="hell" />
  </div>
</template>
<script>
const Banner = () => ({
  component: import("@/components/Banner/Banner.vue"),
});
export default {
  name: "MyMeal",
  components: {
    Banner,
  },
};
</script>
<style scoped></style>
