import React from 'react';

class ExecutionIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  handleClick(executionId) {
    return e => {
      this.props.requestExecution(executionId);
    };
  }

  renderItem() {
    if (this.props.executionDetail && this.props.execution && this.props.executionDetail.id === this.props.execution.id) {
      return(
        <li className="execution-list-item-selected"
          onClick={this.handleClick(this.props.execution.id)}>
          {this.props.execution.title}
        </li>
      );
    } else {
      return(
        <li className="execution-list-item"
          onClick={this.handleClick(this.props.execution.id)}>
          {this.props.execution.title}
        </li>
      );
    }
  }

  render() {
    return this.renderItem();
  }

}


export default ExecutionIndexItem;
