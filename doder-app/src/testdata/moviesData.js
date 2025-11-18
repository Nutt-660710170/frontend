// Sample movies
export const moviesData = [
  {
    id: 1,
    title: 'Avatar20',
    author: 'Avatar Studio',
    category: 'sci-fi',
    price: 299,
    originalPrice: 399,
    coverImage: '/images/movies/1.jpg',
    rating: 4.5,
    reviews: 234,
    year: 1925,
    description: 'iahfojwvjp[ojqpwngiohoqwpojfqwbgopagiphapgbawb'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    category: 'fiction',
    price: 350,
    coverImage: '/images/movies/2.jpg',
    rating: 4.8,
    reviews: 512,
    year: 1949,
    description: '0wjqfoijwqoikgnhohiozgjviohoihfgiohjoqghoi'
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'fiction',
    price: 320,
    coverImage: '/images/movies/3.jpg',
    rating: 4.6,
    reviews: 189,
    year: 1960,
    description: 'oigqjwpjgoqwpogkokwgpoqrijhhfiduyigcyughvbatgwfayedfyuqwagd'
  }
];

// Function to get all movies
export const getAllMoives = () => {
  return moviesData;
};

// Function to get a single movie by ID
export const getMoivesById = (id) => {
  return moviesData.find(movie => movie.id === parseInt(id));
};

// Function to get movies by category
export const getMoviesByCategory = (category) => {
  if (!category || category === 'all') return moviesData;
  return moviesData.filter(movie => movie.category === category);
};

// Function to search movies
export const searchMovies = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return booksData.filter(movie => 
    movie.title.toLowerCase().includes(lowercaseQuery) ||
    movie.author.toLowerCase().includes(lowercaseQuery) ||
    movie.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to get featured movies
export const getFeaturedMovies = (limit = 3) => {
  return moviesData
    .filter(movie => movie.rating >= 4.5)
    .slice(0, limit);
};

// Function to get new movies
export const getNewMovies = (limit = 4) => {
  return moviesData
    .filter(movie => movie.isNew)
    .slice(0, limit);
};

export default moviesData;