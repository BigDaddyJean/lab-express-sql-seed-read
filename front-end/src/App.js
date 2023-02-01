import { BrowserRouter, Route, Switch, Link, Routes } from 'react-router-dom';
import './App.css';
import EditSong from './pages/EditSong';
import Home from './pages/index.jsx';
import Artist from './pages/Artist';
import NewArtist from './pages/NewArtist';
import NewSong from './pages/NewSong';
import Song from './pages/Song.jsx';
import EditArtist from './pages/EditArtist';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewSong />} />
        <Route path="/songs" element={<Home />} />
        <Route path="/songs/:index" element={<Song />} />
        <Route path="/songs/:id/edit" element={<EditSong />} />

        <Route path="/artists/new" element={<NewArtist />} />
        <Route path="/artists/:id" element={<Artist />} />
        <Route path="/artists/:id/edit" element={<EditArtist />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
