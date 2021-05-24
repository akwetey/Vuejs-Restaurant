<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" v-if="stores.length" />
    </div>
  </div>
</template>

<script>
const dayjs = require("dayjs");
const advancedFormat = require("dayjs/plugin/advancedFormat");
const StoreList = () => ({
  component: import("@/components/StoreList/StoreList.vue"),
});

dayjs.extend(advancedFormat);

export default {
  name: "Stores",
  components: {
    StoreList,
  },
  data() {
    return {
      currentTime: dayjs().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      stores: [],
    };
  },
  computed: {
    welcomeMessage() {
      return (
        "Welcome to our restaurants list! Your local time is: " +
        this.currentTime
      );
    },
  },
  async mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = dayjs(new Date()).format(
          "dddd, MMMM Do YYYY, h:mm:ss a"
        );
        setTimer();
      }, 1000);

    setTimer();

    const { default: json } = await import("@/assets/stores/stores.json");
    this.stores = json;
  },
};
</script>
