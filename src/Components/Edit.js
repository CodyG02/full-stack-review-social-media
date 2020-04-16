import React from 'react'

//TODO Write methods, connect to JSX

class Edit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: props.data.content
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <li className="post-container">
        <div>
          <input
            className="post-text"
            value={this.state.userInput}
            onChange={(e) => {
              this.handleChange(e)
            }}
          />
        </div>
        <div className="post-buttons">
          <button
            className="input-container-button-small"
            onClick={() => {
             this.props.toggleEdit()
            }}
          >
            Cancel
          </button>
          <button
            className="input-container-button-small"
            onClick={() => {
              this.props.handleEdit(this.props.data.post_id, this.state.userInput)
              this.props.toggleEdit()
            }}
          >
            Save
          </button>
        </div>
      </li>
    )
  }
}

export default Edit
