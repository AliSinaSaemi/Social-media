import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostForm from './PostForm';
import postData from '../components/posts.json';
import Posts from './Posts';
import moment from 'moment';

export default class Home extends Component {
    state = {
        posts : postData
    }
    
    addTo = (post) => {
        post.id = Math.random()
        let date = moment().format('MMMM Do YYYY, h:mm:ss a')
        post.date = date
        let posts = [...this.state.posts, post]
        this.setState({
            posts
        })  
        alert('New post added');
    }
    render() {
        return (

            <div className="home">
                <h4 className="page_name">Home <i className='fas fa-magic'></i></h4>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <PostForm addTo={this.addTo}/>
                        </Col>
                        <hr/>
                        <Col xs={12} className="posts-section">
                            <Posts posts={this.state.posts}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}