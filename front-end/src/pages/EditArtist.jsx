import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ArtistForm from "../components/ArtistForm"
import Layout from "../components/Layout"

const EditArtist = () => {
  const [state, setState] = useState(null);

  const {id} = useParams();
  const getArtist = async () => {
    try {
      const {data} = await axios.get(`/artists/${id}`);
      setState(data)
    } catch(err) {
      console.error(err)
    }
  };

  useEffect(() => {if (id) getArtist()}, [id])

  return (
  <Layout>
      <>
        <h2>Edit</h2>
        <ArtistForm id={id} state={state} />
      </>
  </Layout>
  )
}

export default EditArtist
