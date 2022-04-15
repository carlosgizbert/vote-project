import { useEffect, useState } from "react"
import Card from "../components/template/card";

export default function Home() {

  interface ICard {
    id?: number,
    title?: string,
    ups?: number
  }

  const questionMock = {
    title: "",
    ups: 0
  }

  const cardsMock = [
    {
      id: 25,
      title: "Como decisões de UX são tomadas?",
      ups: 3
    },
    {
      id: 0o4,
      title: "Por que UX precisam pesquisar ?",
      ups: 1
    },
    {
      id: 0e2,
      title: "O que são personas?",
      ups: 4
    }
  ]


  const [question, setQuestion] = useState<ICard>(questionMock);
  const [cardsDesc, setCardsDesc] = useState<ICard[]>(cardsMock)

  const reorderCards = () => {
    let newArr = [...cardsDesc]
    newArr.sort(function (a, b) {
      return b.ups - a.ups;
    });
    setCardsDesc(newArr)
  }

  const addUp = (cardId: number, cardUps: number) => {

    let newArr = [...cardsDesc]
    let searchedCardIndex = cardsDesc.findIndex(card => card.id == cardId);
    console.log(searchedCardIndex)
    newArr[searchedCardIndex].ups = cardUps + 1
    setCardsDesc(newArr)
    console.log(cardsDesc)
    reorderCards()
  }

  useEffect(() => {
    reorderCards()
  }, [cardsDesc])

  return (
    <div className="vote">
      <div className="vote__body">

        <h1>Qual será nossa próxima talk?</h1>

        <input
          className="vote__field"
          type="text"
          placeholder="Insira sua sugestão"
          value={question.title}
          onChange={(e: any) => setQuestion({ title: e.target.value })}
        />
        <button className="bt bt-principal" onClick={() => console.log(question)}>Salvar sugestão</button>

        <div className="vote__cards">
          {cardsDesc ? cardsDesc.map((card) => {
            return (
              <div className="card" key={card.id}>
                <b>{card.title}</b>
                <div className="card__bts">
                  <button className="bt-secondary" onClick={() => addUp(card.id, card.ups)}>{card.ups} Ups</button>
                </div>
              </div>
            )
          }) : null}
        </div>

      </div>
    </div>
  )
}
