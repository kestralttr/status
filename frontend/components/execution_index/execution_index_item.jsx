import React from 'react';


class ExecutionIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(executionId) {
    return e => {
      this.props.requestExecution(executionId);
    };
  }

  render() {
    return(
      <li className="execution-list-item"
        onClick={this.handleClick(this.props.execution.id)}>
        {this.props.execution.title}
      </li>
    );
  }

}


export default ExecutionIndexItem;
