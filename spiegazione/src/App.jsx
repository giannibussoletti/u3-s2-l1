import { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import MovieCard from "./assets/MovieCard"
import MovieSelect from "./assets/MovieSelect"

class App extends Component {
  state = {
    movie: "Iron Man",
    // con questo stato verra controllato la scelta del film
  }

  changeAppState = (e) => {
    console.log(e)
    this.setState({
      movie: e.target.value,
    })
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
            <MovieSelect value={this.state.movie} onChange={this.changeAppState} />
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
