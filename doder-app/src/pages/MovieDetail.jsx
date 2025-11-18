import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const response = await fetch(`----------`)

        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }

        const data = await response.json();
        setMovie(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching movie:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-xl text-red-600 mb-4">Error: {error}</div>
        <Link to="/movies" className="text-blue-600 hover:underline">
          Go back to Movie List
        </Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-xl mb-4">Movie not found</div>
        <Link to="/movies" className="text-blue-600 hover:underline">
          Go back to Movie List
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/movies" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Movie List
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <div className="space-y-3">
          <p><span className="font-semibold">Author:</span> {movie.author}</p>
          <p><span className="font-semibold">Description:</span> {movie.description}</p>
          <p><span className="font-semibold">Year:</span> {movie.year}</p>
          <p><span className="font-semibold">Price:</span> ฿{movie.price}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;