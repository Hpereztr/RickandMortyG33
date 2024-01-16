import './styles/LocationCard.css'

const LocationCard = ({ location }) => {
  return (
    <article className='location'>
      <h2 className='location__title'>{location?.name}</h2>
      <ul className='location__list'>
        <li className='location__item'>
          <samp className='location__label'>Type:</samp>
          <span className='location__value'>{location?.type}</span></li>
        <li className='location__item'>
          <samp className='location__label'>Dimension:</samp>
          <span className='location__value'>{location?.dimension}</span></li>
        <li className='location__item'>
          <samp className='location__label'>Population</samp>
          <span className='location__value'>{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationCard