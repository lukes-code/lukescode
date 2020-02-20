import React from 'react';
import * as contentful from 'contentful';
import Arrow from '../arrow.svg';
import BlogItem from '../components/BlogItem';

class Blog extends React.Component {
    state = {
        posts: [],
        isDown: false,
        startX: 0,
        scrollLeft: '',
    }  
    
    client = contentful.createClient({
        space: 'gw32eqmndt2u',
        accessToken: 'T4Yj_-lQP6WTHD9TDIIgQm-LhfB8VPzQXIY6AG30ygs'
    })  
    
    componentDidMount() {
        //Set blog posts in state
        this.fetchPosts().then(this.setPosts);
    }  
    
    fetchPosts = () => this.client.getEntries()  
        setPosts = response => {
            this.setState({
                posts: response.items
        })
    }

    handleMouseDown = (e) => {
        this.setState({ isDown: true });
        //Add active class
        const slider = document.querySelector('.blog-posts');
        slider.classList.add('active');
        //StartX
        let startX = e.pageX - slider.offsetLeft;
        let scrollLeft = slider.scrollLeft;
        this.setState({ startX: startX });
        this.setState({ scrollLeft: scrollLeft });
      }

    handleMouseLeave = () => {
        this.setState({ isDown: false });
        //Remove active class
        const slider = document.querySelector('.blog-posts');
        slider.classList.remove('active');
    }

    handleMouseUp = () => {
        this.setState({ isDown: false });
        //Remove active class
        const slider = document.querySelector('.blog-posts');
        slider.classList.remove('active');
    }

    handleMouseMove = (e) => {
        if(this.state.isDown === false) return;
        e.preventDefault();
        const slider = document.querySelector('.blog-posts');
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - this.state.startX); //scroll-fast
        // console.log(walk);
        slider.scrollLeft = this.state.scrollLeft - walk;
    }
      
      render() {

        let posts = this.state.posts.map((post, i) => (
            <BlogItem
                key={i}
                index={i}
                title={this.state.posts[i].fields.title}
                down={this.handleMouseDown} 
                leave={this.handleMouseLeave} 
                up={this.handleMouseUp}  
                move={this.handleMouseMove}
            />
          ));

        return (
            <div>
                {/* <div className="title">
                    <h2 className="content"><strong>Blog Posts</strong></h2>
                    <p className="sub-content">Swipe to see more</p>
                </div> */}
                <div className="blog-posts">
                    {posts}
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <h4 id="card-title">Blog Title</h4>
                        <p id="card-content">Example start to the blog post...</p>
                        <div className="card-bottom">
                            <p id="card-date">WED, FEB 19 20:14 PM</p>
                            <button id="card-btn">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}

export default Blog;