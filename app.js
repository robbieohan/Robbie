/* ============================================================
   ROBBIE'S RECIPE COLLECTION — app.js
   ============================================================ */

const recipes = [
  /* ————————————— ITALIAN ————————————— */
  {
    id: 1,
    name: "Classic Cacio e Pepe",
    cuisine: "Italian",
    description: "A Roman staple of silky pasta with just three ingredients — and more technique than you'd expect. Creamy, peppery, impossibly good.",
    image: "https://picsum.photos/seed/cacioepepe/800/600",
    imageThumb: "https://picsum.photos/seed/cacioepepe/400/300",
    time: "25 min",
    serves: "2 servings",
    difficulty: "Medium",
    ingredients: [
      "320 g spaghetti or tonnarelli",
      "200 g Pecorino Romano, finely grated",
      "80 g Parmigiano-Reggiano, finely grated",
      "2 tsp freshly cracked black pepper (coarse)",
      "Salt (for pasta water)"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Cook pasta until 2 minutes shy of al dente, reserving 1½ cups of starchy pasta water.",
      "Toast the black pepper in a wide skillet over medium heat for 1–2 minutes until fragrant. Add ½ cup pasta water and swirl.",
      "Add drained pasta to the skillet and toss vigorously, adding pasta water gradually to build a glossy sauce.",
      "Remove pan from heat. Add the grated cheeses in small additions, tossing constantly. The residual heat will melt the cheese without clumping.",
      "Add more pasta water as needed until you have a creamy, silky coating. Serve immediately with extra pepper and Pecorino."
    ]
  },
  {
    id: 2,
    name: "Margherita Pizza",
    cuisine: "Italian",
    description: "Neapolitan simplicity at its finest — hand-stretched dough, San Marzano tomatoes, fresh buffalo mozzarella, and a handful of basil.",
    image: "https://picsum.photos/seed/pizza/800/600",
    imageThumb: "https://picsum.photos/seed/pizza/400/300",
    time: "1 hr 30 min",
    serves: "4 servings",
    difficulty: "Medium",
    ingredients: [
      "500 g '00' flour (plus extra for dusting)",
      "7 g instant yeast",
      "10 g fine sea salt",
      "325 ml warm water",
      "1 tbsp olive oil",
      "400 g San Marzano whole peeled tomatoes",
      "250 g fresh buffalo mozzarella",
      "Large handful of fresh basil leaves",
      "Extra-virgin olive oil, to finish",
      "Flaky sea salt"
    ],
    instructions: [
      "Mix flour, yeast, and salt. Add water and olive oil; knead 10 minutes until smooth and elastic. Cover and rest 1 hour until doubled.",
      "Crush the tomatoes by hand into a bowl. Season with a pinch of salt.",
      "Preheat oven to its highest setting (ideally 250–280°C / 480–540°F) with a heavy baking tray or pizza stone inside.",
      "Divide dough into 4 balls. On a floured surface, stretch each ball gently into a 25–30 cm round.",
      "Spread a thin layer of crushed tomato on the base, tear over the mozzarella, and slide onto the hot tray.",
      "Bake 8–12 minutes until crust is charred at the edges and cheese is bubbling. Scatter basil and drizzle with olive oil. Serve at once."
    ]
  },

  /* ————————————— MEXICAN ————————————— */
  {
    id: 3,
    name: "Chicken Enchiladas Rojas",
    cuisine: "Mexican",
    description: "Corn tortillas filled with tender shredded chicken, smothered in a smoky dried-chile sauce, and blanketed with melted cheese. Pure comfort.",
    image: "https://picsum.photos/seed/enchiladas/800/600",
    imageThumb: "https://picsum.photos/seed/enchiladas/400/300",
    time: "1 hr",
    serves: "4 servings",
    difficulty: "Medium",
    ingredients: [
      "3 dried guajillo chiles, stemmed and seeded",
      "2 dried ancho chiles, stemmed and seeded",
      "3 Roma tomatoes, halved",
      "4 garlic cloves",
      "½ white onion",
      "1 tsp cumin",
      "1 tsp dried oregano",
      "Salt and pepper",
      "2 cups shredded cooked chicken",
      "12 corn tortillas",
      "1½ cups shredded Oaxacan or Monterey Jack cheese",
      "Neutral oil, for frying",
      "Crema, sliced radishes & cilantro, to serve"
    ],
    instructions: [
      "Toast dried chiles in a dry skillet 30 seconds per side. Soak in hot water 20 minutes to rehydrate.",
      "Char tomatoes, garlic, and onion under the broiler or directly over a flame until lightly blackened.",
      "Blend soaked chiles (with ½ cup soaking water), charred vegetables, cumin, and oregano until very smooth. Season generously.",
      "Fry sauce in a little oil 5 minutes, stirring. Thin with chicken stock to a coating consistency.",
      "Quickly fry each tortilla in hot oil 5 seconds per side to soften. Dip into sauce to coat.",
      "Fill each tortilla with chicken and a pinch of cheese; roll tightly. Arrange seam-side down in a baking dish.",
      "Pour remaining sauce over enchiladas, top with remaining cheese. Bake at 190°C/375°F for 20 minutes until bubbling.",
      "Garnish with crema, radishes, and cilantro. Serve hot."
    ]
  },
  {
    id: 4,
    name: "Guacamole Fresco",
    cuisine: "Mexican",
    description: "Chunky, bright, and dangerously addictive. Made tableside with ripe Hass avocados, lime, jalapeño, and fresh herbs.",
    image: "https://picsum.photos/seed/guacamole/800/600",
    imageThumb: "https://picsum.photos/seed/guacamole/400/300",
    time: "10 min",
    serves: "4 servings",
    difficulty: "Easy",
    ingredients: [
      "3 ripe Hass avocados",
      "Juice of 2 limes",
      "½ small white onion, finely diced",
      "1 jalapeño, seeded and minced",
      "2 tbsp fresh cilantro, chopped",
      "1 small ripe tomato, seeded and diced",
      "½ tsp fine sea salt (plus more to taste)",
      "Pinch of cumin (optional)"
    ],
    instructions: [
      "Halve, pit, and scoop avocados into a molcajete or bowl.",
      "Add lime juice and salt. Mash with a fork to a chunky texture — leave some lumps for character.",
      "Fold in onion, jalapeño, cilantro, and tomato gently.",
      "Taste and adjust lime, salt, and heat. Serve immediately with warm tortilla chips."
    ]
  },

  /* ————————————— ASIAN ————————————— */
  {
    id: 5,
    name: "Miso Ramen with Soft-Boiled Egg",
    cuisine: "Asian",
    description: "A rich, warming bowl of ramen in a deeply flavored miso broth, topped with chashu pork, jammy eggs, and crispy nori.",
    image: "https://picsum.photos/seed/ramen/800/600",
    imageThumb: "https://picsum.photos/seed/ramen/400/300",
    time: "45 min",
    serves: "2 servings",
    difficulty: "Medium",
    ingredients: [
      "2 packs fresh ramen noodles",
      "4 cups chicken or dashi stock",
      "3 tbsp white miso paste",
      "1 tbsp soy sauce",
      "1 tbsp mirin",
      "1 tsp sesame oil",
      "1 tsp grated ginger",
      "2 garlic cloves, minced",
      "2 soft-boiled eggs (7 min), halved",
      "4 slices chashu pork belly or roasted pork",
      "2 sheets nori",
      "2 spring onions, sliced",
      "Bamboo shoots & corn kernels, to garnish",
      "Chili oil, to serve"
    ],
    instructions: [
      "Soft-boil eggs: bring water to boil, gently lower in eggs and cook exactly 7 minutes. Transfer to ice water, peel, and marinate in soy sauce + mirin for at least 30 min.",
      "Sauté garlic and ginger in sesame oil 1 minute in a saucepan. Add stock and bring to a gentle simmer.",
      "Whisk miso paste with a ladle of hot broth until dissolved, then stir back into the pot. Add soy sauce and mirin. Do not boil after adding miso.",
      "Cook ramen noodles per packet instructions. Drain and divide between deep bowls.",
      "Ladle hot broth over noodles. Arrange chashu, halved egg, nori, bamboo shoots, and corn on top.",
      "Scatter spring onions, add a drizzle of chili oil, and serve steaming hot."
    ]
  },
  {
    id: 6,
    name: "Thai Green Curry",
    cuisine: "Asian",
    description: "Aromatic, coconut-laced green curry with tender chicken and vibrant vegetables — herbaceous, spicy, and deeply satisfying.",
    image: "https://picsum.photos/seed/thaicurry/800/600",
    imageThumb: "https://picsum.photos/seed/thaicurry/400/300",
    time: "35 min",
    serves: "4 servings",
    difficulty: "Easy",
    ingredients: [
      "2 tbsp green curry paste (store-bought or homemade)",
      "2 × 400 ml cans coconut milk",
      "600 g chicken thigh, sliced",
      "1 zucchini, halved and sliced",
      "1 cup snap peas",
      "1 red bell pepper, sliced",
      "2 kaffir lime leaves",
      "1 stalk lemongrass, bruised",
      "1 tbsp fish sauce",
      "1 tsp palm sugar or brown sugar",
      "Large handful Thai basil",
      "Jasmine rice, to serve",
      "Lime wedges & red chili, to garnish"
    ],
    instructions: [
      "Open one can of coconut milk and scoop the thick cream from the top into a wok or wide saucepan over medium-high heat.",
      "Add curry paste to the coconut cream and fry, stirring, for 2–3 minutes until very fragrant and the oil separates.",
      "Add chicken and cook 5 minutes, tossing in the paste.",
      "Pour in the remaining coconut milk and the second can. Add lemongrass and kaffir lime leaves. Simmer 10 minutes.",
      "Add vegetables and cook a further 5 minutes until just tender.",
      "Season with fish sauce and sugar. Taste and adjust. Remove lemongrass and lime leaves.",
      "Stir in Thai basil, ladle over jasmine rice, and garnish with chili and lime."
    ]
  },
  {
    id: 7,
    name: "Beef & Broccoli Stir-Fry",
    cuisine: "Asian",
    description: "Better than takeout — silky-smooth beef in a glossy soy-oyster sauce with crisp-tender broccoli florets over fluffy steamed rice.",
    image: "https://picsum.photos/seed/stirfry/800/600",
    imageThumb: "https://picsum.photos/seed/stirfry/400/300",
    time: "20 min",
    serves: "3 servings",
    difficulty: "Easy",
    ingredients: [
      "400 g flank steak or sirloin, thinly sliced against the grain",
      "1 tsp baking soda (for velveting)",
      "2 tbsp cornstarch, divided",
      "3 tbsp oyster sauce",
      "2 tbsp soy sauce",
      "1 tbsp Shaoxing wine or dry sherry",
      "1 tsp sesame oil",
      "1 tsp sugar",
      "3 garlic cloves, minced",
      "1 tsp fresh ginger, grated",
      "300 g broccoli florets, blanched 2 min",
      "2 tbsp neutral oil"
    ],
    instructions: [
      "Velvet the beef: toss sliced beef with baking soda, 1 tbsp cornstarch, and a splash of water. Rest 20 minutes, then rinse well.",
      "Whisk together oyster sauce, soy sauce, Shaoxing wine, sesame oil, sugar, and remaining 1 tbsp cornstarch with ¼ cup water to make the sauce.",
      "Heat a wok over the highest heat until smoking. Add oil, then beef in a single layer. Sear 90 seconds without stirring, then toss briefly. Remove and set aside.",
      "In the same wok, add garlic and ginger; stir-fry 20 seconds. Add blanched broccoli and toss.",
      "Return beef to the wok, pour over the sauce, and toss everything together until the sauce thickens and coats, about 1 minute.",
      "Serve immediately over steamed jasmine rice."
    ]
  },

  /* ————————————— MEDITERRANEAN ————————————— */
  {
    id: 8,
    name: "Greek Lemon Chicken with Orzo",
    cuisine: "Mediterranean",
    description: "Juicy chicken thighs roasted over lemony orzo, soaking up herbed pan juices with olives, tomatoes, and crumbled feta.",
    image: "https://picsum.photos/seed/greekchicken/800/600",
    imageThumb: "https://picsum.photos/seed/greekchicken/400/300",
    time: "55 min",
    serves: "4 servings",
    difficulty: "Easy",
    ingredients: [
      "8 bone-in, skin-on chicken thighs",
      "Juice and zest of 2 lemons",
      "6 garlic cloves, crushed",
      "3 tbsp olive oil",
      "1 tbsp dried oregano",
      "1 tsp dried thyme",
      "300 g orzo pasta",
      "600 ml chicken stock",
      "200 g cherry tomatoes",
      "100 g Kalamata olives",
      "100 g feta cheese, crumbled",
      "Fresh parsley, to finish",
      "Salt and pepper"
    ],
    instructions: [
      "Marinate chicken: combine lemon zest, juice, garlic, olive oil, oregano, thyme, salt and pepper. Coat chicken and rest 30 min (or overnight).",
      "Preheat oven to 200°C/400°F. Sear chicken skin-side down in an oven-proof pan over medium-high heat, 4–5 minutes until golden. Remove.",
      "In the same pan, add orzo and toast 1 minute. Pour in stock and nestle in cherry tomatoes and olives.",
      "Arrange chicken thighs on top, skin-side up. Pour over any remaining marinade.",
      "Roast uncovered 35–40 minutes until chicken is cooked through and orzo has absorbed the stock.",
      "Scatter feta and fresh parsley over the top. Let rest 5 minutes before serving."
    ]
  },
  {
    id: 9,
    name: "Shakshuka",
    cuisine: "Mediterranean",
    description: "Eggs poached in a spiced tomato and pepper sauce, finished with creamy feta and fresh herbs. Perfect any time of day.",
    image: "https://picsum.photos/seed/shakshuka/800/600",
    imageThumb: "https://picsum.photos/seed/shakshuka/400/300",
    time: "30 min",
    serves: "2–3 servings",
    difficulty: "Easy",
    ingredients: [
      "2 tbsp olive oil",
      "1 red onion, diced",
      "1 red bell pepper, diced",
      "4 garlic cloves, minced",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "½ tsp chili flakes",
      "400 g can crushed tomatoes",
      "1 tsp sugar",
      "Salt and pepper",
      "4–6 large eggs",
      "80 g feta, crumbled",
      "Fresh parsley and cilantro",
      "Crusty bread, to serve"
    ],
    instructions: [
      "Heat olive oil in a wide skillet over medium heat. Sauté onion and pepper 8 minutes until softened.",
      "Add garlic, cumin, paprika, and chili flakes. Cook 1 minute until fragrant.",
      "Pour in crushed tomatoes and sugar. Season. Simmer 10–12 minutes until sauce thickens and deepens in color.",
      "Make wells in the sauce with a spoon and crack in the eggs. Cover and cook 5–7 minutes, until whites are set but yolks remain runny.",
      "Remove from heat. Scatter feta, parsley, and cilantro. Serve straight from the pan with plenty of crusty bread."
    ]
  },

  /* ————————————— AMERICAN ————————————— */
  {
    id: 10,
    name: "Smash Burgers with Special Sauce",
    cuisine: "American",
    description: "Crispy-edged, double-smashed beef patties stacked with melted American cheese and a tangy house sauce. Better than any fast food.",
    image: "https://picsum.photos/seed/smashburger/800/600",
    imageThumb: "https://picsum.photos/seed/smashburger/400/300",
    time: "25 min",
    serves: "4 servings",
    difficulty: "Easy",
    ingredients: [
      "700 g 80/20 ground beef, shaped into 8 loose balls",
      "8 slices American cheese",
      "4 brioche burger buns, toasted",
      "Salt and pepper",
      "For the special sauce:",
      "4 tbsp mayonnaise",
      "2 tbsp ketchup",
      "1 tbsp yellow mustard",
      "1 tbsp sweet relish",
      "½ tsp garlic powder",
      "½ tsp smoked paprika",
      "Shredded iceberg, sliced pickles & white onion, to serve"
    ],
    instructions: [
      "Mix special sauce ingredients; refrigerate.",
      "Heat a cast-iron skillet or griddle over the highest heat until screaming hot. Do not add oil.",
      "Season a beef ball with salt and pepper, place in the skillet, then immediately smash flat with a heavy spatula (about 1 cm thick). Cook 2 minutes undisturbed.",
      "Flip, place a slice of cheese on top, and cook 1 more minute. Stack two patties with cheese for a double.",
      "Toast buns cut-side down in the pan 30 seconds.",
      "Build: sauce on both bun halves, then shredded lettuce, onion, patties, pickles, and top bun. Serve immediately."
    ]
  },

  /* ————————————— INDIAN ————————————— */
  {
    id: 11,
    name: "Butter Chicken (Murgh Makhani)",
    cuisine: "Indian",
    description: "Succulent tandoori-marinated chicken in a velvety, mildly spiced tomato-cream sauce — the dish that conquered the world.",
    image: "https://picsum.photos/seed/butterchicken/800/600",
    imageThumb: "https://picsum.photos/seed/butterchicken/400/300",
    time: "1 hr 15 min",
    serves: "4 servings",
    difficulty: "Medium",
    ingredients: [
      "For the chicken marinade:",
      "700 g chicken thighs, cubed",
      "150 g full-fat yogurt",
      "2 tsp garam masala",
      "1 tsp cumin, 1 tsp turmeric, 1 tsp chili powder",
      "1 tbsp ginger-garlic paste",
      "For the sauce:",
      "3 tbsp unsalted butter",
      "1 white onion, chopped",
      "400 g canned whole tomatoes",
      "1 tsp garam masala, 1 tsp coriander, ½ tsp chili",
      "2 tbsp sugar",
      "150 ml heavy cream",
      "1 tbsp dried fenugreek leaves (kasuri methi)",
      "Salt",
      "Naan and basmati rice, to serve"
    ],
    instructions: [
      "Combine marinade ingredients with chicken, toss well. Refrigerate at least 2 hours (overnight preferred).",
      "Grill or broil chicken in a single layer at 220°C/425°F, 15–18 minutes, turning once, until charred at edges. Set aside.",
      "Melt butter in a heavy saucepan. Sauté onion until golden, 10 minutes. Add whole tomatoes, crushing them. Cook 15 minutes until jammy.",
      "Add all sauce spices, cook 2 minutes. Blend sauce smooth (use an immersion blender or transfer carefully). Strain for extra silkiness if desired.",
      "Return blended sauce to pan. Stir in cream and sugar. Simmer 10 minutes until deep orange and thickened.",
      "Add grilled chicken and crushed fenugreek leaves. Simmer gently 8 minutes. Taste and adjust salt.",
      "Swirl in a little extra butter before serving. Serve with warm naan and basmati rice."
    ]
  },
  {
    id: 12,
    name: "Chana Masala",
    cuisine: "Indian",
    description: "Hearty, protein-packed chickpeas simmered in a tangy, warmly spiced tomato gravy. A vegetarian masterpiece full of bold flavor.",
    image: "https://picsum.photos/seed/chanamasala/800/600",
    imageThumb: "https://picsum.photos/seed/chanamasala/400/300",
    time: "40 min",
    serves: "4 servings",
    difficulty: "Easy",
    ingredients: [
      "2 × 400 g cans chickpeas, drained",
      "2 tbsp neutral oil or ghee",
      "1 large onion, finely diced",
      "4 garlic cloves, minced",
      "1 tbsp ginger, grated",
      "400 g canned diced tomatoes",
      "1 tsp cumin seeds",
      "2 tsp garam masala",
      "1 tsp coriander powder",
      "1 tsp chili powder",
      "½ tsp turmeric",
      "1 tsp amchur (dry mango powder) or lemon juice",
      "Salt",
      "Fresh cilantro, lemon wedges, and naan to serve"
    ],
    instructions: [
      "Heat oil in a large pan over medium heat. Add cumin seeds and let them sizzle 30 seconds.",
      "Add onion and cook 10–12 minutes until deeply golden brown — this is key to flavor.",
      "Add garlic and ginger; cook 2 minutes. Add all dry spices and cook 1 minute, stirring.",
      "Add tomatoes, season with salt, and simmer 10–12 minutes until thick and dark.",
      "Add chickpeas and ½ cup water. Simmer 12 minutes, lightly mashing some chickpeas for a thicker gravy.",
      "Stir in amchur (or lemon juice), taste and adjust seasoning. Garnish with cilantro and serve with naan."
    ]
  },

  /* ————————————— FRENCH ————————————— */
  {
    id: 13,
    name: "French Onion Soup",
    cuisine: "French",
    description: "Deeply caramelized onions in a rich beefy broth, crowned with a toasted baguette crouton drowning under melted Gruyère.",
    image: "https://picsum.photos/seed/frenchonionsoup/800/600",
    imageThumb: "https://picsum.photos/seed/frenchonionsoup/400/300",
    time: "1 hr 20 min",
    serves: "4 servings",
    difficulty: "Medium",
    ingredients: [
      "1.2 kg yellow onions, very thinly sliced",
      "4 tbsp unsalted butter",
      "1 tbsp olive oil",
      "1 tsp sugar",
      "3 garlic cloves, minced",
      "½ cup dry white wine or dry vermouth",
      "1.2 liters good beef stock",
      "2 fresh thyme sprigs",
      "1 bay leaf",
      "Salt and pepper",
      "8 slices French baguette",
      "180 g Gruyère, grated"
    ],
    instructions: [
      "Melt butter with olive oil in a large heavy pot over medium heat. Add onions and toss to coat. Cover and cook 15 minutes.",
      "Uncover, add sugar and a pinch of salt. Cook on medium-low heat, stirring every 10 minutes, for 45–55 minutes total until deeply caramelized and jammy.",
      "Add garlic, cook 1 minute. Add wine and scrape up any browned bits. Cook until wine evaporates.",
      "Add stock, thyme, and bay leaf. Simmer 20 minutes. Remove thyme and bay leaf. Season generously.",
      "Toast baguette slices under the broiler until golden on both sides.",
      "Ladle soup into oven-safe bowls, place a crouton on top, and pile on grated Gruyère. Broil 3–5 minutes until bubbly and lightly charred. Serve immediately."
    ]
  },
  {
    id: 14,
    name: "Crème Brûlée",
    cuisine: "French",
    description: "The ultimate French dessert — silky vanilla custard beneath a shattering, caramelized sugar crust. Simple. Elegant. Perfect.",
    image: "https://picsum.photos/seed/cremebrulee/800/600",
    imageThumb: "https://picsum.photos/seed/cremebrulee/400/300",
    time: "1 hr + chilling",
    serves: "4 servings",
    difficulty: "Medium",
    ingredients: [
      "500 ml heavy cream",
      "1 vanilla bean, split and scraped (or 1½ tsp extract)",
      "6 egg yolks",
      "100 g caster sugar",
      "Pinch of sea salt",
      "4 tbsp granulated white sugar (for the brûlée top)"
    ],
    instructions: [
      "Preheat oven to 150°C/300°F. Place 4 ramekins in a deep baking dish.",
      "Heat cream with vanilla bean and seeds (or extract) over medium heat until just below simmering. Remove from heat and steep 15 minutes.",
      "Whisk egg yolks with caster sugar and salt until pale. Slowly pour warm cream into yolks while whisking — go gradually to avoid scrambling.",
      "Strain custard through a fine sieve into a pitcher. Skim off any bubbles. Divide between ramekins.",
      "Fill baking dish with hot water halfway up the ramekins (a bain-marie). Cover loosely with foil. Bake 35–40 minutes until set with a slight wobble in the center.",
      "Cool to room temperature, then refrigerate at least 4 hours (up to 3 days). Just before serving, sprinkle 1 tbsp sugar per ramekin and caramelize with a kitchen torch until deep amber. Serve within 5 minutes."
    ]
  }
];

