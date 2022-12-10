import React from 'react'

function CardImage({ data, noBtn }) {
  return (
    <div className="card__container">
      {data.map((item, index) => (
        <div className="cardimage" key={index}>
          <div className="image__content">
            <div className="card__title">{item.title}</div>
            <div className="card__title-sub">{item.location}</div>
            {!noBtn && <div className="btn btn__primary">
              <a href={item.path} className="link">Check out</a></div>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardImage