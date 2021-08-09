import React from 'react'
import './index.css'

export default class Slider extends React.Component {
	render() {
		return (
			<div>
				<div><div class="range">
      <div class="sliderValue">
        <span>100</span>
      </div>
      <div class="field">
        <div class="value left">0</div>
        <input type="range" min="87.9" max="" value="100" steps=".20">
        <div class="value right">200</div>
      </div>
    </div></div>
				<div>
					<button onClick={{}}>Station Down</button>
					<button onClick={{}}>Station Up</button>
				</div>
			</div>
		)
	}
}
