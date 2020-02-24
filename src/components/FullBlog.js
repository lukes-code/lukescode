import React from 'react';
import * as contentful from 'contentful';
import { makeDate } from '../helpers';
import Nav from './Nav';
import Footer from './Footer';
import MiniMe from '../mini-me.jpg';
import { Spring } from 'react-spring/renderprops';
import Markdown from 'markdown-to-jsx';

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
            const image = this.state.posts.fields.image.fields.file.url;
            return (
                <React.Fragment>
                    <Nav />
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}

                    >
                        {props => (
                            <div style={props}>
                                <div 
                                    className="full-blog-post"
                                >
                                    <img src={image} alt="header-image" id="blog-image"/>
                                    <h2 id="card-title">{this.state.posts.fields.title}</h2>
                                    <Markdown
                                    >
                                        {this.state.posts.fields.longContent}
                                    </Markdown>
                                    <div className="card-bottom">
                                        <p id="post-publisher"><img src={MiniMe} alt="luke" id="mini-me"/></p>
                                        <p id="card-date">{makeDate(this.state.posts.fields.date)}</p>
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        )}
                    </Spring>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Nav />
                </React.Fragment>
            );
        }
        
    }
}

export default FullBlog;