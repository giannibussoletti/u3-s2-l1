import { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Form } from "react-bootstrap"
import MovieCard from "./assets/MovieCard"

class App extends Component {
  state = {
    movie: "Iron Man",
    // con questo stato verra controllato la scelta del film
  }
  render() {
    return (
      <Container>
        <Row className="my-3">
          <Col className="text-center">
            <h2 className="fw-bold">Scegli il tuo film</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={6}>
            <Form.Select
              value={this.state.movie}
              onChange={(e) => {
                this.setState({
                  movie: e.target.value,
                })
              }}>
              <option>Iron Man</option>
              <option>Spider-man</option>
              <option>Doctor Strange</option>
              <option>The Avengers</option>
              <option>Hulk</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <MovieCard title={this.state.movie} />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default App
