let searchInput = document.querySelector("input")
let searchBtn = document.querySelector(".search-btn")
let recipeList = document.querySelector(".recipe-list")
let recipeDetailPanel = document.querySelector(".recipe-detail-panel")
let recipeDetailContent = document.querySelector(".recipe-detail-content")

const foodItemSearch = async()=>{
    if (!searchInput.value) return
    searchInput.blur();
    try {
        const recipiesdata = 
        await (await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput.value}`)).json();
        recipeList.innerHTML = "";
        const recipes = recipiesdata.data.recipes;

        recipes.forEach(recipe => {
            let recipeItem = document.createElement("div")
            recipeItem.className = "recipe-item"
            recipeList.appendChild(recipeItem)

            recipeItem.dataset.id = recipe.id;

            recipeItem.innerHTML = `
            <img src="${recipe.image_url}" alt="${recipe.title}"/>
            <div>
                <h4>${recipe.title}</h4>
                <p>${recipe.publisher}</p>
            </div>`;
        });

    } catch (error) {
        console.log(error);
    }
}

function formatIngredient(ing) {
    if (!ing) return ""
    const parts = [ing.quantity, ing.unit, ing.description].filter(Boolean)
    console.log(parts.join(" ").trim() || (ing.description || ""))
    return parts.join(" ").trim() || (ing.description || "")
  }
  
  recipeList.addEventListener("click", async (e)=>{
      const recipeItem = e.target.closest(".recipe-item");
      if (!recipeItem) return;
  
      recipeList.querySelectorAll(".recipe-item").forEach(el => el.classList.remove("active"))
      recipeItem.classList.add("active")
  
      const recipeId = recipeItem.dataset.id
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`)
        const singleRecipeData = await res.json()
        const recipe = singleRecipeData?.data?.recipe
        if (!recipe) {
          console.error("Recipe not found or invalid response", singleRecipeData)
          return
        }
        const { cooking_time, image_url, ingredients = [], publisher, servings, source_url, title } = recipe

        const ingredientsHtml = (ingredients || [])
          .map(ing => `
            <div class="ingredient-item">
              <i class="fa-solid fa-check"></i>
              <span>${formatIngredient(ing)}</span>
            </div>
          `)
          .join("")
  
        recipeDetailContent.innerHTML = `
          <div class="hero">
            <img src="${image_url}" alt="${title}" />
            <span class="recipe-tag">${title}</span>
          </div>
          <div class="recipe-meta">
            <span class="meta-item">
              <i class="fa-regular fa-clock"></i>
              ${cooking_time} MINUTES
            </span>
            <span class="meta-item">
              <i class="fa-regular fa-user"></i>
              <span class="servings-num">${servings}</span> SERVINGS
              <div class="servings-controls">
                <button type="button" aria-label="Decrease servings">−</button>
                <button type="button" aria-label="Increase servings">+</button>
              </div>
            </span>
            <button type="button" class="bookmark-btn" aria-label="Bookmark">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>
          <div class="recipe-ingredients">
            <h3>Recipe Ingredients</h3>
            <div class="ingredients-grid">
              ${ingredientsHtml}
            </div>
          </div>
          <div class="how-to-cook">
            <h3>How to Cook It</h3>
            <p>This recipe was carefully designed and tested by <strong>${publisher}</strong>. ${source_url ? `Please <a href="${source_url}" target="_blank" rel="noopener">check out directions at their website</a>.` : ""}</p>
          </div>
        `
  
        recipeDetailContent.classList.remove("hidden")
        recipeDetailPanel.classList.add("has-recipe")
      } catch (error) {
        console.error(error)
      }
  })

searchBtn.addEventListener("click", foodItemSearch)
searchInput.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        foodItemSearch();
    }
})