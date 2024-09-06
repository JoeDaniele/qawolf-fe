import React from 'react';

function Articles({ articles }) {
  return (
    <div>
      <h2>First 100 Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
