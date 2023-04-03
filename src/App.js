import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Component } from 'react'
import MovieDetails from './components/MovieDetails'
import DropdownComponent from './components/DropdownComponent'

class App extends Component {
  state = {
    movieTitle: 'Iron man',
  }

  changeMovieTitle = (newMovieTitle) => {
    this.setState({
      movieTitle: newMovieTitle,
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={6} className="text-light">
              <DropdownComponent
                movieTitle={this.state.movieTitle}
                changeMovieTitle={this.changeMovieTitle}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={6}>
              <MovieDetails movieTitle={this.state.movieTitle} />
              {/* MovieDetails riceve SEMPRE come prop il TITOLO
              del film selezionato nel dropdown */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
