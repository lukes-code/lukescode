import React from 'react';
import { textTruncate, makeDate } from '../helpers';
import { Link } from 'react-router-dom';

class BlogItem extends React.Component {
    render () {

        const postLink =  `/blog/${this.props.blogId}`;

        return (
            <div 
                className="blog-post" 
                onMouseDown={this.props.down} 
                onMouseLeave={this.props.leave} 
                onMouseUp={this.props.up}  
                onMouseMove={this.props.move}
            >
                <h4 id="card-title">{this.props.title}</h4>
                <p id="card-content">{textTruncate(this.props.content, 33)}</p>
                <div className="card-bottom">
                    <p id="card-date">{makeDate(this.props.date)}</p> 
                    <Link to={postLink}>
                        <button id="card-btn">Read</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BlogItem;