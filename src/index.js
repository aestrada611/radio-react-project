import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Panel from './draggable-panel'
import { Provider } from 'react-redux'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import store from './store/store'

const headerStyle = {
	backgroundColor: '#212121',
	width: '95%',
	position: 'absolute',
	height: 'auto',
	color: 'orangered',
	borderBottom: '1px solid white'
}

function Header(props) {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div
				style={headerStyle}
			>
				<h1 style={{ textAlign: 'center', fontWeight: '100' }}>
					<span style={{ fontWeight: '700' }}>AVID</span> FM Radio
				</h1>
			</div>
		</div>
	)
}

const footerStyle = {
	backgroundColor: 'lightgrey',
	textAlign: 'center',
	width: '100%',
	bottom: 0,
	left: 0,
	margin: '0px',
	padding: '1px',
	color: 'orangered',
}

function Footer(props) {
	return (
		<div
			style={footerStyle}
		>
			<p>
				<strong>Thank You For The Opportunity</strong>
			</p>
			<div>
				<a href='https://github.com/aestrada611'>
					<GitHubIcon fontSize='large' color='action' />
				</a>{' '}
				<a href='https://www.linkedin.com/in/alejandroestrada617/'>
					<LinkedInIcon fontSize='large' color='action' />
				</a>
			</div>
		</div>
	)
}

const panelStyle = {display: 'flex',
flexDirection: 'row',
justifyContent: 'space-evenly',
alignContent: 'center',
minHeight: '83vh',
width: '100%',
backgroundColor: '#212121',
paddingBottom: '5rem'}
class HomeView extends React.Component {

	render() {
		return (
			<div style={{ minHeight: '100vh', position: 'relative', display: 'flex',flexDirection: 'column', justifyContent: 'space-between' }}>
				<Header />
				<div
					style={panelStyle}
				>
					<Panel />
				</div>

				<Footer />
			</div>
		)
	}
}

////////////////////////

ReactDOM.render(
	<Provider store={store}>
		<HomeView />
	</Provider>,
	document.getElementById('root')
)
