import React from 'react';
import loadable from 'utils/loadable';
import Loading from 'modules/components/common/LoadingLoadable';

export default loadable(() => import('./index'), {
  fallback: <Loading />,
});
