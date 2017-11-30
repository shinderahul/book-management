import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = { titleInput: '' }
	}

	handleButtonClick = (event) => {
		event.preventDefault();

		this.props.addBookAction(
			this.state.titleInput
		)

		this.setState({ titleInput: ''});
	}

	handleTitleChange = (event) => {
		this.setState({ titleInput: event.target.value});
	}

  render() {
    return (
			<div className="Form">
				<input
					type="text"
					placeholder="Book Title"
					value={this.state.titleInput}
					onChange={this.handleTitleChange}
				/>
				<button onClick={this.handleButtonClick}>
					Add Book
				</button>
			</div>
		);
  }
}

Form.propTypes = {
	addBookAction: PropTypes.func.isRequired
};

export default Form;
