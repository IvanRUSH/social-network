import { connect } from "react-redux"
import { addPostCreator, inputTextPostCreator } from "../redux/profilePageReducer"
import Posts from "./Posts/Posts"

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    textNewPost: state.dialogsPage.textPost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator())
    },

    inputTextNewPost: (text) => {
      dispatch(inputTextPostCreator(text))
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer