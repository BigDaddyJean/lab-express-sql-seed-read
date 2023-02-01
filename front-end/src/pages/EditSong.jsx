import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import SongForm from "../components/SongForm"

const EditSong = () => {
  const [state, setState] = useState(null);

  const {id} = useParams();
  const getSong = async () => {
    try {
      const {data} = await axios.get(`/songs/${id}`);
      setState(data)
    } catch(err) {
      console.error(err)
    }
  };

  useEffect(() => {if (id) getSong()}, [id])

  return (
  <Layout>
      <>
        <h2>Edit</h2>
        <SongForm id={id} state={state} />
      </>
  </Layout>
  )
}

export default EditSong
