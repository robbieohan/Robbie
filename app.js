const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    description: "A classic Roman pasta dish with creamy egg sauce, crispy pancetta, and Pecorino Romano.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    prep: "10 min",
    cook: "20 min",
    serves: "4",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano, finely grated",
      "50g Parmesan, finely grated",
      "2 cloves garlic",
      "Freshly ground black pepper",
      "Salt"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook spaghetti until al dente.",
      "While pasta cooks, fry pancetta in a large skillet over medium heat until crispy. Add garlic and cook 1 minute, then discard garlic.",
      "Whisk together eggs, Pecorino, and Parmesan in a bowl. Season generously with black pepper.",
      "Reserve 1 cup of pasta water, then drain the pasta.",
      "Working quickly, add hot pasta to the skillet (off heat). Pour egg mixture over pasta, tossing constantly and adding pasta water a splash at a time to create a silky, creamy sauce.",
      "Serve immediately with extra cheese and black pepper."
    ]
  },
  {
    id: 2,
    name: "Chicken Tacos al Pastor",
    cuisine: "Mexican",
    description: "Tender marinated chicken with pineapple, onion, and cilantro on warm corn tortillas.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    prep: "20 min",
    cook: "25 min",
    serves: "6",
    ingredients: [
      "1.5 lbs chicken thighs, boneless",
      "1/2 cup pineapple juice",
      "3 tbsp achiote paste",
      "2 tbsp white vinegar",
      "1 tsp cumin",
      "1 tsp oregano",
      "4 cloves garlic, minced",
      "1 cup fresh pineapple, diced",
      "1/2 white onion, finely chopped",
      "Fresh cilantro",
      "Corn tortillas",
      "Lime wedges, salsa to serve"
    ],
    instructions: [
      "Blend pineapple juice, achiote paste, vinegar, cumin, oregano, and garlic into a smooth marinade.",
      "Coat chicken thighs in marinade and refrigerate for at least 2 hours (overnight is best).",
      "Cook chicken on a hot grill or cast iron skillet over high heat, 6–8 minutes per side, until charred and cooked through.",
      "Rest chicken 5 minutes, then slice thinly.",
      "Warm tortillas directly over a gas flame or in a dry skillet.",
      "Top tortillas with chicken, pineapple, onion, and cilantro. Squeeze lime over and serve with salsa."
    ]
  },
  {
    id: 3,
    name: "Chicken Tikka Masala",
    cuisine: "Indian",
    description: "Juicy grilled chicken in a rich, aromatic tomato-cream sauce — a true crowd-pleaser.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    prep: "30 min",
    cook: "40 min",
    serves: "4",
    ingredients: [
      "1.5 lbs chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "2 tsp turmeric",
      "2 tsp garam masala",
      "1 tsp cumin",
      "1 can (14oz) crushed tomatoes",
      "1 cup heavy cream",
      "1 large onion, diced",
      "4 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2 tbsp butter",
      "Fresh cilantro, naan to serve"
    ],
    instructions: [
      "Marinate chicken in yogurt, lemon juice, 1 tsp turmeric, 1 tsp garam masala, and cumin for at least 1 hour.",
      "Broil or grill chicken until lightly charred. Set aside.",
      "Sauté onion in butter over medium heat until golden, about 10 minutes. Add garlic and ginger, cook 2 more minutes.",
      "Stir in remaining spices, then add crushed tomatoes. Simmer 15 minutes.",
      "Blend sauce until smooth (optional but recommended). Return to pan.",
      "Stir in cream and chicken. Simmer 10 minutes until sauce thickens.",
      "Garnish with cilantro and serve with warm naan or basmati rice."
    ]
  },
  {
    id: 4,
    name: "Greek Moussaka",
    cuisine: "Mediterranean",
    description: "Layers of eggplant, spiced ground lamb, and béchamel baked to golden perfection.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    prep: "40 min",
    cook: "60 min",
    serves: "8",
    ingredients: [
      "2 large eggplants, sliced 1cm thick",
      "1 lb ground lamb (or beef)",
      "1 large onion, diced",
      "3 cloves garlic, minced",
      "1 can (14oz) diced tomatoes",
      "1 tsp cinnamon",
      "1/2 tsp allspice",
      "4 tbsp butter",
      "4 tbsp flour",
      "2 cups whole milk",
      "2 eggs, beaten",
      "1/2 cup Parmesan",
      "Olive oil, salt, pepper"
    ],
    instructions: [
      "Salt eggplant slices and let sit 20 minutes. Pat dry, brush with olive oil, and roast at 400°F for 20 minutes.",
      "Brown ground lamb with onion and garlic. Add tomatoes, cinnamon, and allspice. Simmer 20 minutes.",
      "Make béchamel: melt butter, whisk in flour, then slowly add warm milk. Cook until thick. Off heat, stir in eggs and half the cheese.",
      "Layer in a baking dish: eggplant, meat sauce, eggplant, then top with béchamel.",
      "Sprinkle remaining Parmesan on top. Bake at 375°F for 45 minutes until deeply golden.",
      "Rest 15 minutes before slicing and serving."
    ]
  },
  {
    id: 5,
    name: "Pad Thai",
    cuisine: "Asian",
    description: "The beloved Thai stir-fried noodle dish with shrimp, tofu, bean sprouts, and tamarind.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80",
    prep: "20 min",
    cook: "15 min",
    serves: "4",
    ingredients: [
      "200g flat rice noodles",
      "200g shrimp, peeled",
      "100g firm tofu, cubed",
      "3 tbsp tamarind paste",
      "3 tbsp fish sauce",
      "2 tbsp palm sugar or brown sugar",
      "2 eggs",
      "1 cup bean sprouts",
      "4 spring onions, sliced",
      "3 tbsp vegetable oil",
      "Crushed peanuts, lime, chili flakes to serve"
    ],
    instructions: [
      "Soak rice noodles in warm water for 20 minutes. Drain well.",
      "Mix tamarind paste, fish sauce, and sugar together for the sauce.",
      "Heat oil in a wok over high heat. Fry tofu until golden, then add shrimp and cook until pink.",
      "Push everything to the side, scramble eggs in the wok, then mix together.",
      "Add noodles and pour sauce over. Toss everything together over high heat.",
      "Add bean sprouts and spring onions. Toss 1 minute more.",
      "Serve topped with crushed peanuts, a lime wedge, and chili flakes."
    ]
  },
  {
    id: 6,
    name: "Classic Beef Smash Burgers",
    cuisine: "American",
    description: "Crispy-edged, juicy smash burgers with caramelized onions and special sauce on brioche buns.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    prep: "15 min",
    cook: "15 min",
    serves: "4",
    ingredients: [
      "1.5 lbs 80/20 ground beef",
      "4 brioche buns",
      "4 slices American cheese",
      "1 white onion, thinly sliced",
      "Salt and black pepper",
      "3 tbsp mayonnaise",
      "1 tbsp ketchup",
      "1 tbsp yellow mustard",
      "1 tsp pickle juice",
      "Pickles, lettuce, tomato to serve"
    ],
    instructions: [
      "Mix mayo, ketchup, mustard, and pickle juice for the special sauce. Refrigerate.",
      "Divide beef into 6oz balls. Do not overwork the meat.",
      "Heat a cast iron skillet or griddle over high heat until smoking hot.",
      "Place a beef ball on the skillet and immediately smash flat with a spatula. Season with salt and pepper.",
      "Cook 90 seconds until edges are crispy, then flip. Add cheese and cook 60 more seconds.",
      "Toast buns in the same pan.",
      "Assemble: sauce on both buns, then burger with caramelized onions, pickles, lettuce, and tomato."
    ]
  },
  {
    id: 7,
    name: "Risotto ai Funghi",
    cuisine: "Italian",
    description: "Creamy Arborio rice with wild mushrooms, white wine, and Parmesan — Italian comfort at its finest.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    prep: "15 min",
    cook: "35 min",
    serves: "4",
    ingredients: [
      "300g Arborio rice",
      "400g mixed mushrooms (cremini, shiitake, porcini)",
      "1 small onion, finely diced",
      "3 cloves garlic, minced",
      "150ml dry white wine",
      "1.2L warm chicken or vegetable stock",
      "60g butter",
      "80g Parmesan, grated",
      "2 tbsp olive oil",
      "Fresh thyme, parsley, salt, pepper"
    ],
    instructions: [
      "Sauté mushrooms in 1 tbsp butter and oil over high heat until golden. Season and set aside.",
      "In the same pan, soften onion in remaining oil over medium heat. Add garlic and cook 1 minute.",
      "Add Arborio rice and stir to coat in oil. Toast 2 minutes.",
      "Pour in white wine and stir until absorbed.",
      "Add warm stock one ladle at a time, stirring constantly and waiting until each addition is absorbed before adding the next — about 20 minutes total.",
      "When rice is creamy and al dente, remove from heat. Stir in butter and Parmesan vigorously (this is the 'mantecatura').",
      "Fold in mushrooms, adjust seasoning, and serve immediately with fresh parsley."
    ]
  },
  {
    id: 8,
    name: "Shakshuka",
    cuisine: "Mediterranean",
    description: "Eggs poached in a spiced tomato and pepper sauce — perfect for brunch or any time of day.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80",
    prep: "10 min",
    cook: "25 min",
    serves: "4",
    ingredients: [
      "6 large eggs",
      "2 cans (14oz each) crushed tomatoes",
      "1 red bell pepper, diced",
      "1 yellow onion, diced",
      "4 cloves garlic, minced",
      "2 tsp cumin",
      "2 tsp paprika",
      "1/2 tsp cayenne pepper",
      "2 tbsp olive oil",
      "Fresh parsley, feta cheese, crusty bread to serve"
    ],
    instructions: [
      "Heat olive oil in a large skillet over medium heat. Add onion and pepper, cook until soft, about 8 minutes.",
      "Add garlic, cumin, paprika, and cayenne. Stir and cook 2 minutes until fragrant.",
      "Pour in crushed tomatoes. Stir well and simmer 10 minutes, season with salt and pepper.",
      "Use a spoon to make 6 wells in the sauce. Crack an egg into each well.",
      "Cover the pan and cook on medium-low until egg whites are set but yolks are still runny, about 7–8 minutes.",
      "Sprinkle with crumbled feta and fresh parsley. Serve directly from the pan with crusty bread."
    ]
  },
  {
    id: 9,
    name: "Korean Bibimbap",
    cuisine: "Asian",
    description: "A vibrant bowl of steamed rice topped with seasoned vegetables, beef, a fried egg, and gochujang.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
    prep: "30 min",
    cook: "30 min",
    serves: "4",
    ingredients: [
      "2 cups short-grain white rice, cooked",
      "200g ground beef",
      "2 cups spinach",
      "1 zucchini, julienned",
      "1 cup bean sprouts",
      "1 carrot, julienned",
      "4 eggs",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 tbsp gochujang (Korean chili paste)",
      "1 tbsp honey",
      "Sesame seeds, vegetable oil"
    ],
    instructions: [
      "Season beef with 2 tbsp soy sauce and 1 tsp sesame oil. Cook in a skillet until browned. Set aside.",
      "Quickly sauté each vegetable separately in a little oil with a pinch of salt. Keep separate.",
      "Blanch spinach 30 seconds, squeeze dry, and toss with 1 tsp sesame oil and remaining soy sauce.",
      "Make the gochujang sauce: mix gochujang, honey, 1 tsp sesame oil, and 1 tbsp water.",
      "Fry eggs sunny-side up in the same skillet.",
      "Arrange rice in bowls. Place each vegetable and beef in sections on top. Add a fried egg in the center.",
      "Drizzle with gochujang sauce and sesame seeds. Mix everything together before eating."
    ]
  },
  {
    id: 10,
    name: "BBQ Baby Back Ribs",
    cuisine: "American",
    description: "Fall-off-the-bone ribs with a smoky dry rub and sweet tangy BBQ glaze.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    prep: "20 min",
    cook: "3.5 hrs",
    serves: "4",
    ingredients: [
      "2 racks baby back ribs",
      "2 tbsp brown sugar",
      "1 tbsp smoked paprika",
      "1 tbsp garlic powder",
      "1 tbsp onion powder",
      "1 tsp cayenne pepper",
      "1 tsp black pepper",
      "1 tsp salt",
      "1 cup your favorite BBQ sauce"
    ],
    instructions: [
      "Remove the membrane from the back of each rack of ribs.",
      "Mix all dry rub ingredients together. Coat ribs generously on all sides. Wrap in plastic wrap and refrigerate 2 hours or overnight.",
      "Preheat oven to 300°F. Place ribs bone-side down on a foil-lined baking sheet. Cover tightly with foil.",
      "Bake for 2.5 hours until very tender.",
      "Uncover, brush generously with BBQ sauce, and increase oven to 400°F.",
      "Bake uncovered 20 more minutes, brushing with more sauce halfway through, until sticky and caramelized.",
      "Rest 10 minutes before slicing between bones and serving."
    ]
  }
];

