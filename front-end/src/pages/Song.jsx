import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Star from "../components/Songs/Star";
import styles from './song.module.css'

const Song = () => {
  const [state, setState] = useState({});

  const {index} = useParams();
  const navigate = useNavigate();

  const getSong = async () => {
    try {
      const { data } = await axios.get(`/songs/${index}`);
      setState(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSong = async () => {
    try {
      await axios.delete(`/songs/${index}`);
      navigate("/songs")
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (index) getSong();
  }, [index]);

  return (
    <Layout>
      <>
      <h2>Show</h2>
      <div className={styles.container}>
        <h2>
          <Star fav={state.is_favorite} onClick={() => {}} /> {state.name}
        </h2>
        <h3>Album: {state.album}</h3>
        <p>Artist: {state.artist}</p>
        <p>Duration: {state.time}</p>
      </div>
      <div className="btns">
          <Link to="/songs" className="btn">Back</Link>
          <Link to={`/songs/${index}/edit`} className="btn">Edit</Link>
          <button className="btn" onClick={deleteSong}>Delete</button>
      </div>
      </>
    </Layout>
  );
};

export default Song;
