import React from 'react';

class PostingIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  handleClick(postingId) {
    return e => {
      this.props.requestPosting(postingId);
    };
  }

  renderItem() {
    if (this.props.postingDetail && this.props.posting && this.props.postingDetail.id === this.props.posting.id) {
      return(
        <li className="posting-list-item-selected"
          onClick={this.handleClick(this.props.posting.id)}>
          {this.props.posting.title}
        </li>
      );
    } else {
      return(
        <li className="posting-list-item"
          onClick={this.handleClick(this.props.posting.id)}>
          {this.props.posting.title}
        </li>
      );
    }
  }

  render() {
    return this.renderItem();
  }

}


export default PostingIndexItem;
