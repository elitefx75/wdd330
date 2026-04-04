const pairings = [
  { book: "The Hobbit", movie: "The Lord of the Rings" },
  { book: "Pride and Prejudice", movie: "Pride & Prejudice" },
  { book: "Harry Potter", movie: "Harry Potter Series" }
];

function search(type) {
  const input = document.getElementById('searchInput').value;
  alert(`Searching ${type === 'book' ? 'movies for book' : 'books for movie'}: ${input}`);
}

function displayPairings() {
  const container = document.getElementById('pairingsContainer');
  container.innerHTML = '';
  pairings.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.book}</h3>
      <p>🎬 ${p.movie}</p>
      <button>View Details</button>
    `;
    container.appendChild(card);
  });
}

displayPairings();
