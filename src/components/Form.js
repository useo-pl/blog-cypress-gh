import React from 'react'
import styles from '../../styles/Home.module.css'

const sendForm = () =>
  fetch('/api/ping', {
    method: 'POST',
  })

const Form = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [data, setData] = React.useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    setData(false)
    setLoading(true)
    try {
      const response = await sendForm()
      /* const result = */ await response.json()
      setData(true)
      setLoading(false)
      setError(null)
    } catch (error) {
      setData(false)
      setLoading(false)
      setError(error)
    }
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>
        First Name
        <input type="text" name="first_name" />
      </label>
      <label>
        Last Name
        <input type="text" name="last_name" />
      </label>
      <button type="submit">Submit</button>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error :(</h2>}
      {data && (
        <div data-testid="error_message">
          <h2>Success!</h2>
        </div>
      )}
    </form>
  )
}

export default Form
