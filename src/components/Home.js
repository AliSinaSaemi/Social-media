import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostForm from './PostForm';
import Posts from './Posts';

export default class Home extends Component {
    state = {
        posts : [
            { msg: 'Something cool happend.', id: 1 },
            { msg: 'Are you guy ok?', id: 2 }
        ]
    }
    
    addTo = (post) => {
        var oldAmount = this.state.posts.length;
        post.id = Math.random();
        let posts = [...this.state.posts, post];
        this.setState({
            posts: posts
        })
        var newAmount = posts.length;
        var totalAmount = newAmount - oldAmount;
        console.log(totalAmount);
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
                        <Col xs={12}>
                            <Posts posts={this.state.posts}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}