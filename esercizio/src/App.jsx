import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import ListBook from "./component/ListBook"
import MyNav from "./component/MyNav"
import WindowAlert from "./component/WindowAlert"
import MyFooter from "./component/MyFooter"

import ScifiBooks from "./data/scifi.json"
import RomanceBooks from "./data/romance.json"
import HistoryBooks from "./data/history.json"
import HorrorBooks from "./data/horror.json"
import FantasyBooks from "./data/fantasy.json"
import CommentArea from "./component/CommentArea"
import { Component } from "react"

const AllTheBooks = ScifiBooks.concat(RomanceBooks, HistoryBooks, HorrorBooks, FantasyBooks)

class App extends Component {
  state = {
    asin: "",
  }

  getBookClicked = (asin) => {
    this.setState({
      asin,
    })
  }

  render() {
    return (
      <>
        <header>
          <MyNav />
          <div className="d-flex justify-content-center">
            <WindowAlert />
          </div>
          <Container fluid className="p-0">
            <img className="mb-5 w-100" src="../public/hero.jpg" />
          </Container>
        </header>
        <main className="position-relative">
          <Container fluid>
            <Row>
              <Col>
                <ListBook
                  object={AllTheBooks}
                  onClick={this.getBookClicked}
                  staticAsin={this.state.asin}
                />
              </Col>
              <Col xs={3}>
                <CommentArea asin={this.state.asin} />
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="mt-4">
          <MyFooter />
        </footer>
      </>
    )
  }
}

export default App
