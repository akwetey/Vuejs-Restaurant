<template>
  <div class="page page__carbonara container my-5">
    <h1>Pasta carbonara meals</h1>
    <div class="page__carbonara-meals">
      <RecipeForm />
    </div>
  </div>
</template>
<script>
import RecipeForm from "@/components/RecipeForm/RecipeForm";

export default {
  name: "Meals",
  components: {
    RecipeForm,
  },
};
</script>
