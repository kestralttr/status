import React from 'react';
import {Link, withRouter} from 'react-router';


class ExecutionDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderExecutionDetail.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.executionDetail && nextProps.executionDetail.id !== (this.props.executionDetail ? this.props.executionDetail.id : "0")) {
      return(this.props.requestExecution(nextProps.executionDetail.id));
    }
  }

  renderExecutionDetail() {
    if (this.props.executionDetail) {
      return(
        <div className="campaign-detail-execution-detail">
          <span>{this.props.executionDetail.title}</span><br></br>
          <span>{this.props.executionDetail.format}</span><br></br>
          <span>{this.props.executionDetail.info}</span><br></br>
        </div>
      );
    } else {
      return null;
    }

  }

  render() {
    return(
      <div>
        {this.renderExecutionDetail()}
      </div>
    );
  }

}

export default withRouter(ExecutionDetail);
