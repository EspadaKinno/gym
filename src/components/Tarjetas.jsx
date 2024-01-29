import React from "react"
import "./Tarjetas.css"

const Tarjetas = ({title, text, number}) => {
  return (
    <div className="container-card">
        <img src={`img/class-${number}.jpg`} alt="imagen-clase" className="imagen-clase"/>
        <div className="container-card--text">
            <div className="container-card--text---title">
                <img src={`img/icon-${number}.png`} alt="" />
                <h2>{title}</h2>
            </div>
            <div className="container-card--text---p">
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Tarjetas



