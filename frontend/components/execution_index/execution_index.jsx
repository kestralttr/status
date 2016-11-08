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
    if (this.props.campaignDetail) {
      return this.props.requestExecutions(this.props.params.campaignId, this.props.activeMediaType);
    }
    return null;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push("login");
    }

    if (nextProps.campaignDetail && nextProps.executionIndex === null) {
      return this.props.requestExecutions(this.props.params.campaignId, this.props.activeMediaType);
    }
  }

  renderExecutions(executions) {
    if (executions === null || executions === []) {
      return;
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
        <ul className="executions-list">
          {this.renderExecutions(this.props.executionIndex)}
        </ul>
      </div>
    );
  }

}

export default withRouter(ExecutionIndex);
