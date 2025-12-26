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
    // axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    //   .then(response => {
    //     const meal = response.data.meals[0];
    //     formatter(meal)
    //   }).catch(error => {
    //     console.error("Error fetching meal data:", error);
    //   });

    formatter(
        "meals": [
            {
                "idMeal": "53058",
                "strMeal": "Croatian Bean Stew",
                "strMealAlternate": null,
                "strCategory": "Beef",
                "strArea": "Croatian",
                "strInstructions": "Heat the oil in a pan. Add the chopped vegetables and sauté until tender. Take a pot, empty the beans together with the vegetables into it, put the sausages inside and cook for further 20 minutes on a low heat. Or, put it in an oven and bake it at a temperature of 180ºC/350ºF for 30 minutes. This dish is even better reheated the next day.",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg",
                "strTags": "Warming,Soup,Beans",
                "strYoutube": "https://www.youtube.com/watch?v=mrjnQal3S1A",
                "strIngredient1": "Cannellini Beans",
                "strIngredient2": "Vegetable Oil",
                "strIngredient3": "Tomatoes",
                "strIngredient4": "Challots",
                "strIngredient5": "Garlic",
                "strIngredient6": "Parsley",
                "strIngredient7": "Chorizo",
                "strIngredient8": "",
                "strIngredient9": "",
                "strIngredient10": "",
                "strIngredient11": "",
                "strIngredient12": "",
                "strIngredient13": "",
                "strIngredient14": "",
                "strIngredient15": "",
                "strIngredient16": "",
                "strIngredient17": "",
                "strIngredient18": "",
                "strIngredient19": "",
                "strIngredient20": "",
                "strMeasure1": "2 cans",
                "strMeasure2": "3 tbs",
                "strMeasure3": "2 cups ",
                "strMeasure4": "5",
                "strMeasure5": "2 cloves",
                "strMeasure6": "Pinch",
                "strMeasure7": "1/2 kg chopped ",
                "strMeasure8": " ",
                "strMeasure9": " ",
                "strMeasure10": " ",
                "strMeasure11": " ",
                "strMeasure12": " ",
                "strMeasure13": " ",
                "strMeasure14": " ",
                "strMeasure15": " ",
                "strMeasure16": " ",
                "strMeasure17": " ",
                "strMeasure18": " ",
                "strMeasure19": " ",
                "strMeasure20": " ",
                "strSource": "https://www.visit-croatia.co.uk/croatian-cuisine/croatian-recipes/",
                "strImageSource": null,
                "strCreativeCommonsConfirmed": null,
                "dateModified": null
            }
        ]
    }
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
      prepTime: "30 min",
      servings: "4 people",
      difficulty: "medium",
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