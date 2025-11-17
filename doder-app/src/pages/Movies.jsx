import "./styles/Movies.css";

function Movies() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
    },
    {
      title: "Interstellar",
      year: 2014,
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
      title: "La La Land",
      year: 2016,
      image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
    }
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <section style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h1>กำลังฉาย</h1>
      </section>

      <section>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {movies.map((movie, index) => (
            <div 
              key={index} 
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}
            >
              <img 
                src={movie.image} 
                alt={movie.title} 
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ marginTop: "1rem" }}>{movie.title}</h3>
              <p>{movie.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Movies;
