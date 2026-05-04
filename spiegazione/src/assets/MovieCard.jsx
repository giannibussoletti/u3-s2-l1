import { Component } from "react"
import { Card, Placeholder, Alert } from "react-bootstrap"

class MovieCard extends Component {
  state = {
    movieDetails: {},
    isLoading: true,
    isError: false,
  }

  getMovieDetails = () => {
    fetch("http://www.omdbapi.com/?&apikey=56edbee&s=" + this.props.title)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          this.setState({
            isError: true,
          })
          throw new Error("Response not OK", response.status)
        }
      })
      .then((movieDetails) => {
        this.setState({
          movieDetails: movieDetails.Search[0],
          isLoading: false,
        })
      })
      .catch((erro) => console.log("errore di recupero film", erro))
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  // il componente qui sotto server per intercettare le fasi di AGGIORNAMENTO del componente
  componentDidUpdate(prevProps /*,prevState*/) {
    //viene lanciato dopo immadiatamente DOPO una fade di aggiornamento
    // avviene immediatament dopo una cambio di STATE o un cambio di PROPS
    // e viene automaticamente rieseguito il componentDidUpdate
    // componentDidUpdate a differenza di componentDidMount e render è l'unico componente
    // che riceve due oggetti:
    // 1) l'oggetto delle props PRECENDENTI l'update
    // 2) l'oggetto dello STATE PRECENDENTE l'update

    // componentDidUpdate viene rieseguito ad ogni aggiornamento
    // ad ogni cambio di PROPS ed ad ogni di STATE

    // con i due paramentri noi possiamo DISTINGUERE se siamo entrati in questa fase
    // di "aggiornamento" se è cambiato lo state o le props

    // cerchiamo di isolare l'esecuzione this.getMovieDetails() solo quando cambiano le props
    if (prevProps.title !== this.props.title) {
      // se entriamo qui è perché abbiamo cambiato il titolo nel menu a tendina
      this.getMovieDetails()
    }
  }

  render() {
    return this.state.isError ? (
      <Alert variant="danger">Errore nel recupero film</Alert>
    ) : this.state.isLoading ? (
      <Card>
        <Card.Img variant="top" src="placeholder.png" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={6} />
          </Placeholder>
        </Card.Body>
      </Card>
    ) : (
      <Card>
        <Card.Img variant="top" src={this.state.movieDetails.Poster} />
        <Card.Body>
          <Card.Title>{this.state.movieDetails.Title}</Card.Title>
          <Card.Text>{this.state.movieDetails.Year}</Card.Text>
          <Card.Text>{this.state.movieDetails.imdbID}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
export default MovieCard
