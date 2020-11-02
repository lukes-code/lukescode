import React from 'react';
import * as contentful from 'contentful';
import { makeDate } from '../helpers';
import Nav from './Nav';
import Footer from './Footer';
import MiniMe from '../mini-me.jpg';
import { Spring } from 'react-spring/renderprops';
import Markdown from 'markdown-to-jsx';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

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
        //Set blog posts in state
        this.fetchPosts().then(this.setPosts);
        //Add wait
        setTimeout(function(async) {
            const posts = this.state.posts;
            if(posts.length !== 0){
                this.setState({render: true});
            } else {
                this.fetchPosts().then(this.setPosts);
            }
        }.bind(this), 100)
        //Get blogId
        this.setState({ fullId: this.props.location.pathname.match(/\/([^/]*)$/)[1] });
    }  
    
    fetchPosts = () => this.client.getEntries()  
        setPosts = response => {
            console.log('setting posts');
            this.setState({
                posts: response.items[this.state.fullId]
                
        })
        const posts = this.state.posts;
        if(posts.length !== 0){
            this.setState({render: true});
        }
    }
      
    render() {
        const image = ((this.state.render) ? this.state.posts.fields.image.fields.file.url : false);
            return (
                <React.Fragment>
                    <Nav />
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}

                    >
                        {props => (
                            <main style={props}>
                                <section 
                                    className="full-blog-post"
                                >
                                    {this.state.render ? (
                                        <img src={image} alt="header" id="blog-image"/>
                                    ) : (
                                        <Skeleton variant="rect" height={118} />
                                    )
                                    }
                                    {this.state.render ? (
                                        <React.Fragment>
                                            <article>
                                                <h2 id="card-title">{this.state.posts.fields.title}</h2>
                                                <Markdown
                                                >
                                                    {this.state.posts.fields.longContent}
                                                </Markdown>
                                            </article>
                                            <aside className="card-bottom">
                                                <figure id="post-publisher">
                                                    <img src={MiniMe} alt="luke" id="mini-me"/>
                                                </figure>
                                                <p id="card-date">{makeDate(this.state.posts.fields.date)}</p>
                                            </aside>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <Typography variant="h3">
                                                <Skeleton animation="wave" />
                                            </Typography>
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                        </React.Fragment>
                                    )
                                    }
                                </section>
                            </main>
                        )}
                    </Spring>
                    <Footer />
                </React.Fragment>
            );
        
    }
}

export default FullBlog;