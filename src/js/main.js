import _ from 'underscore';
import article from '../components/article/article';
import first_view from '../components/first_view/first_view';

/**
 * ページ別のappを実行する
 *
 * @param {Object} routes - アクション
 */
function dispatch(routes) {
    const matched = window.location.pathname.match(/^\/?([^/]+)\/?([^/]+)?/).slice(1);




    if (!matched) {
        throw new Error('Invalid pathsssss');
    }

    if (!_.some(matched, (element, index) => {
        const path = matched.slice(0, matched.length - index).join('/');
        if (!{}.hasOwnProperty.call(routes, path)) {
            return false;
        }

        routes[path]();
        return true;
    })) {
        throw new Error('Invalid path');
    }
}

dispatch({
    'article': article,
    'first_view': first_view
});