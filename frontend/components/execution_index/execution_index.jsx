import React from 'react';
import ExecutionIndexItem from './execution_index_item';
import {withRouter} from 'react-router';

class ExecutionIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMediaType: "initial"
    };
    this.renderExecutions = this.renderExecutions.bind(this);
    this.renderFirstExecutionDetail = this.renderFirstExecutionDetail.bind(this);
    this.triggerMediaType = this.triggerMediaType.bind(this);
  }

  triggerMediaType(mediaType) {
    if (mediaType) {
      return(this.setState({activeMediaType: mediaType}));
    }
  }

  componentWillUnmount() {
    return(
      this.props.updateMediaType(null),
      this.setState({activeMediaType: "initial"})
    );
  }

  componentWillReceiveProps(nextProps) {

    this.triggerMediaType(nextProps.mediaType);

    if (this.state.activeMediaType === "initial") {
      return(
        this.setState({activeMediaType: "TV"}),
        this.props.requestExecutions(this.props.params.campaignId, "TV")
      );
    }
    if (nextProps.campaignDetail && nextProps.mediaType && nextProps.mediaType !== this.state.activeMediaType) {
      return(
        this.props.requestExecutions(this.props.params.campaignId, nextProps.mediaType ? nextProps.mediaType : "TV")
      );
    }
    if (nextProps.executionIndex !== this.props.executionIndex) {
      return(
        this.renderFirstExecutionDetail(nextProps.executionIndex)
      );
    }

  }

  renderExecutions(executions) {
    if (executions === null || executions === []) {
      return;
    }
    return(
      <ul>

        {executions.map(execution => (
          <ExecutionIndexItem key={execution.id}
            requestExecution={this.props.requestExecution}
            executionDetail={this.props.executionDetail}
            execution={execution} />
        ))}
      </ul>
    );
  }

  renderFirstExecutionDetail(executions) {
    if (!Array.isArray(executions) || executions === [] || !executions[0]) {
      return(
        this.props.clearExecution()
      );
    }
    return(
      this.props.requestExecution(executions[0].id)
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
