import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { AppBar, Toolbar, withStyles } from '@material-ui/core';

import Header from './Header';
import reducer from './reducer';
import saga from './saga';
import config from './config';
import DocsEditor from './Editor/Loadable';

function KDocs(props) {
  const callbackHandler = (type, data) => {
    switch (type) {
      case '': {
        return;
      }
      default:
        return null;
    }
  };

  return (
    <div>
      <AppBar position="static" color="inherit">
        {/* <Toolbar> */}
        <Header items={props.items} />
      </AppBar>
      <DocsEditor />
    </div>
  );
}

KDocs.propTypes = {
  items: PropTypes.object,
  // classes: PropTypes.object,
};

const mapStateToProps = state => {
  // reducer
  const r = state['KDOCS/homepage'];

  return {
    isLoading: r.get('isLoading'),
    items: r.get('menuItems'),
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: `${config.MODULE_NAME}/homepage`,
  reducer,
});
const withSaga = injectSaga({
  key: `${config.MODULE_NAME}/homepage`,
  saga,
});

// export default withStyles(styles)(
//   compose(
//     withReducer,
//     withConnect,
//     // withSaga,
//   )(KDocs),
// );

export default compose(
  withReducer,
  withConnect,
  // withSaga,
)(KDocs);
