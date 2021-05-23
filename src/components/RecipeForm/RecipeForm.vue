<template>
  <div class="recipe-form">
    <p>
      Introduce below the quantity for each ingredient you have and we will
      calculate how many Pasta Carbonara meals you can cook!
    </p>
    <form>
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group">
            <label for="recipe-eggs">Eggs</label>
            <input
              class="recipe-form__form-input form-control"
              type="number"
              name="eggs"
              id="recipe-eggs"
              value="0"
              min="0"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label for="recipe-pasta">Pasta</label>
            <input
              class="recipe-form__form-input form-control"
              type="number"
              name="pasta"
              id="recipe-pasta"
              value="0"
              min="0"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label for="recipe-butter">Butter</label>
            <input
              class="recipe-form__form-input form-control"
              type="number"
              name="butter"
              id="recipe-butter"
              value="0"
              min="0"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label for="recipe-milk">Milk</label>
            <input
              class="recipe-form__form-input form-control"
              type="number"
              name="milk"
              id="recipe-milk"
              value="0"
              min="0"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label for="recipe-oil">Oil</label>
            <input
              class="recipe-form__form-input form-control"
              type="number"
              name="oil"
              id="recipe-oil"
              value="0"
              min="0"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group">
            <label for="recipe-bacon">Bacon</label>
            <input
              class="recipe-form__form-input form-control"
              type="number"
              name="bacon"
              id="recipe-bacon"
              value="0"
              min="0"
            />
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <button type="submit" @click="calculate" class="btn btn-secondary">
          Calculate
        </button>
      </div>
    </form>
  </div>
</template>
<style lang="scss">
@import "./RecipeForm.scss";
</style>
<script>
export default {
  name: "RecipeForm",
  data() {
    return {
      meals: 0,
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    calculate(event) {
      event.preventDefault();
    },
  },
};
</script>
