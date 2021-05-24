<template>
  <div class="header">
    <ul class="header__navigation">
      <li class="header__navigation-item">
        <router-link to="/" class="header__navigation-item-link"
          >Home</router-link
        >
      </li>
      <li class="header__navigation-item">
        <router-link to="/meals" class="header__navigation-item-link"
          >Carbonara Meals Calculator</router-link
        >
      </li>
      <li class="header__navigation-item">
        <router-link to="/restaurants" class="header__navigation-item-link"
          >Our Restaurants</router-link
        >
      </li>
      <button @click="toggleTheme" aria-label="Toggle themes">
        <span v-if="this.theme == 'darkMode'"> Light</span>
        <span v-else> Dark</span>
      </button>
    </ul>
  </div>
</template>
<style lang="scss">
@import "./Header.scss";
</style>
<script>
export default {
  name: "Header",
  data() {
    return {
      theme: "",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode";
      document.body.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
  },
  mounted() {
    let localTheme = localStorage.getItem("theme");
    document.body.setAttribute("data-theme", localTheme);
  },
};
</script>
