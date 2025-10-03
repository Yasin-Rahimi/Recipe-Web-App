// گرفتن غذا از API
function fetchMeal() {
  axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => {
      const mealData = formattedMeal(response.data.meals[0]);
      renderMeal(mealData);
    })
    .catch(error => {
      console.error("Error fetching meal: ", error);
    });
}

// تابع مرتب‌سازی داده‌ها
function formattedMeal(meal) {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = meal;

  // دستور پخت → آرایه
  const formattedInstructions = strInstructions
    .split("\n")
    .filter(line => line.trim() !== "");

  // تگ‌ها → آرایه
  const formattedTags = strTags ? strTags.split(",") : [];

  // مواد اولیه
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        name: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`]
      });
    }
  }

  return {
    name: strMeal,
    category: strCategory,
    area: strArea,
    thumb: strMealThumb,
    youtube: strYoutube,
    instructions: formattedInstructions,
    tags: formattedTags,
    ings: ingredients,
  };
}

// رندر داده‌ها در قالب HTML
function renderMeal(meal) {
  // تصویر و اسم غذا
  const imgContainer = document.querySelector(".image-container");
  imgContainer.style.backgroundImage = `url(${meal.thumb})`;

  const imgTextContainer = document.querySelector(".image-text-container");
  imgTextContainer.innerHTML = `
    <h1>${meal.name}</h1>
    <span class="image-tag">${meal.category}</span>
    <span class="image-tag">${meal.area}</span>
    ${meal.tags.map(tag => `<span class="image-tag">${tag}</span>`).join("")}
  `;

  // مواد اولیه
  const ingList = document.querySelector(".ingredient-container ul");
  ingList.innerHTML = meal.ings.map(ing =>
    `<div class="ing-floor">
       <span class="ing">${ing.name}</span>
       <span class="ing-value">${ing.measure}</span>
     </div>`
  ).join("");

  // دستور پخت
  const cookContainer = document.querySelector(".cook-formula-inner");
  cookContainer.innerHTML = meal.instructions.map((ins, i) =>
    `<div class="cook-text-row">
       <span class="cook-number">${i + 1}</span>
       <p class="cook-text">${ins}</p>
     </div>`
  ).join("");

  // یوتیوب
  const youtubeBox = document.querySelector(".main-youtube-box .red-box");
  youtubeBox.onclick = () => window.open(meal.youtube, "_blank");
}

// دکمه "Next Recipe"
  const nextBtn = document.getElementById("next-recipe-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      fetchMeal();
    });
  }