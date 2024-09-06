import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Articles from './components/Articles';
import ValidationResult from './components/ValidationResult';

function App() {
  const [articles, setArticles] = useState([]);
  const [isSorted, setIsSorted] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch data from be w/ playwright
        const response = await axios.get('http://localhost:5000/api/hacker-news');
        
        // Update state 
        setArticles(response.data.articles);
        setIsSorted(response.data.isSorted);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    // Call the API on mount
    fetchArticles();
  }, []); //ensure it mounts once

  return (
    <div className="App">
      <h1>Hacker News Article Checker</h1>
      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <>
          {/* Display validation boolean */}
          <ValidationResult isSorted={isSorted} />
          
          {/* Display articles list */}
          <Articles articles={articles} />
        </>
      )}
    </div>
  );
}

export default App;
