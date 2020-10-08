/**
 *
 * Asynchronously loads the component for TodosListContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
