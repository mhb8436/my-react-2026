# create vite
```bash
npm create vite@latest movie-app
react
javascript
oxlint

# in terminal
ctrl + c
cd movie-app
npm i react-router-dom 
npm run dev

```

# 키 발급 받기 omdb 
https://www.omdbapi.com/apikey.aspx

# 키설정하기
```bash
.env
VITE_OMDB_KEY=<발급받으신키>

```

# 디렉토리 구조
movie-app
    src
        api
            movies.js
        components
            ErrorMessage.jsx
            Loading.jsx
            MovieCard.jsx
            MovieDetailView.jsx
            MovieGrid.jsx
            Navbar.jsx
            SearchBar.jsx
        context
           FavoritesContext.jsx 
        hooks
            useFavorites.js
            useMovieSearch.js
        pages
            Favorites.jsx
            Home.jsx
            MovieDetail.jsx
            NotFound.jsx
        App.jsx 
        main.jsx
        index.css