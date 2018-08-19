export default function (evt) {
  evt.preventDefault()
  const {submitUpdates, closeForm} = this.props
  if (this.submissionIsValid()) {
    submitUpdates(this.payload())
  }
  closeForm()
}
