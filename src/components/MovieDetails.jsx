import { Component } from 'react'
import Card from 'react-bootstrap/Card'

// MovieDetails riceverà il TITOLO del film (il valore movieTitle da App)
// con questo titolo, MovieDetails farà una fetch a omdbAPI e recupererà
// i dettagli del film selezionato
// poi li salveremo nello stato di MovieDetails e li mostreremo nella Card

class MovieDetails extends Component {
  state = {
    // qui dentro vogliamo salvarci i dettagli del film recuperato da
    // omdbAPI
    movie: null, // preferisco inizializzarlo a null invece che {}
    // perchè {} è un valore truthy e se nel render utilizzo &&, ? :
    // ecco che ho delle difficoltà perchè {} tornerà sempre true
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src="https://placekitten.com/300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default MovieDetails
