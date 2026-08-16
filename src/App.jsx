import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import MovieGrid from './components/MovieGrid.jsx'
import { heroSlides, movies } from './data/movies.js'

import './components/Nav.css'
import './components/Hero.css'
import './components/MovieGrid.css'

export default function App() {
  return (
    <>
      <Nav />
      <Hero slides={heroSlides} />
      <MovieGrid movies={movies} />
    </>
  )
}
