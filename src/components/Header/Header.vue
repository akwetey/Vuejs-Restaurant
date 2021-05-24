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
      <button
        @click="toggleTheme"
        aria-label="Toggle themes"
        class="ml-auto btn border-0"
      >
        <span v-if="this.theme === 'darkMode'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-sun-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
            /></svg
        ></span>
        <span v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
            /></svg
        ></span>
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
      this.theme = this.theme === "darkMode" ? "" : "darkMode";

      //  set element attributes
      document.body.setAttribute("data-theme", this.theme);

      const highlightedItems = document.querySelectorAll(".store__wrapper");
      highlightedItems.forEach((item) => {
        item.setAttribute("data-wrapper", this.theme);
      });

      const highlighted = document.querySelectorAll(".store__location");
      highlighted.forEach((item) => {
        item.setAttribute("data-span", this.theme);
      });

      localStorage.setItem("theme", this.theme);
    },
  },
  mounted() {
    const localTheme = localStorage.getItem("theme");

    this.theme = localTheme;

    //  set elements attribute from local storage
    document.body.setAttribute("data-theme", localTheme);

    const highlightedItems = document.querySelectorAll(".store__wrapper");
    highlightedItems.forEach((item) => {
      item.setAttribute("data-wrapper", localTheme);
    });

    const highlighted = document.querySelectorAll(".store__location");
    highlighted.forEach((item) => {
      item.setAttribute("data-span", localTheme);
    });
  },
};
</script>
