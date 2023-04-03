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
    // movie è una proprietà che si occuperà di memorizzare tutte
    // le info del film
  }

  // ora per cambiare il valore di movie devo fare una fetch!
  componentDidMount() {
    console.log('SONO COMPONENTDIDMOUNT()')
    // questo è un metodo che viene invocato UNA VOLTA SOLA per lifecycle
    // viene eseguito SEMPRE DOPO il primo render()
    this.getMovieDetails()
  }

  // dovremmo trovare il modo di lanciare nuovamente la nostra fetch
  // quando riceviamo un nuovo titolo tramite le props
  // MA dobbiamo stare attenti a NON rilanciare la fetch quando cambia lo stato

  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate viene lanciato in automatico dal class component
    // quando cambia lo state o cambiano le props
    console.log('SONO COMPONENTDIDUPDATE()')

    if (
      // che condizione metto qua per fare in modo che la getMovieDetails()
      // venga eseguita SOLO quando c'è stato un cambio nel dropdown
      // e NON quando, fisiologicamente, lo stato verrà settato dopo la fetch?
      prevProps.movieTitle !== this.props.movieTitle
    ) {
      console.log('cambiato il titolo!')
      this.getMovieDetails()
    }
  }

  getMovieDetails = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=24ad60e9&s=${this.props.movieTitle}`
      )
      if (response.ok) {
        let details = await response.json()
        // console.log('movie details', details.Search[0])
        // salvare details.Search[0] nello stato del componente
        // details.Search[0] è molto probabilmente il film che mi interessa
        // prelevare da questa fetch
        this.setState({
          movie: details.Search[0],
        })

        // il parametro (oggetto) che passiamo a setState va a FONDERSI (merge)
        // con this.state
      } else {
        // 400, 500
        console.log('error happened with the request')
      }
    } catch (error) {
      console.log('generic error happened', error)
    }
  }
  // render si RI-LANCIA automaticamente quando cambia lo state o le props

  render() {
    console.log('SONO RENDER()')
    // this.getMovieDetails()
    return (
      <div>
        {!this.state.movie && <div className="text-light">LOADING...</div>}
        {this.state.movie && (
          <Card>
            <Card.Img variant="top" src={this.state.movie.Poster} />
            <Card.Body>
              <Card.Title>{this.state.movie.Title}</Card.Title>
              <Card.Text>
                {this.state.movie.Year} | {this.state.movie.imdbID}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    )
  }
}

export default MovieDetails
