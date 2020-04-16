import React from 'react'
import Post from './Post'
import Edit from './Edit'

//TODO Display post or edit, build out methods

class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    return <>
    {this.state.isEditing ? (<Edit handleEdit={this.props.handleEdit} toggleEdit={this.toggleEdit} data={this.props.data} />
    ) : (
    <Post handleDelete={this.props.handleDelete} toggleEdit={this.toggleEdit} data={this.props.data} />)}
    </>
  }
}

export default PostContainer
