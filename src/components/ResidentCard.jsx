import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import './styles/ResidentCard.css'


const ResidentCard = ({ url }) => {

  const [ resident, getResidet ] = useFetch(url)

  useEffect(() => {
    getResidet()
  },[])


  return (
   <article className="resident">
    <header className="resident__header">
      <img className="resident__img" src={resident?.image} alt="" />
      <div className="resident__status">
        <div className={`resident__status__circle ${resident?.status}`}></div>
        <span className="resident__status__value">{resident?.status}</span>
      </div>
    </header>
    <section className="resident__body">
      <h3 className="resident__name">{resident?.name}</h3>
      <hr className="resident__hr" />
        <ul className="resident__list">
          <li className="resident_item">
            <span className="resident_label">Specie</span>
            <span className="resident_value">{resident?.species}</span>
            </li>
          <li className="resident_item">
            <span className="resident_label">Origin</span>
            <span className="resident_value">{resident?.origin.name}</span>
            </li>
          <li className="resident_item">
            <span className="resident_label">Eppisodes where appear</span>
            <span className="resident_value">{resident?.episode.length}</span>
            </li>
        </ul>
    </section>
   </article>
  )
}

export default ResidentCard