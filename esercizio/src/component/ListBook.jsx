import { Component } from "react"
import SingleBook from "./SingleBook"
import { Col, Container, Row, Form } from "react-bootstrap"
import FilterButton from "./FilterButton"
const genre = ["scifi", "romance", "history", "horror", "fantasy"]

class ListBook extends Component {
  state = {
    search: "",
    filter: "scifi",
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.target.innerText,
    })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.filter !== this.state.filter) {
      console.log(prevState.filter, this.state.filter)
      this.props.object
        .filter((book) => book.category.toLowerCase().includes(this.state.filter.toLowerCase()))
        .map((book, i) => {
          return (
            <Col key={book.asin + i} className="flex-grow-1">
              <SingleBook
                changeFilter={this.changeFilter}
                onClick={this.props.onClick}
                image={book.img}
                price={book.price}
                title={book.title}
                asin={book.asin}
                answer={this.props.staticAsin}
                genre={book.category}
              />
            </Col>
          )
        })
    }
  }
  render() {
    return (
      <Container fluid>
        <Row className="mb-4">
          <Form.Control
            type="text"
            placeholder="Cerca un libro"
            onChange={(e) => {
              this.setState({
                search: e.target.value,
              })
            }}
          />
        </Row>
        <Row xs={1} md={5} className="my-4">
          {genre.map((genre) => {
            return <FilterButton genre={genre} key={genre} changeFilter={this.changeFilter} />
          })}
        </Row>
        <Row xs={1} sm={2} md={3} className="justify-content-between g-3">
          {this.props.object
            .filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .filter((book) => book.category.toLowerCase() === this.state.filter.toLowerCase())
            .map((book, i) => {
              return (
                <Col key={book.asin + i} className="flex-grow-1">
                  <SingleBook
                    changeFilter={this.changeFilter}
                    onClick={this.props.onClick}
                    image={book.img}
                    price={book.price}
                    title={book.title}
                    asin={book.asin}
                    answer={this.props.staticAsin}
                    genre={book.category}
                  />
                </Col>
              )
            })}
        </Row>
      </Container>
    )
  }
}

export default ListBook
