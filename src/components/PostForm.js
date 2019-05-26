import React, { Component } from 'react';
import axios from 'axios';

export default class PostForm extends Component {
    constructor(){
        super();
        this.state= {
            title: '',
            body: ''
        }
    }

    onChangeHandler= (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit= (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', {post})
        .then(res => {
            const result = res.data;
            console.log("form values", result.post)
        })
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br/>
                        <input name="title" value={this.state.title} onChange={this.onChangeHandler} type="text" />
                    </div>
                    <div><br/>
                        <label>Body: </label>
                        <br/>
                        <input name="body" type="text" value={this.state.body} onChange={this.onChangeHandler} />
                    </div>
                    <div>
                        <br/>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
