import { Form } from "react-bootstrap"

const MovieSelect = (props) => {
  return (
    <Form.Select value={props.value} onChange={props.onChange}>
      <option>Iron Man</option>
      <option>Spider-man</option>
      <option>Doctor Strange</option>
      <option>The Avengers</option>
      <option>Hulk</option>
      <option>Black Widow</option>
    </Form.Select>
  )
}
export default MovieSelect
