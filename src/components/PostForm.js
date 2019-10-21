import React, { Component } from 'react';
import ProfileImage from '../imgs/images.jpg';

export default class PostForm extends Component {
    state = {
        msg: ''
    }
    handleChange = (e) => {
        this.setState({
            msg: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTo(this.state);
        this.setState({
            msg: ''
        })
    }
     render() {
        return (
            <form onSubmit={this.handleSubmit} className="post_adder">
                <div className="d-flex flex-row">
                    <img className="profile-image" src={ProfileImage} alt=""/>
                    <input className="post-input" type="text" id="post" placeholder="What is in your mind" onChange={this.handleChange} value={this.state.msg}/>
                </div>
                <button className="btn btn-primary">Post</button>
            </form>
        )
    }
}
