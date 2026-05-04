import { Component } from "react"
import { Card } from "react-bootstrap"

class MovieCard extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src="https://placecats.com/400/200" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
export default MovieCard
