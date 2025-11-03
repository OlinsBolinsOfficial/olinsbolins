fetch('https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR', {
  headers: {
    'Authorization': 'Bearer 0TnOYISbd1XYRBk9myaseg'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));
