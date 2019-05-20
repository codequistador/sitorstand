/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().getMinutes(),
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 30000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  tick() {
    this.setState({
      time: new Date().getMinutes(),
    })
  }
  render() {
    const sitOrStand = this.state.time > 44 ? "stand" : "sit"
    const color = this.state.time > 44 ? "#763626" : "#336B87"
    return (
      <div
        css={css`
          color: white;
          background-color: ${color};
          width: 100vw;
          height: 100vh;
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 500%;
        `}
      >
        {sitOrStand}
      </div>
    )
  }
}

export default Clock
