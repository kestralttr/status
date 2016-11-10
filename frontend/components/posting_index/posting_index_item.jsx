import React from 'react';

class PostingIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(postingId) {
    return e => {
      this.props.requestPosting(postingId);
    };
  }

  render() {
    return(
      <li className="posting-list-item"
        onClick={this.handleClick(this.props.posting.id)}>
        {this.props.posting.title}
      </li>
    );
  }

}


export default PostingIndexItem;
