import { useState } from 'react'

function MyMouseBroker() {
  const [count, setCount] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
    
    if (count + 1 === 5) {setShowPopup(true)} 
    if (count + 1 >10 ) {setShowPopup (false)}
  }

  return (
    <>
      <div>
        <a href="https://media.tenor.com/MlHKXX_Uh40AAAAi/klick-click.gif" target="_blank">
          <img src="https://media.tenor.com/MlHKXX_Uh40AAAAi/klick-click.gif" className="logo" alt="click" />
        </a>
      </div>
      <h1 className="title">Que tal quebrar seu mouse?</h1>
      <h2>Segundo a internet, o clique do mouse pode ser danificado a partir de 10 milhões de cliques, por que não tenta?</h2>

      <h3 className="box">{count}</h3>

      <div className="card">
        <button onClick={handleClick}>CLIQUE AQUI</button>
      </div>

      {showPopup && ( <div className="popup">
          <h4>Você quer mesmo quebrar? </h4>
          <img src="https://w7.pngwing.com/pngs/975/73/png-transparent-emoticon-smiley-embarrassment-computer-icons-smiley-miscellaneous-face-smiley.png" className="logo" alt="nossa..."></img>
        </div>
      )}
    </>
  )
}

export default MyMouseBroker
