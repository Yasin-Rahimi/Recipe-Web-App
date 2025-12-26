import Header from "./Header";
import Meal from "./Meal";
import Instructions from "./Instructions";
import { useEffect, useState } from "react";
import axios from "axios";


export default function RecipePage() {

  const [mealData, setMealData] = useState({
    title: "",
    category: "",
    area: "",
    tags: [],
    imageUrl: "",
    ingredients: [],
    instructions: [],
    videoUrl: "",
    prepTime: "",
    servings: "",
    difficulty: "",
  });

  const onRandomClick = () => {
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
          const meal = response.data.meals[0];
          formatter(meal)
        }).catch(error => {
          console.error("Error fetching meal data:", error);
        });
  }

  const formatter = (meal) => {
    const ingredients = [];
    const instructions = meal.strInstructions.split('\n').filter(line => line.trim() !== '');

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }

    setMealData({
      title: meal.strMeal,
      category: meal.strCategory,
      area: meal.strArea,
      tags: meal.strTags ? meal.strTags.split(',').map(tag => tag.trim()) : [],
      imageUrl: meal.strMealThumb,
      ingredients: ingredients,
      instructions: instructions,
      videoUrl: meal.strYoutube,
      prepTime: "",
      servings: "",
      difficulty: "",
    });
  }


  return (
    <div>
      <Header onRandomClick={onRandomClick} />
      <Meal
        title={mealData.title}
        category={mealData.category}
        area={mealData.area}
        tags={mealData.tags}
        imageUrl={mealData.imageUrl}
        ingredients={mealData.ingredients}
        videoUrl={mealData.videoUrl}
      />
      <Instructions instructions={mealData.instructions} />
    </div>
  );
}