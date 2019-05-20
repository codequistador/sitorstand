/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().getMinutes(),
      standDuration: "15",
    }
    this.handleChange = this.handleChange.bind(this)
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
  handleChange(event) {
    this.setState({ standDuration: event.target.value })
  }
  render() {
    const sitOrStand =
      this.state.time > 60 - this.state.standDuration ? "stand" : "sit"
    const color =
      this.state.time > 60 - this.state.standDuration ? "#763626" : "#336B87"
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
        <div
          css={css`
            position: absolute;
            bottom: 20px;
            right: 30px;
            font-size: 18px;
          `}
        >
          Stand for
          <input
            css={css`
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              display: inline-block;
              background-color: transparent;
              color: white;
              border: none;
              border-bottom: 1px solid white;
              outline: 0;
              width: 30px;
              font-size: 24px;
              margin: 0 10px;
            `}
            type="text"
            name="lastname"
            value={this.state.standDuration}
            onChange={this.handleChange}
          />
          minutes per hour
        </div>
      </div>
    )
  }
}

export default Clock
