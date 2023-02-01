import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import styles from './song.module.css'
import Songs from '../components/Songs'

const Artist = () => {
  const [state, setState] = useState({});

  const {id} = useParams();
  const navigate = useNavigate();

  const getArtist = async () => {
    try {
      const { data } = await axios.get(`/artists/${id}`);
      setState(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteArtist = async () => {
    try {
      await axios.delete(`/artists/${id}`);
      navigate("/songs")
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (id) getArtist();
  }, [id]);

  return (
    <Layout>
      <>
      <h2>Show</h2>
      <div className={styles.container}>
        <h2>{state.name}</h2>
        <h3>Age: {state.age}</h3>
        <p>Nationality: {state.nationality}</p>
        <p>Gender: {state.gender}</p>
        <p>Genre: {state.genre}</p>
      </div>
      <div className="btns">
          <Link to="/songs" className="btn">Back</Link>
          <Link to={`/artists/${id}/edit`} className="btn">Edit</Link>
          <button className="btn" onClick={deleteArtist}>Delete</button>
      </div>
      <h2>Songs by {state.name}</h2>
      <Songs artist={state.name} />
      </>
    </Layout>
  );
};

export default Artist;
