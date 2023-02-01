import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './SongForm.module.css';

const SongForm = (props) => {
  const initState = {name: "", album: "", artist: "", time: "",  is_favorite: false };
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
      let url = `/songs`;
      if (props.id) url += `/${props.id}`;
      const method = props.id ? "put": "post";

      await axios[method](url, state);
      setStatus("success")
      setState({...initState})
    } catch(err) {
      console.error(err)
      setStatus("error")
    }
  }

  const renderMsg = () => {
    if (props.id) {
      if (status === "success") return <small className="success">Successfully updated the song</small>
    } else {
      if (status === "success") return <small className="success">Successfully created a new song</small>
    }

    if (status === "error") return <small className="error">Something went wrong</small>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Song Name:</label>
      <input type="text" id="name" value={state.name} onChange={e => setValue("name", e.target.value)} required/>


      <label htmlFor="artist">Artist:</label>
      <input type="text" id="artist" value={state.artist} onChange={e => setValue("artist", e.target.value)} required/>


      <label htmlFor="album">Album:</label>
      <input type="text" id="album" value={state.album} onChange={e => setValue("album", e.target.value)} />


      <label htmlFor="time">Time:</label>
      <input type="text" id="time" value={state.time} onChange={e => setValue("time", e.target.value)} />


      <label htmlFor="fav">Favorite:</label>
      <input type="checkbox" id="fav" value={state.is_favorite} checked={state.is_favorite} onChange={e => setValue("is_favorite", e.target.checked)}/>

      <button disabled={status === "submitting"} className="btn">
        {status === "submitting" ? "submitting": "submit"}
      </button>
      {renderMsg()}
    </form>
  )
}

export default SongForm
