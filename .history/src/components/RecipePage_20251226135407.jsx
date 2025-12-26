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


  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        const meal = response.data.meals[0]

        setMealData({
          title: meal.strMeal,
          category: meal.strCategory,
          area: meal.strArea,
          tags: meal.strTags ? meal.strTags.split(",") : [],
          imageUrl: meal.strMealThumb,
          ingredients: [
            { name: "Flour", value: "2 cups" },
            { name: "Eggs", value: "3 pcs" },
            { name: "Sugar", value: "1 cup" },
          ],
          instructions: [
            "Mix all ingredients together in a bowl.",
            "Bake in preheated oven for 30 minutes at 180°C.",
            "Let cool before serving.",
          ],
          videoUrl: meal.strYoutube,
          prepTime: meal.strInstructions,
          servings: meal.strInstructions,
          difficulty: meal.strInstructions
        });
      }, []));



  return (
    <div>
      <Header />
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