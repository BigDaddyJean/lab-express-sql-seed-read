import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './SongForm.module.css';

const ArtistForm = (props) => {
  const initState = {name: "", nationality: "", age: 0, gender: "male",  genre: "" };
  const [state, setState] = useState({...initState})
  const [status, setStatus] = useState("");

  const setValue = (label, value) => setState({...state, [label]: value});

  useEffect(() => {
    if (props.state) setState(props.state);
  }, [props.state])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting")

    try {
      let url = `/artists`;
      if (props.id) url += `/${props.id}`;
      const method = props.id ? "put": "post";

      await axios[method](url, state);
      setStatus("success")
      if (!props.id)
        setState({...initState})
    } catch(err) {
      console.error(err)
      setStatus("error")
    }
  }

  const renderMsg = () => {
    if (props.id) {
      if (status === "success") return <small className="success">Successfully updated the artist</small>
    } else {
      if (status === "success") return <small className="success">Successfully created a new artist</small>
    }

    if (status === "error") return <small className="error">Something went wrong</small>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Artist Name:</label>
      <input type="text" id="name" value={state.name} onChange={e => setValue("name", e.target.value)} required/>


      <label htmlFor="age">Age:</label>
      <input type="number" id="age" value={state.age} onChange={e => setValue("age", e.target.value)} required/>


      <label htmlFor="nationality">Nationality:</label>
      <input type="text" id="nationality" value={state.nationality} onChange={e => setValue("nationality", e.target.value)} />


      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={state.gender} onChange={e => setValue("gender", e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">Rather Not Say</option>
      </select>

      <label htmlFor="genre">Genre:</label>
      <input type="text" id="genre" value={state.genre} onChange={e => setValue("genre", e.target.value)} />

      <button disabled={status === "submitting"} className="btn">
        {status === "submitting" ? "submitting": "submit"}
      </button>
      {renderMsg()}
    </form>
  )
}

export default ArtistForm
