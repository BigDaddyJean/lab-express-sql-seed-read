import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavSideBar.module.css";

const NavSideBar = () => {
  const [artists, setArtists] = useState(null);
  const getArtists = async () => {
    try {
      const { data } = await axios.get("/artists");
      setArtists(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);
  return (
    <div className="sidebar">
      <h3>Artists</h3>
      {!artists && <p>Loading...</p>}
      {artists?.length === 0 && <p>No artist was found</p>}
      <ul className={styles.list}>
        {artists?.map((itm) => (
          <Link to={`/artists/${itm.id}`} key={itm.id}>
            <li>{itm.name}</li>
          </Link>
        ))}
      </ul>
      <Link to="/artists/new" className="btn" style={{ marginTop: "1rem" }}>
        Add Artist
      </Link>
    </div>
  );
};

export default NavSideBar;
