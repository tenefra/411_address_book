import React, { useState } from "react"

function Item(props) {
  const [isHidden, setHide] = useState(true)

  return (
    <li>
      <h5>
        {props.name.first} {props.name.last}
      </h5>
      <img src={props.picture.thumbnail} alt={props.name.last}></img>

      {isHidden ? (
        <div>
          <button
            onClick={() => {
              isHidden ? setHide(false) : setHide(true)
            }}
          >
            show details
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              !isHidden ? setHide(true) : setHide(false)
            }}
          >
            hide details
          </button>
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </div>
      )}
    </li>
  )
}

export default Item
