import React from 'react';
import { makeDate } from '../helpers';

class FullBlogPost extends React.Component {
      
      render() {

        return (
            <div 
                className="blog-post"
            >
                <h4 id="card-title">{this.props.title}</h4>
                <p id="card-content">{this.props.content}</p>
                <div className="card-bottom">
                    <p id="card-date">{makeDate(this.props.date)}</p>
                </div>
            </div>
        );
      }
}

export default FullBlogPost;