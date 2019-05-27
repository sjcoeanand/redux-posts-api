import React, { Component } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         posts : []
    //     }
    // }

    componentWillMount() {
    
        this.props.fetchPosts();
    
        //     // fetch('https://jsonplaceholder.typicode.com/posts')
    //     // .then(res => res.json())
    //     // .then(data => console.log(data))

    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         const result = res.data;
    //         console.log("result", result);
    //         this.setState({posts: result})
    //     })
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>All Posts</h1>
                {postItems}                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items 
})

export default connect(mapStateToProps, { fetchPosts })(Posts);