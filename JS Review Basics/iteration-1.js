const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categoriesFilm = [];

for (const movie of movies) {

  // console.log(movie)
  
  for (const category of movie.categories) {

    // console.log(category);
    

    if (!categoriesFilm.includes(category)){
       categoriesFilm.push(category);
    }
    
  }
}

console.log(categoriesFilm);
