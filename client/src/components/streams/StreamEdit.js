import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	onSubmit = formValues => {
		this.props.editStream(this.props.match.params.id, formValues)
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<h3>Edit A Stream</h3>
				<StreamForm
					onSubmit={this.onSubmit}
					initialValues={_.pick(this.props.stream, 'title', 'description')}
				/>
				{/*
					When we pass an initialValues object as props to a ReduxForm Component 
					like ReduxForm(StreamForm) it takes those values and assigns them as 
					initial values based on the key from the object and name of <Field /> Component
				*/}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const stream = state.streams[ownProps.match.params.id]
	return { stream }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
