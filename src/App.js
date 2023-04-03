import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Component } from 'react'
import MovieDetails from './components/MovieDetails'

class App extends Component {
  state = {
    movieTitle: 'Iron man',
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={6} className="text-light">
              <h3>Choose your movie!</h3>
              <Form.Select
                value={this.state.movieTitle}
                onChange={(e) =>
                  this.setState({
                    movieTitle: e.target.value,
                  })
                }
                aria-label="movie chooser dropdown"
              >
                <option>Iron man</option>
                <option>Thor</option>
                <option>Black Widow</option>
                <option>Deadpool</option>
              </Form.Select>
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
