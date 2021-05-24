<template>
  <div class="page page__home mt-5">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
const dayjs = require("dayjs");
const advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);
export default {
  name: "Home",
  data() {
    return {
      currentTime: dayjs().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    };
  },
  computed: {
    welcomeMessage() {
      return "Welcome! Your local time is: " + this.currentTime;
    },
  },
  mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = dayjs().format("dddd, MMMM Do YYYY, h:mm:ss a");
        setTimer();
      }, 1000);
    setTimer();
  },
};
</script>
