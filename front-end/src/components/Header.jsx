import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/songs"><h1>Tunner</h1></Link>
    </header>
  )
}

export default Header
