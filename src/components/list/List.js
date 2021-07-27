import React from "react"
import Item from "../item/Item"

function List(props) {
  return (
    <ul>
      {props.state.users.map(user => {
        return (
          <>
            <Item key={props.key} name={user.name} picture={user.picture} phone={user.phone} email={user.email} />
          </>
        )
      })}
    </ul>
  )
}

export default List