/* ============================================================
   DOM REFERENCES
   ============================================================ */
/* ============================================================
   STATE & DOM
   ============================================================ */
let nextId = recipes.reduce((max, r) => Math.max(max, r.id), 0) + 1;
let activeFilter  = 'all';
let currentRecipe = null; // recipe open in view modal
let editingId     = null; // id being edited (null = new)

const grid         = document.getElementById('recipe-grid');
const noResults    = document.getElementById('no-results');
const filterList   = document.getElementById('filter-list');
const backdrop     = document.getElementById('modal-backdrop');
const modalClose   = document.getElementById('modal-close');
const scrollTopBtn = document.getElementById('scroll-top');
const fabAdd       = document.getElementById('fab-add');
const formBackdrop = document.getElementById('form-backdrop');
const formClose    = document.getElementById('form-close');
const formCancel   = document.getElementById('form-cancel');
const formSave     = document.getElementById('form-save');
const imgInput     = document.getElementById('f-image');
const imgPreview   = document.getElementById('img-preview');
const imgPlaceholder = document.getElementById('img-placeholder');

/* ============================================================
   CUISINE FILTER TABS — rebuilt dynamically so new cuisines appear
   ============================================================ */
function rebuildFilterTabs() {
  const cuisines = [...new Set(recipes.map(r => r.cuisine))].sort();
  const emojiMap = {
    Italian:'🍝', Mexican:'🌮', Asian:'🍜', American:'🍔',
    Mediterranean:'🫒', Indian:'🍛', French:'🥐', Other:'🍴'
  };
  // keep "All" + build one tab per cuisine
  filterList.innerHTML = `<li><button class="filter-btn ${activeFilter==='all'?'active':''}" data-filter="all" aria-pressed="${activeFilter==='all'}">All</button></li>`
    + cuisines.map(c => `<li><button class="filter-btn ${activeFilter===c?'active':''}" data-filter="${c}" aria-pressed="${activeFilter===c}">${emojiMap[c]||'🍴'} ${c}</button></li>`).join('');

  filterList.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterList.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active'); b.setAttribute('aria-pressed','false');
      });
      btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
      activeFilter = btn.dataset.filter;
      renderCards(activeFilter);
    });
  });
}

