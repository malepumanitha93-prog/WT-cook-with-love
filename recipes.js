const recipes = {
    dosa: {
        title: "Masala Dosa", category: "breakfast indian",
        description: "Crisp dosa filled with warmly spiced potato masala.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900",
        prep: "15 minutes", cook: "20 minutes", servings: "2", difficulty: "Easy",
        ingredients: ["2 cups prepared dosa batter", "2 medium potatoes", "1 small onion, sliced", "1 teaspoon mustard seeds", "¼ teaspoon turmeric", "1 tablespoon cooking oil", "Salt to taste", "2 tablespoons chopped coriander"],
        method: ["Boil the potatoes until tender, peel them and roughly mash.", "Heat oil in a pan. Add mustard seeds; when they pop, add the onion and cook until soft.", "Add turmeric, potatoes, salt and a splash of water. Stir and cook for 3 minutes, then mix in coriander.", "Heat a flat pan and spread a ladle of dosa batter into a thin circle.", "Cook until the base is crisp and golden. Spoon potato masala onto the dosa, fold and serve hot."],
        tip: "Use a hot, lightly greased pan and spread the batter quickly for a thin, crisp dosa. Serve with chutney or sambar."
    },
    biryani: {
        title: "Vegetable Biryani", category: "lunch dinner indian",
        description: "Fragrant basmati rice layered with vegetables, herbs and gentle spices.",
        image: "https://www.prideofindia.co/cdn/shop/articles/vegetable_biryani_2000x.jpg?v=1717514526",
        prep: "20 minutes", cook: "35 minutes", servings: "3", difficulty: "Medium",
        ingredients: ["1½ cups basmati rice", "2 cups mixed vegetables, chopped", "1 medium onion, thinly sliced", "½ cup plain yogurt", "1 tablespoon oil or ghee", "1 teaspoon biryani masala", "½ teaspoon cumin seeds", "2 tablespoons chopped mint and coriander", "2¾ cups water", "Salt to taste"],
        method: ["Rinse the rice until the water runs mostly clear; soak for 15 minutes and drain.", "Heat oil or ghee in a heavy pot. Add cumin and onion; cook until the onion is lightly golden.", "Add the vegetables, biryani masala and salt. Cook for 4 minutes, then stir in yogurt and herbs.", "Add drained rice and water. Bring to a gentle boil, then cover and cook on low for 15–18 minutes.", "Turn off the heat and let the covered pot rest for 10 minutes. Fluff gently and serve."],
        tip: "Keep the pot covered while the rice cooks, and let it rest before fluffing so the grains stay separate."
    },
    cake: {
        title: "Chocolate Cake", category: "desserts",
        description: "A soft, rich chocolate cake made with everyday baking ingredients.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
        prep: "15 minutes", cook: "30 minutes", servings: "6", difficulty: "Easy",
        ingredients: ["1½ cups all-purpose flour", "1 cup sugar", "⅓ cup unsweetened cocoa powder", "1 teaspoon baking powder", "½ teaspoon baking soda", "1 egg", "½ cup milk", "⅓ cup neutral oil", "½ cup warm water", "1 teaspoon vanilla extract"],
        method: ["Heat the oven to 180°C. Grease and line an 8-inch cake tin.", "Whisk flour, sugar, cocoa, baking powder and baking soda in a bowl.", "Add the egg, milk, oil and vanilla. Mix until combined, then slowly stir in warm water. The batter will be thin.", "Pour the batter into the tin and bake for 28–32 minutes, until a toothpick comes out clean.", "Cool in the tin for 10 minutes, then turn onto a rack and cool fully before slicing."],
        tip: "Avoid overmixing once the wet and dry ingredients are combined; it helps keep the cake tender."
    },
    sandwich: {
        title: "Vegetable Sandwich", category: "snacks healthy",
        description: "A quick crunchy sandwich layered with fresh vegetables and chutney.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900",
        prep: "10 minutes", cook: "5 minutes", servings: "2", difficulty: "Easy",
        ingredients: ["4 slices bread", "½ cucumber, thinly sliced", "1 tomato, thinly sliced", "¼ small onion, thinly sliced", "2 tablespoons green chutney", "1 tablespoon butter", "¼ teaspoon chaat masala", "Salt and pepper to taste"],
        method: ["Spread butter on one side of each bread slice and chutney on the other side.", "Layer cucumber, tomato and onion over two slices of bread.", "Season the vegetables with chaat masala, salt and pepper.", "Top with the remaining slices, chutney-side down. Press gently.", "Serve fresh, or toast in a pan until both sides are golden."],
        tip: "Pat tomato and cucumber slices dry before assembling so the bread does not get soggy."
    },
    pasta: {
        title: "Tomato Pasta", category: "dinner",
        description: "Pasta tossed in a simple garlicky tomato sauce.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
        prep: "10 minutes", cook: "15 minutes", servings: "2", difficulty: "Easy",
        ingredients: ["200 g pasta", "1 tablespoon olive oil", "2 garlic cloves, minced", "1 small onion, diced", "1½ cups chopped tomatoes", "½ teaspoon dried oregano", "¼ teaspoon chilli flakes (optional)", "Salt and black pepper", "2 tablespoons grated cheese (optional)"],
        method: ["Boil the pasta in salted water according to the packet directions. Save ½ cup pasta water, then drain.", "Warm oil in a pan. Cook the onion for 3 minutes, then add garlic and stir for 30 seconds.", "Add tomatoes, oregano, chilli flakes, salt and pepper. Simmer until the sauce thickens, about 8 minutes.", "Add the pasta and a splash of pasta water. Toss until the sauce coats the pasta.", "Top with cheese if desired and serve warm."],
        tip: "Add pasta water a little at a time; its starch helps the tomato sauce cling to the pasta."
    },
    fruit: {
        title: "Fresh Fruit Bowl", category: "breakfast healthy snacks",
        description: "A colourful bowl of fresh fruit for a quick breakfast or snack.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900",
        prep: "10 minutes", cook: "0 minutes", servings: "2", difficulty: "Easy",
        ingredients: ["1 apple, cored and diced", "1 banana, sliced", "1 orange, peeled and segmented", "1 cup grapes, halved", "½ cup plain yogurt (optional)", "1 teaspoon honey (optional)", "1 tablespoon chopped nuts (optional)"],
        method: ["Wash the apple and grapes. Prepare the fruit with a clean knife and cutting board.", "Add the apple, banana, orange and grapes to a serving bowl.", "Top with yogurt, honey or nuts if you like.", "Serve immediately while the fruit is fresh."],
        tip: "Cut the banana just before serving. A little orange juice helps keep the apple from browning."
    }
};
