document.addEventListener("DOMContentLoaded", () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const recipe = id && recipes[id];
    if (!recipe) {
        document.getElementById("recipeContent").hidden = true;
        document.getElementById("recipeNotFound").hidden = false;
        document.title = "Recipe not found - My Recipe Book";
        return;
    }

    document.title = `${recipe.title} - My Recipe Book`;
    document.getElementById("recipeTitle").textContent = recipe.title;
    document.getElementById("recipeDescription").textContent = recipe.description;
    const image = document.getElementById("recipeImage");
    image.src = recipe.image;
    image.alt = recipe.title;
    image.onerror = () => { image.hidden = true; };
    document.getElementById("prepTime").textContent = `⏱ Prep: ${recipe.prep}`;
    document.getElementById("cookTime").textContent = `🍳 Cook: ${recipe.cook}`;
    document.getElementById("servings").textContent = `👥 Serves: ${recipe.servings}`;
    document.getElementById("difficulty").textContent = `⭐ ${recipe.difficulty}`;
    document.getElementById("cookingTip").textContent = recipe.tip;
    const ingredients = document.getElementById("ingredientList");
    recipe.ingredients.forEach(text => {
        const item = document.createElement("li");
        item.textContent = text;
        ingredients.append(item);
    });
    const method = document.getElementById("methodList");
    recipe.method.forEach(text => {
        const step = document.createElement("li");
        step.textContent = text;
        method.append(step);
    });
    const videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(recipe.title + " recipe")}`;
    document.getElementById("videoDescription").textContent = `Search for a cooking tutorial for ${recipe.title}.`;
    document.getElementById("videoLink").href = videoUrl;
});
