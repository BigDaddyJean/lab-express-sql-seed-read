import axios from "axios";
import { useEffect, useState } from "react";
import styles from './index.module.css'
import Item from './Item.jsx'

const Songs = (props) => {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    try {
      let url = `/songs`;
      if (props.artist) url += `?by=${props.artist}`;

      const { data } = await axios.get(url);
      setSongs(data);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleFav = async (id) => {
    try {
      const updatedSong = [...songs]
      const item = songs.find(itm => itm.id === id);
      item.is_favorite = !item.is_favorite;
      setSongs(updatedSong)

      await axios.put(`/songs/${id}`, {is_favorite: item.is_favorite});
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSongs();
  }, [props.artist]);
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <span>Fav</span>
        <span>Song</span>
        <span>Artist</span>
        <span>Time</span>
      </div>

      {songs.map((itm) => (
        <Item key={itm.id} {...itm} onClick={() => toggleFav(itm.id)} />
      ))}
    </section>
  );
};

export default Songs;
