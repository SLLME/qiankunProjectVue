import router from './router'

import _ from 'lodash'
router.beforeEach((to, from, next) => {
  if (_.isEmpty(history.state.current)) {
    _.assign(history.state, { current: from.fullPath });
  }
  next();
});
