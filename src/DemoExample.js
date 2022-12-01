import React from 'react'


class DemoExample extends React.Component{
	state={
		A:this.props.name,
		v:this.props.age
	}
	render(){
		return(
			<div>
				<p>{this.state.A}</p>
				<p>{this.state.v}</p>
			</div>
			)
	}
}

export default DemoExample