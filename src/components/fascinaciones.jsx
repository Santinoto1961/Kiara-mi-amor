import React from 'react'
import '../styles/fascinaciones.css'

const Fascinaciones = () => {
  const fascinaciones = [
    {
      titulo: "Tu sonrisa",
      descripcion: "Esa sonrisa que te sale solo cuando me ves a mi, que se nota de lejos lo enamorada que estas."
    },
    {
      titulo: "Tu risa",
      descripcion: "Ese sonido que desprendes cuando estas muy feliz o cuando hago algo tan boludo me encanta demasiado."
    },
    {
      titulo: "Tu cara",
      descripcion: "Tenes una cara tan especial, que me dan ganas de llenarte de besos todo todo todo el dia."
    },
    {
      titulo: "Tu cuerpo",
      descripcion: "Esto creo que te lo sabes, tu cuerpo me fascina tanto que no hay dia que no piense en eso."
    },
    {
      titulo: "Tu humor",
      descripcion: "Nunca pense poder reirme tanto con una pareja, tenes una forma de ser muy graciosa y muy random que me encanta."
    },
    {
      titulo: "Tus regalos",
      descripcion: "Los regalos que me haces no son solo eso, regalos, son una parte de vos porque lo haces con tanto amor que me encanta."
    },
    {
      titulo: "Tu Forma de Ser",
      descripcion: "Sos unica, con una personalidad firme, la mezcla perfecta de tierna, mala, buena, calenturienta ...uy eso no."
    },
    {
      titulo: "Cómo Me Hacés Sentir",
      descripcion: "Me hacés sentir especial, amado, importante. Con vos soy la mejor versión de mí mismo. Y eso ya lo podes ver porque cada dia soy mejor gracias a vos."
    },
    {
      titulo: "TU FOTO EN MI BILLETERA",
      descripcion: "Rogarte para que me des esa foto fue lo mejor que hice en mi vida. "
    }
  ]

  return (
    <div className="fascinaciones-container">
      <h1 className="fascinaciones-titulo">Cosas Que Me Fascinan de Vos</h1>
      <p className="fascinaciones-subtitulo">Hay tantas razones por las que cada día me enamoro más de vos...</p>
      
      <div className="fascinaciones-grid">
        {fascinaciones.map((item, index) => (
          <div key={index} className="fascinacion-card">
            <div className="card-numero">{index + 1}</div>
            <h3 className="card-titulo">{item.titulo}</h3>
            <p className="card-descripcion">{item.descripcion}</p>
          </div>
        ))}
      </div>
      
      <div className="mensaje-final">
        <p>Y estas son solo algunas... cada día descubro algo nuevo que me enamora de vos ♥</p>
      </div>
    </div>
  )
}

export default Fascinaciones