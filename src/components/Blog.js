import React from 'react';
import * as contentful from 'contentful';

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

        return (
            <div>
                <p>Blog Posts</p>
                <div className="blog-posts">
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                    <div 
                        className="blog-post" 
                        onMouseDown={this.handleMouseDown} 
                        onMouseLeave={this.handleMouseLeave} 
                        onMouseUp={this.handleMouseUp}  
                        onMouseMove={this.handleMouseMove}
                    >
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum<br/>lorem ipsummm</p>
                    </div>
                </div>
                <p>Swipe to see more -></p>
            </div>
        );
      }
}

export default Blog;