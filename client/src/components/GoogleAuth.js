import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '382675253258-bdbkckcujkgmutk8i05fupkohggojstd.apps.googleusercontent.com',
					scope: 'email',
					plugin_name: 'streamy',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance()
					this.onAuthChange(this.auth.isSignedIn.get())
					this.auth.isSignedIn.listen(this.onAuthChange)
				})
		})
	}

	onAuthChange = isSignedIn => {
		// This needs to be an arrow function so that the 'this' keyword does not change
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId())
		} else {
			this.props.signOut()
		}
	}

	onSignInClick = () => {
		this.auth.signIn()
	}

	onSignOutClick = () => {
		this.auth.signOut()
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			)
		} else {
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
					<i className="google icon" />
					Sign In With Google
				</button>
			)
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
