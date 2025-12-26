import Header from "./Header";
import Meal from "./Meal";
import Instructions from "./Instructions";
import { useEffect, useState } from "react";
import axios from "axios";


export default function RecipePage() {

  const [unFormattedMealData, setUnformattedMealData] = useState();
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
        const meal = response.data.meals[0];
        setUnformattedMealData(meal);
      }).catch(error => {
        console.error("Error fetching meal data:", error);
      });
  }, []);


  const 


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