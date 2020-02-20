import React from 'react';

class BlogItem extends React.Component {
    render () {
        return (
            <div 
                className="blog-post" 
                onMouseDown={this.props.down} 
                onMouseLeave={this.props.leave} 
                onMouseUp={this.props.up}  
                onMouseMove={this.props.move}
            >
                <h4 id="card-title">{this.props.title}</h4>
                <p id="card-content">Example start to the blog post...</p>
                <div className="card-bottom">
                    <p id="card-date">WED, FEB 19 20:14 PM</p>
                    <button id="card-btn">Read</button>
                </div>
            </div>
        );
    }
}

export default BlogItem;