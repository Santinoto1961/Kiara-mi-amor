import React, { useState } from 'react'
import '../styles/galeria.css'

const Galeria = () => {
  // Reemplaza estas URLs con las fotos reales
  const fotos = [
    { id: 1, url: '/fotos/foto1.jpg', descripcion: 'Una salida hermosa como vos' },
    { id: 2, url: '/fotos/foto2.jpg', descripcion: 'Sos tan hermosa' },
    { id: 3, url: '/fotos/foto3.jpg', descripcion: 'Una sonrisa que brilla' },
    { id: 4, url: '/fotos/foto4.jpg', descripcion: 'A vos no te gustaban los vampiros?' },
    { id: 5, url: '/fotos/foto5.jpg', descripcion: 'Te amo de aca hasta la luna' },
    { id: 6, url: '/fotos/foto6.jpg', descripcion: 'Sos lo mas precioso que tengo en a vida' },
  ]

  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  return (
    <div className="galeria-container">
      <h1 className="galeria-titulo">Nuestros Momentos ♥</h1>
      <p className="galeria-subtitulo">6 meses de memorias increíbles</p>
      
      <div className="galeria-grid">
        {fotos.map((foto) => (
          <div 
            key={foto.id} 
            className="galeria-item"
            onClick={() => setFotoSeleccionada(foto)}
          >
            <img src={foto.url} alt={foto.descripcion} />
            <div className="galeria-overlay">
              <p>{foto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {fotoSeleccionada && (
        <div className="modal" onClick={() => setFotoSeleccionada(null)}>
          <div className="modal-contenido">
            <span className="modal-cerrar">&times;</span>
            <img src={fotoSeleccionada.url} alt={fotoSeleccionada.descripcion} />
            <p>{fotoSeleccionada.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galeria