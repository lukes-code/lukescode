import React from 'react';
import * as contentful from 'contentful';
import { makeDate } from '../helpers';

class FullBlog extends React.Component {
    state = {
        posts: [],
        isDown: false,
        startX: 0,
        scrollLeft: '',
        fullBlogId: null,
        render: false
    }  
    
    client = contentful.createClient({
        space: 'gw32eqmndt2u',
        accessToken: 'T4Yj_-lQP6WTHD9TDIIgQm-LhfB8VPzQXIY6AG30ygs'
    })  
    
    componentDidMount() {
        //Add wait
        setTimeout(function() {
            this.setState({render: true})
        }.bind(this), 100)
        //Set blog posts in state
        this.fetchPosts().then(this.setPosts);
        //Get blogId
        this.setState({ fullId: this.props.location.pathname.match(/\/([^/]*)$/)[1] });
    }  
    
    fetchPosts = () => this.client.getEntries()  
        setPosts = response => {
            // alert(JSON.stringify(response.items));
            this.setState({
                posts: response.items[this.state.fullId]
                
        })
        // alert(this.state.posts.fields.title);
    }
      
    render() {

        let renderContainer = false //By default don't render anything
        if(this.state.render) {
            return (
                <div 
                    className="blog-post"
                >
                    <h4 id="card-title">{this.state.posts.fields.title}</h4>
                    <p id="card-content">{this.state.posts.fields.longContent}</p>
                    <div className="card-bottom">
                        <p id="card-date">{makeDate(this.state.posts.fields.date)}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div 
                    className="blog-post"
                >
                    <p>Loading</p>
                </div>
            );
        }
        
    }
}

export default FullBlog;