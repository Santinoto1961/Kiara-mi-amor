import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="corazon-animado">♥</div>
        
        <h1 className="home-titulo">6 Meses Juntos</h1>
        <p className="home-fecha">Noviembre 2025</p>
        
        <div className="home-mensaje">
          <p className="mensaje-principal">
            Hola mi amor ♥
          </p>
          
          <p>
            Hice esa pagina para mostrarte lo enamorado y felliz que estoy por vos y por los 6 meses de relacion que llevamos
          </p>
          
          <p>
            Cada parte de esta pagina es un pedacito de lo que siento por vos. 
            Acá vas a encontrar mis fotos favoritas, las razones por las que me 
            enamoré de vos, y todas esas cosas que me fascinan de tu forma de ser.
          </p>
          
          <p>
            Sé que puede parecer simple, pero cada palabra, cada imagen, cada detalle 
            está hecho con todo mi amor. Porque vos te merecés esto y mucho más.
          </p>
          
          <p className="mensaje-especial">
            Gracias por estos 6 meses increíbles. Gracias por elegirme cada día. 
          </p>
          
          <p className="mensaje-final">
            Te amo con todo mi corazón ♥
          </p>
        </div>
      </div>
      
      <div className="decoracion-corazones">
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </div>
    </div>
  )
}

export default Home