import React from 'react';
import { textTruncate, makeDate } from '../helpers';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class BlogItem extends React.Component {
    render () {

        const postLink =  `/blog/${this.props.blogId}`;
        // const props = useSpring({ scroll: 100, from: { scroll: 0 } })

        return (
            <Spring
                from={{ opacity: 0, marginLeft: 500 }}
                to={{ opacity: 1, marginLeft: 0 }}

            >
                {props => (
                    <div 
                        style={props}
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
                )}
            </Spring>
        );
    }
}

export default BlogItem;