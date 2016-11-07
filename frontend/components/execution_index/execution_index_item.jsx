import React from 'react';
import {withRouter} from 'react-router';

const ExecutionIndexItem = ({execution, router}) => {
  const handleClick = url => e => {
    router.replace(url);
  };
};
