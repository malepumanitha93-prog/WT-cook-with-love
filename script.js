
// SHOW PASSWORD
const showPassword = document.getElementById("showPassword");

if (showPassword) {
    showPassword.addEventListener("change", function () {
        const password = document.getElementById("loginPassword");
        password.type = this.checked ? "text" : "password";
    });
}

// REGISTRATION FORM
const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const password =
            document.getElementById("regPassword").value;

        const confirm =
            document.getElementById("confirmPassword").value;

        if (password !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration successful!");
        registrationForm.reset();
    });
}

// LOGIN FORM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Demo login submitted successfully!");
        loginForm.reset();
    });
}

// SEARCH AND CATEGORY FILTER
const search = document.getElementById("recipeSearch");
const filter = document.getElementById("categoryFilter");

function filterRecipes() {
    if (!search || !filter) return;

    const searchValue = search.value.toLowerCase();
    const categoryValue = filter.value.toLowerCase();

    const cards = document.querySelectorAll(".catalog-card");

    cards.forEach(function (card) {
        const name = card.dataset.name;
        const categories = card.dataset.category;

        const matchesName = name.includes(searchValue);
        const matchesCategory =
            categoryValue === "all" ||
            categories.split(" ").includes(categoryValue);

        card.style.display =
            matchesName && matchesCategory ? "block" : "none";
    });
}

if (search) {
    search.addEventListener("input", filterRecipes);
}

if (filter) {
    filter.addEventListener("change", filterRecipes);
}

// FAVOURITE RECIPES
const favouriteButtons =
    document.querySelectorAll(".heart-btn");

const favouriteList =
    document.getElementById("favouriteList");

let favourites = JSON.parse(
    localStorage.getItem("favouriteRecipes") || "[]"
);

function updateFavourites() {
    if (favouriteList) {
        favouriteList.textContent =
            favourites.length
            ? favourites.join(", ")
            : "Your favourites will appear here.";
    }

    document.querySelectorAll(".heart-btn").forEach(function (button) {
        button.textContent = favourites.includes(button.dataset.name)
            ? "♥" : "♡";
    });

    localStorage.setItem(
        "favouriteRecipes",
        JSON.stringify(favourites)
    );
}

favouriteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const name = this.dataset.name;

        if (favourites.includes(name)) {
            favourites = favourites.filter(item => item !== name);
        } else {
            favourites.push(name);
        }

        updateFavourites();
    });
});

updateFavourites();