/* ============================================================
   RENDER CARDS
   ============================================================ */
function renderCards(filter) {
  const filtered = filter === 'all'
    ? recipes
    : recipes.filter(r => r.cuisine === filter);

  grid.innerHTML = '';
  noResults.classList.toggle('visible', filtered.length === 0);

  filtered.forEach(recipe => {
    const card = document.createElement('article');
    card.className = 'recipe-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${recipe.name} — ${recipe.cuisine} recipe`);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img class="card-img" src="${recipe.imageThumb || recipe.image}" alt="${recipe.name}" loading="lazy" width="400" height="300" />
        <div class="card-img-overlay" aria-hidden="true"></div>
        <span class="cuisine-badge">${recipe.cuisine}</span>
        <span class="card-time-badge"><span aria-hidden="true">⏱</span> ${recipe.time}</span>
        <button class="card-edit-btn" aria-label="Edit ${recipe.name}" title="Edit recipe">✏️</button>
      </div>
      <div class="card-body">
        <h2 class="card-title">${recipe.name}</h2>
        <p class="card-desc">${recipe.description}</p>
        <div class="card-footer">
          <span class="card-serves"><span aria-hidden="true">👤</span> ${recipe.serves}</span>
          <button class="view-btn" aria-label="View full recipe for ${recipe.name}">View Recipe</button>
        </div>
      </div>
    `;

    // card click → view modal
    card.addEventListener('click', () => openModal(recipe));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(recipe); }
    });
    // view btn
    card.querySelector('.view-btn').addEventListener('click', e => e.stopPropagation());
    // edit pencil on card image
    card.querySelector('.card-edit-btn').addEventListener('click', e => {
      e.stopPropagation();
      openForm(recipe);
    });

    grid.appendChild(card);
  });
}

/* ============================================================
   VIEW MODAL
   ============================================================ */
function openModal(recipe) {
  currentRecipe = recipe;
  document.getElementById('modal-img').src = recipe.image || recipe.imageThumb || '';
  document.getElementById('modal-img').alt = recipe.name;
  document.getElementById('modal-cuisine-pill').textContent = recipe.cuisine;
  document.getElementById('modal-title-text').textContent = recipe.name;

  document.getElementById('modal-meta-row').innerHTML = `
    <div class="meta-chip"><span class="chip-icon">⏱</span><span><span class="chip-label">Total Time</span><span class="chip-val">${recipe.time}</span></span></div>
    <div class="meta-chip"><span class="chip-icon">👤</span><span><span class="chip-label">Serves</span><span class="chip-val">${recipe.serves}</span></span></div>
    <div class="meta-chip"><span class="chip-icon">📊</span><span><span class="chip-label">Difficulty</span><span class="chip-val">${recipe.difficulty}</span></span></div>
  `;

  document.getElementById('modal-ingredients').innerHTML = recipe.ingredients
    .map(ing => `<li><span class="ing-dot" aria-hidden="true"></span>${ing}</li>`)
    .join('');

  document.getElementById('modal-instructions').innerHTML = recipe.instructions
    .map((step, i) => `<li><span class="step-num">${i+1}</span><span>${step}</span></li>`)
    .join('');

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => modalClose.focus(), 100);
}

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  currentRecipe = null;
}

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });

// Edit / Delete buttons inside view modal
document.getElementById('btn-edit-recipe').addEventListener('click', () => {
  if (!currentRecipe) return;
  closeModal();
  openForm(currentRecipe);
});

document.getElementById('btn-delete-recipe').addEventListener('click', () => {
  if (!currentRecipe) return;
  if (!confirm(`Delete "${currentRecipe.name}"? This cannot be undone.`)) return;
  const idx = recipes.findIndex(r => r.id === currentRecipe.id);
  if (idx !== -1) recipes.splice(idx, 1);
  closeModal();
  rebuildFilterTabs();
  renderCards(activeFilter);
});

/* ============================================================
   ADD / EDIT FORM
   ============================================================ */
function makeDynamicItem(value, isTextarea) {
  const wrap = document.createElement('div');
  wrap.className = 'dynamic-item';
  const el = document.createElement(isTextarea ? 'textarea' : 'input');
  el.type = 'text';
  el.value = value || '';
  if (isTextarea) { el.rows = 2; }
  const rm = document.createElement('button');
  rm.type = 'button';
  rm.className = 'remove-item-btn';
  rm.setAttribute('aria-label', 'Remove');
  rm.textContent = '×';
  rm.addEventListener('click', () => wrap.remove());
  wrap.appendChild(el);
  wrap.appendChild(rm);
  return wrap;
}

function openForm(recipe) {
  editingId = recipe ? recipe.id : null;
  document.getElementById('form-title').textContent = recipe ? 'Edit Recipe' : 'Add New Recipe';

  // Populate fields
  document.getElementById('f-name').value        = recipe?.name        || '';
  document.getElementById('f-cuisine').value     = recipe?.cuisine     || 'Italian';
  document.getElementById('f-time').value        = recipe?.time        || '';
  document.getElementById('f-serves').value      = recipe?.serves      || '';
  document.getElementById('f-difficulty').value  = recipe?.difficulty  || 'Medium';
  document.getElementById('f-description').value = recipe?.description || '';
  document.getElementById('f-image').value       = recipe?.image       || recipe?.imageThumb || '';
  updateImgPreview(recipe?.image || recipe?.imageThumb || '');

  // Ingredients
  const ingList = document.getElementById('ingredients-list');
  ingList.innerHTML = '';
  (recipe?.ingredients || ['']).forEach(v => ingList.appendChild(makeDynamicItem(v, false)));

  // Instructions
  const insList = document.getElementById('instructions-list');
  insList.innerHTML = '';
  (recipe?.instructions || ['']).forEach(v => insList.appendChild(makeDynamicItem(v, true)));

  formBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('f-name').focus();
}

function closeForm() {
  formBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  editingId = null;
}

function updateImgPreview(url) {
  if (url) {
    imgPreview.src = url;
    imgPreview.style.display = 'block';
    imgPlaceholder.style.display = 'none';
  } else {
    imgPreview.style.display = 'none';
    imgPlaceholder.style.display = 'block';
  }
}

imgInput.addEventListener('input', () => updateImgPreview(imgInput.value.trim()));

document.getElementById('add-ingredient').addEventListener('click', () => {
  document.getElementById('ingredients-list').appendChild(makeDynamicItem('', false));
});
document.getElementById('add-instruction').addEventListener('click', () => {
  document.getElementById('instructions-list').appendChild(makeDynamicItem('', true));
});

fabAdd.addEventListener('click', () => openForm(null));
formClose.addEventListener('click', closeForm);
formCancel.addEventListener('click', closeForm);
formBackdrop.addEventListener('click', e => { if (e.target === formBackdrop) closeForm(); });

formSave.addEventListener('click', () => {
  const name = document.getElementById('f-name').value.trim();
  if (!name) { alert('Please enter a recipe name.'); return; }

  const ingredients = [...document.getElementById('ingredients-list').querySelectorAll('input')]
    .map(i => i.value.trim()).filter(Boolean);
  const instructions = [...document.getElementById('instructions-list').querySelectorAll('textarea')]
    .map(t => t.value.trim()).filter(Boolean);

  if (ingredients.length === 0) { alert('Add at least one ingredient.'); return; }
  if (instructions.length === 0) { alert('Add at least one instruction step.'); return; }

  const imgUrl = document.getElementById('f-image').value.trim();
  const data = {
    name,
    cuisine:     document.getElementById('f-cuisine').value,
    time:        document.getElementById('f-time').value.trim() || '—',
    serves:      document.getElementById('f-serves').value.trim() || '—',
    difficulty:  document.getElementById('f-difficulty').value,
    description: document.getElementById('f-description').value.trim(),
    image:       imgUrl || `https://source.unsplash.com/800x600/?${encodeURIComponent(name)}`,
    imageThumb:  imgUrl || `https://source.unsplash.com/400x300/?${encodeURIComponent(name)}`,
    ingredients,
    instructions,
  };

  if (editingId !== null) {
    const idx = recipes.findIndex(r => r.id === editingId);
    if (idx !== -1) recipes[idx] = { ...recipes[idx], ...data };
  } else {
    data.id = nextId++;
    recipes.push(data);
  }

  closeForm();
  rebuildFilterTabs();
  renderCards(activeFilter);
});

/* ============================================================
   KEYBOARD
   ============================================================ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (formBackdrop.classList.contains('open')) closeForm();
    else if (backdrop.classList.contains('open')) closeModal();
  }
});

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   INIT
   ============================================================ */
rebuildFilterTabs();
renderCards('all');
