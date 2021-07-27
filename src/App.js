import { Component } from "react"
import axios from "axios"

import List from "./components/list/List"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=25").then(res => {
      const users = res.data.results
      console.log(users)
      this.setState({ users })
    })
  }

 

  render() {
    return (
      <div>
        <List state={this.state} />
      </div>
    )
  }
}

export default App
