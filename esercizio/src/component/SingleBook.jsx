import { Component } from "react"
import { Button, Card } from "react-bootstrap"

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          className="h-100"
          style={{
            border: this.props.answer === this.props.asin ? "2px solid red" : "1px solid grey",
          }}>
          <Card.Img
            variant="top"
            src={this.props.image}
            onClick={() => {
              this.props.onClick(this.props.asin)
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="flex-grow-1">{this.props.title}</Card.Title>
            <Card.Subtitle>{this.props.genre}</Card.Subtitle>
            <Card.Text>{this.props.price}</Card.Text>
            <Card.Text>{this.props.asin}</Card.Text>
            <Button variant="primary">Comprami</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
