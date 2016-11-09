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
    } else {
      return(this.setState({activeMediaType: "TV"}));
    }
  }

  componentDidMount() {
    if (this.props.campaignDetail) {
      return this.props.requestExecutions(this.props.params.campaignId, this.props.mediaType ? this.props.mediaType : "TV");
    }
    return null;
  }

  componentWillUnmount() {
    return(
      this.props.updateMediaType(null),
      this.setState({activeMediaType: "initial"})
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push("login");
    }
    this.triggerMediaType(nextProps.mediaType);

    if (this.state.activeMediaType === "initial") {
      return(
        this.setState({activeMediaType: ""}),
        this.props.requestExecutions(this.props.params.campaignId, "TV")
      );
    }

    if (nextProps.campaignDetail && nextProps.mediaType && nextProps.mediaType !== this.state.activeMediaType) {
      return this.props.requestExecutions(this.props.params.campaignId, nextProps.mediaType ? nextProps.mediaType : "TV");
    }
  }

  renderExecutions(executions) {
    if (executions === null || executions === []) {
      return;
    }
    console.log("executionindex:",this.props.executionIndex);
    return(
      <ul>
        {executions.map(execution => (
          <ExecutionIndexItem key={execution.id}
            requestExecution={this.props.requestExecution}
            execution={execution} />
        ))}
      </ul>
    );
  }

  renderFirstExecutionDetail(executions) {
    if (executions === null || executions === []) {
      return;
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
        <div>{this.renderFirstExecutionDetail(this.props.executionIndex)}</div>
      </div>
    );
  }

}

export default withRouter(ExecutionIndex);
