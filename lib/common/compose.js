'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function compose(middleware) {
    if (!Array.isArray(middleware))
        throw new TypeError('Middleware stack must be an array!');
    for (var _i = 0, middleware_1 = middleware; _i < middleware_1.length; _i++) {
        var fn = middleware_1[_i];
        if (typeof fn !== 'function')
            throw new TypeError('Middleware must be composed of functions!');
    }
    return function (context, next) {
        var index = -1;
        return dispatch(0);
        function dispatch(i) {
            if (i <= index)
                return Promise.reject(new Error('next() called multiple times'));
            index = i;
            var fn = middleware[i];
            if (i === middleware.length)
                fn = next;
            if (!fn)
                return Promise.resolve();
            try {
                return Promise.resolve(fn(context, function next() {
                    return dispatch(i + 1);
                }));
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
    };
}
exports.default = compose;
