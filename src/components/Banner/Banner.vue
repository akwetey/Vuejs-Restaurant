<template>
  <div class="banner">
    <div class="banner__wrapper">
      <div v-if="text">
        <div class=" text-center mt-5">
          <h5>Welcome to: {{ text }}</h5>
        </div>
        <p>Your ingredients for Carbonara meal</p>
        <div class="row">
          <div class="col-md-6">
            <table class="table table-borderless w-50 mb-0">
              <tr>
                <th><h5>Number of butter:</h5></th>
                <td>
                  <h5>{{ getIngredient.butter || 0 }}</h5>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-borderless w-50 mb-0">
              <tr>
                <th><h5>Number of eggs:</h5></th>
                <td>
                  <h5>{{ getIngredient.eggs || 0 }}</h5>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-borderless w-50 mb-0">
              <tr>
                <th><h5>Number of pasta:</h5></th>
                <td>
                  <h5>{{ getIngredient.pasta || 0 }}</h5>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-borderless w-50 mb-0">
              <tr>
                <th><h5>Number of oils:</h5></th>
                <td>
                  <h5>{{ getIngredient.oil || 0 }}</h5>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-borderless w-50 mb-0">
              <tr>
                <th><h5>Number of bacon:</h5></th>
                <td>
                  <h5>{{ getIngredient.bacon || 0 }}</h5>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-borderless w-50 mb-0">
              <tr>
                <th><h5>Number of milk:</h5></th>
                <td>
                  <h5>{{ getIngredient.milk || 0 }}</h5>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="mt-5">
          <h5>
            The number of meals from the ingredients above is
            {{ randomMealNumber }} meals
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./Banner.scss";
</style>
<script>
export default {
  name: "Banner",
  props: {
    text: {
      type: String,
      default: null,
    },
    getIngredient: {
      type: Object,
      default: () => {},
      required: true,
    },
    randomMealNumber: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  mounted() {
    //  get value from local storage
    const localTheme = localStorage.getItem("theme");

    //  set element attributes
    const rows = document.querySelectorAll("tr");
    rows.forEach((item) => {
      item.setAttribute("data-theme", localTheme);
    });
  },
};
</script>