// --- State ---
let activeFilter = "all";

// --- DOM Refs ---
const cardGrid = document.getElementById("card-grid");
const resultsCount = document.getElementById("results-count");
const filterBtns = document.querySelectorAll(".filter-btn");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");

// --- Render Cards ---
function renderCards(filter) {
  const filtered = filter === "all"
    ? recipes
    : recipes.filter(r => r.cuisine === filter);

  resultsCount.textContent = `${filtered.length} recipe${filtered.length !== 1 ? "s" : ""}`;

  cardGrid.innerHTML = filtered.map(recipe => `
    <article class="recipe-card" data-id="${recipe.id}" tabindex="0" role="button" aria-label="View recipe: ${recipe.name}">
      <div class="card-image-wrap">
        <img src="${recipe.image}" alt="${recipe.name}" class="card-image" loading="lazy" />
        <span class="card-cuisine-badge">${recipe.cuisine}</span>
      </div>
      <div class="card-body">
        <h2 class="card-title">${recipe.name}</h2>
        <p class="card-description">${recipe.description}</p>
        <div class="card-meta">
          <span class="card-meta-item">&#9201; ${recipe.prep} prep</span>
          <span class="card-meta-item">&#128293; ${recipe.cook} cook</span>
        </div>
        <button class="view-btn">View Recipe</button>
      </div>
    </article>
  `).join("");

  // Attach click listeners
  cardGrid.querySelectorAll(".recipe-card").forEach(card => {
    card.addEventListener("click", () => openModal(parseInt(card.dataset.id)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") openModal(parseInt(card.dataset.id));
    });
  });
}

// --- Modal ---
function openModal(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  document.getElementById("modal-image").src = recipe.image;
  document.getElementById("modal-image").alt = recipe.name;
  document.getElementById("modal-title").textContent = recipe.name;
  document.getElementById("modal-cuisine").textContent = recipe.cuisine;
  document.getElementById("modal-description").textContent = recipe.description;
  document.getElementById("modal-prep").textContent = recipe.prep;
  document.getElementById("modal-cook").textContent = recipe.cook;
  document.getElementById("modal-serves").textContent = recipe.serves + " servings";

  document.getElementById("modal-ingredients").innerHTML =
    recipe.ingredients.map(i => `<li>${i}</li>`).join("");

  document.getElementById("modal-instructions").innerHTML =
    recipe.instructions.map(step => `<li>${step}</li>`).join("");

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Filter ---
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderCards(activeFilter);
  });
});

// --- Close Modal ---
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// --- Init ---
renderCards("all");
