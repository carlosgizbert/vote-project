import { useState } from "react"

export default function Home() {

  const [question, setQuestion] = useState("");
  const [cards, setCards] = useState({})

  return (
    <div className="vote">
      <div className="vote__body">

        <h1>Qual sua dúvida ou pergunta?</h1>
        <input className="vote__field" type="text" placeholder="Insira sua dúvida" />
        <button className="bt bt-principal">Salvar dúvida</button>

        <div className="vote__cards">
          <div className="card">
            <b>Como decisões de UX são tomadas ?</b>
            <div className="card__bts">
              <button className="bt-secondary">3 Ups</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
