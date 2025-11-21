import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Nuestros 6 Meses ♥</h1>
        <ul className="navbar-menu">
          <li onClick={() => navigate("/")} className="navbar-item">Home</li>
          <li onClick={() => navigate("/galeria")} className="navbar-item">Galería</li>
          <li onClick={() => navigate("/enamorado")} className="navbar-item">Por Qué Te Amo</li>
          <li onClick={() => navigate("/fascinaciones")} className="navbar-item">Me Fascinas</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar