export default function (evt) {
  const {name, value} = evt.target
  this.setState({[name]: value})
}
