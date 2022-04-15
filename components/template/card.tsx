interface ICardProps {
  id?: number,
  title: string,
  ups: number
}

const Card = (props: ICardProps) => {

  return (
    <div className="card">
      <b>{props.title}</b>
      <div className="card__bts">
        <button className="bt-secondary">{props.ups} Ups</button>
      </div>
    </div>
  )
}

export default Card