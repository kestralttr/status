import React from 'react';
import ExecutionIndexItem from './execution_index_item';
import {withRouter} from 'react-router';

class ExecutionIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderExecutions = this.renderExecutions.bind(this);
  }

  componentDidMount() {
    this.props.requestExecutions(this.props.campaignId,"TV");
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push("login");
    }
  }

  renderExecutions(executions) {
    if (executions.length === 0) {
      return null;
    }
    return(
      <ul>
        {executions.map(execution => (
          <ExecutionIndexItem key={execution.id} execution={execution} />
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        {this.props.renderExecutions(this.props.executionIndex)}
      </div>
    );
  }

}
