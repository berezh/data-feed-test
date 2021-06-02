'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reduxForm = require('redux-form');
var classNames = _interopDefault(require('classnames'));
var reactRedux = require('react-redux');
var debounce = _interopDefault(require('lodash.debounce'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var CurrentComponent = function (_a) {
    var restinput = _a.input, rest = __rest(_a, ["input"]);
    return React__default.createElement("input", __assign({}, restinput, rest));
};
var FilterTextField = function (_a) {
    var props = __rest(_a, []);
    return React__default.createElement(reduxForm.Field, __assign({ component: CurrentComponent }, props));
};

var FilterSearchField = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'search' : _b, placeholder = _a.placeholder, props = __rest(_a, ["name", "placeholder"]);
    return React__default.createElement(FilterTextField, __assign({ placeholder: placeholder || 'Search', name: name }, props));
};

var CurrentComponent$1 = function (_a) {
    var _b = _a.input, value = _b.value, onChange = _b.onChange, options = _a.options, placeholder = _a.placeholder;
    return (React__default.createElement("select", { value: value, onChange: onChange },
        placeholder ? React__default.createElement("option", null, placeholder) : null,
        options.map(function (x, i) {
            return (React__default.createElement("option", { value: x.value, key: i }, x.text));
        })));
};
var FilterSelectField = function (props) {
    return React__default.createElement(reduxForm.Field, __assign({ component: CurrentComponent$1 }, props));
};

var SortUtil = /** @class */ (function () {
    function SortUtil() {
    }
    SortUtil.parseValue = function (value) {
        var splits = (value || '').split(this.separator);
        var mode = 'asc';
        if (splits.length > 1) {
            mode = splits[1] === 'asc' ? 'asc' : 'desc';
        }
        return splits.length
            ? {
                name: splits.length ? splits[0] : '',
                mode: mode,
            }
            : undefined;
    };
    SortUtil.toValue = function (_a) {
        var name = _a.name, mode = _a.mode;
        return "" + (name || '') + this.separator + mode;
    };
    SortUtil.separator = '|';
    return SortUtil;
}());

var FilterUtil = {
    toInner: function (data) {
        if (data) {
            var order = data.order, direction = data.direction, rest = __rest(data, ["order", "direction"]);
            var sort = {
                name: order || '',
                mode: direction || 'asc',
            };
            return __assign(__assign({}, rest), { sort: sort });
        }
        return {};
    },
    toOuter: function (_a) {
        var sort = _a.sort, rest = __rest(_a, ["sort"]);
        var newValues = __assign({}, rest);
        if (sort) {
            newValues.order = sort.name;
            newValues.direction = sort.mode;
        }
        return newValues;
    },
};

var EDGE_COUNT = 2;
var PageUtil = /** @class */ (function () {
    function PageUtil() {
    }
    PageUtil.getPages = function (all, step, page) {
        if (page === void 0) { page = 1; }
        var pageArray = [];
        if (step && page) {
            var pageCount = Math.ceil(all / step);
            if (page > 0 && page <= pageCount) {
                // left
                for (var i = page - 2; i >= 0 && i > page - 2 - EDGE_COUNT; i--) {
                    pageArray.unshift(i + 1);
                }
                pageArray.push(page);
                // right
                for (var i = page; i < pageCount && i < page + EDGE_COUNT; i++) {
                    pageArray.push(i + 1);
                }
                // first
                var firstValue = pageArray[0];
                if (firstValue !== 1) {
                    if (firstValue !== 2) {
                        pageArray.unshift(null);
                    }
                    pageArray.unshift(1);
                }
                // last
                var lastValue = pageArray[pageArray.length - 1];
                if (lastValue !== pageCount) {
                    if (lastValue !== pageCount - 1) {
                        pageArray.push(null);
                    }
                    pageArray.push(pageCount);
                }
            }
        }
        return pageArray;
    };
    return PageUtil;
}());

var FeedArrayUtil = {
    toArray: function (param) {
        var result = [];
        if (Array.isArray(param)) {
            if (Array.isArray(param[0])) {
                param.forEach(function (o1) { return o1.forEach(function (o2) { return result.push(o2); }); });
            }
            else {
                result = __spreadArrays(param);
            }
        }
        else if (typeof param === 'object') {
            result.push(param);
        }
        return result;
    },
    toDobleArray: function (param) {
        var result = [];
        if (Array.isArray(param)) {
            if (Array.isArray(param[0])) {
                result = param;
            }
            else {
                result = [];
                if (param.length) {
                    result.push(param);
                }
            }
        }
        else if (typeof param === 'object') {
            result.push([param]);
        }
        return result;
    },
};

var CurrentComponent$2 = function (_a) {
    var _b = _a.input, inputName = _b.name, value = _b.value, onChange = _b.onChange, options = _a.options;
    var inputValue = React.useMemo(function () {
        return value ? SortUtil.toValue(value) : '';
    }, [value]);
    var sortValue = React.useMemo(function () {
        return value ? value : { mode: 'asc', name: '' };
    }, [value]);
    var handleSort = React.useCallback(function (newName) {
        var mode = sortValue.mode, name = sortValue.name;
        var newValue = name === newName ? { name: name, mode: mode === 'asc' ? 'desc' : 'asc' } : { name: newName, mode: mode };
        onChange(newValue);
    }, [sortValue]);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("input", { type: "hidden", name: inputName, value: inputValue }),
        options.length ? (React__default.createElement("div", { className: 'feed-sort__sort' },
            React__default.createElement("div", { className: 'feed-sort__option' }, "Sort: "),
            React__default.createElement(React__default.Fragment, { key: "list" }, options.map(function (_a, i) {
                var _b;
                var label = _a.label, optionName = _a.name, icon = _a.icon;
                var currentMode = optionName === sortValue.name ? sortValue.mode : undefined;
                return (React__default.createElement("div", { key: i, className: classNames('feed-sort__option', (_b = {},
                        _b["feed-sort__option--" + currentMode] = !!currentMode,
                        _b)), onClick: function () { return handleSort(optionName); } },
                    icon,
                    React__default.createElement("span", null, "" + (label || optionName))));
            })))) : null));
};
var FilterSortField = function (props) {
    return React__default.createElement(reduxForm.Field, __assign({ component: CurrentComponent$2 }, props));
};

var CurrentComponent$3 = function (_a) {
    var input = _a.input;
    return React__default.createElement("input", __assign({ type: "hidden" }, input));
};
var FilterHiddenField = function (_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    return React__default.createElement(reduxForm.Field, __assign({ name: name, component: CurrentComponent$3 }, props));
};

var CurrentComponent$4 = function (_a) {
    var _b = _a.input, inputValue = _b.value, inputName = _b.name, onChange = _b.onChange, options = _a.options;
    return (React__default.createElement("div", { className: "filter-radio" }, options.map(function (_a, i) {
        var value = _a.value, text = _a.text;
        return (React__default.createElement("label", { key: i },
            React__default.createElement("input", { type: "radio", value: value, name: inputName, onChange: onChange, checked: value === inputValue }),
            text));
    })));
};
var FilterRadioField = function (props) {
    return React__default.createElement(reduxForm.Field, __assign({ component: CurrentComponent$4 }, props));
};

var FilterBoolField = function (props) {
    var yesNoOptions = React.useMemo(function () {
        return [
            {
                text: 'Yes',
                value: true,
            },
            {
                text: 'No',
                value: false,
            },
        ];
    }, []);
    return React__default.createElement(FilterRadioField, __assign({ options: yesNoOptions }, props));
};

function DialogComponent(_a) {
    var formName = _a.formName, handleSubmit = _a.handleSubmit, children = _a.children, _b = _a.options, options = _b === void 0 ? [] : _b, searchContent = _a.searchContent, total = _a.total, className = _a.className;
    var dispatch = reactRedux.useDispatch();
    var handleClean = React.useCallback(function () {
        dispatch(reduxForm.reset(formName));
    }, [formName]);
    return (React__default.createElement(reduxForm.Form, { onSubmit: handleSubmit, className: classNames('feed_filter', className) },
        React__default.createElement(FilterHiddenField, { name: "skip" }),
        React__default.createElement(FilterHiddenField, { name: "page" }),
        options.length ? (React__default.createElement("div", { className: 'feed_filter__sort' },
            React__default.createElement(FilterSortField, { name: "sort", options: options }))) : null,
        React__default.createElement("div", { className: 'feed_filter__search' },
            React__default.createElement(FilterSearchField, null),
            searchContent),
        children ? React__default.createElement("div", { className: 'feed_filter__children' }, children) : null,
        React__default.createElement("div", { className: 'feed_filter__bottom' },
            React__default.createElement("div", null, total ? 'Total' + ": " + total : null),
            React__default.createElement("div", { className: 'feed_filter__actions' },
                React__default.createElement("span", { onClick: handleClean }, 'Clean')))));
}
function FeedFilterForm(_a) {
    var props = __rest(_a, []);
    var Component = React.useState(reduxForm.reduxForm({
        form: props.formName,
    })(DialogComponent))[0];
    return React__default.createElement(Component, __assign({}, props));
}

function useDebouncedCallback(wait, callback, deps) {
    if (deps === void 0) { deps = []; }
    return React.useCallback(debounce(callback, wait), deps);
}

function DataFeed(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.all, all = _c === void 0 ? 0 : _c, step = _a.step, _d = _a.page, page = _d === void 0 ? 1 : _d, renderItem = _a.renderItem, _e = _a.texts, texts = _e === void 0 ? {} : _e, className = _a.className, _f = _a.loading, loading = _f === void 0 ? false : _f, renderLoadMoreButton = _a.renderLoadMoreButton, onChange = _a.onChange, children = _a.children, renderPageItem = _a.renderPageItem;
    var loadRef = React.useRef(null);
    var handleLoad = React.useCallback(function () {
        onChange && onChange(data.length);
    }, [data, onChange]);
    var pages = React.useMemo(function () {
        return PageUtil.getPages(all, step, page);
    }, [all, step, page]);
    return (React__default.createElement("div", { className: classNames('data-feed', className) },
        children,
        React__default.createElement("div", { className: "data-feed__data" }, data.map(function (item, i) { return (React__default.createElement("div", { key: i }, renderItem(item))); })),
        data.length < all && page === 1 ? (React__default.createElement("div", { className: "data-feed__load", ref: loadRef },
            React__default.createElement("div", { className: "data-feed__load-btn", onClick: handleLoad }, renderLoadMoreButton
                ? renderLoadMoreButton(loading)
                : loading
                    ? texts['loading']
                        ? texts['loading']
                        : 'Loading ...'
                    : texts['load']
                        ? texts['load']
                        : 'See More'))) : null,
        step && step < all && data.length <= step ? (React__default.createElement("div", { className: "data-feed__page" }, pages.map(function (p, i) {
            return (React__default.createElement("div", { key: i }, renderPageItem ? renderPageItem(p, page === p) : React__default.createElement("span", null, p ? p : '...')));
        }))) : null));
}

var FILTER_FORM_NAME = 'FILTER_FORM_NAME';
var formCount = 0;
var FilterDataFeed = function (_a) {
    var all = _a.all, data = _a.data, step = _a.step, initialValues = _a.initialValues, children = _a.children, className = _a.className, renderItem = _a.renderItem, renderRow = _a.renderRow, onChange = _a.onChange, sortOptions = _a.sortOptions, renderPageLink = _a.renderPageLink, _b = _a.initialLoad, initialLoad = _b === void 0 ? true : _b, _c = _a.languageOptions, languageOptions = _c === void 0 ? [] : _c, _d = _a.showTotal, showTotal = _d === void 0 ? true : _d;
    var dispatch = reactRedux.useDispatch();
    var _e = React.useState(initialLoad), init = _e[0], setInit = _e[1];
    var formName = React.useMemo(function () {
        return FILTER_FORM_NAME + "_" + formCount;
    }, []);
    var debounceFilterChange = useDebouncedCallback(500, function (data) {
        if (init) {
            onChange(FilterUtil.toOuter(data));
        }
        else {
            setInit(true);
        }
    }, [init, onChange]);
    var handleFilterChange = React.useCallback(function (_a, _dispatch, _form, _b) {
        var prevSkip = _b.skip;
        var skip = _a.skip, data = __rest(_a, ["skip"]);
        if (skip === 0 || skip !== prevSkip) {
            debounceFilterChange(__assign({ skip: skip }, data));
        }
        else {
            dispatch(reduxForm.change(formName, 'skip', 0));
        }
    }, [init, onChange]);
    var handleFeedChange = React.useCallback(function (skip) {
        dispatch(reduxForm.change(formName, 'skip', skip));
    }, [formName]);
    var renderPageItem = React.useCallback(function (page, current) {
        if (page === null) {
            return React__default.createElement("span", null, "...");
        }
        else if (current) {
            return React__default.createElement("b", null, page);
        }
        else {
            return renderPageLink ? renderPageLink(page) : React__default.createElement("b", null, page);
        }
    }, [renderPageLink]);
    var handleRenderItem = React.useCallback(function (item) {
        if (renderItem) {
            return renderItem(item);
        }
        else if (renderRow) {
            return renderRow(item);
        }
        return '';
    }, [renderItem, renderRow]);
    var texts = React.useMemo(function () {
        return {
            sort: 'Sort By',
            total: 'Total',
            load: 'Load More',
        };
    }, []);
    var currentPage = React.useMemo(function () {
        var page = (initialValues || {}).page;
        return page;
    }, [initialValues]);
    var searchContent = React.useMemo(function () {
        return languageOptions.length ? (React__default.createElement(FilterSelectField, { placeholder: 'Language', name: "languageCode", options: languageOptions })) : null;
    }, [languageOptions]);
    React.useEffect(function () {
        formCount = +1;
        var _a = initialValues || {}, _b = _a.skip, skip = _b === void 0 ? 0 : _b, rest = __rest(_a, ["skip"]);
        dispatch(reduxForm.initialize(formName, FilterUtil.toInner(__assign({ skip: skip }, rest))));
    }, []);
    return (React__default.createElement(DataFeed, { texts: texts, all: all, data: data, step: step, page: currentPage, onChange: handleFeedChange, className: className, renderItem: handleRenderItem, renderPageItem: renderPageItem },
        React__default.createElement(FeedFilterForm, { className: "root__filter", total: showTotal ? all : undefined, onChange: handleFilterChange, options: sortOptions, formName: formName, searchContent: searchContent }, children)));
};

var FeedAttribute = function (_a) {
    var label = _a.label, content = _a.content, icon = _a.icon, width = _a.width, maxWidth = _a.maxWidth;
    var style = {
        width: width,
        maxWidth: maxWidth,
    };
    return (React__default.createElement("div", { className: "feed-attribute" },
        icon ? React__default.createElement("div", { className: "feed-attribute__icon" }, icon) : null,
        React__default.createElement("div", { className: "feed-attribute__text", style: style },
            React__default.createElement("div", { className: "feed-attribute__name" }, label),
            React__default.createElement("div", { className: "feed-attribute__value" }, content))));
};

var DataFeedItem = function (_a) {
    var title = _a.title, titleRight = _a.titleRight, attributes = _a.attributes, actions = _a.actions, attributeWidth = _a.attributeWidth, right = _a.right, left = _a.left, className = _a.className;
    var attributeSet = FeedArrayUtil.toDobleArray(attributes);
    var actionSet = FeedArrayUtil.toArray(actions);
    return (React__default.createElement("div", { className: classNames('feed-item', className) },
        left ? React__default.createElement("div", { className: "feed-item__left" }, left) : null,
        React__default.createElement("div", { className: "feed-item__content" },
            title || titleRight ? (React__default.createElement("div", { className: "feed-item__top" },
                React__default.createElement("div", { className: "feed-item__title" }, title),
                React__default.createElement("div", { className: "feed-item__top-right" }, titleRight))) : null,
            attributeSet.map(function (set, setKey) { return (React__default.createElement("div", { key: setKey, className: "feed-item__attribute-set" }, set.map(function (_a, i) {
                var width = _a.width, attrProps = __rest(_a, ["width"]);
                return (React__default.createElement("div", { key: i },
                    React__default.createElement(FeedAttribute, __assign({ width: width ? width : attributeWidth }, attrProps))));
            }))); }),
            actionSet.length > 0 ? (React__default.createElement("div", { className: "feed-item__action-set" }, actionSet.map(function (action, i) { return (React__default.createElement("div", { key: i }, action)); }))) : null),
        right ? React__default.createElement("div", { className: "feed-item__right" }, right) : null));
};

exports.DataFeed = DataFeed;
exports.DataFeedItem = DataFeedItem;
exports.FeedArrayUtil = FeedArrayUtil;
exports.FeedFilterForm = FeedFilterForm;
exports.FilterBoolField = FilterBoolField;
exports.FilterDataFeed = FilterDataFeed;
exports.FilterHiddenField = FilterHiddenField;
exports.FilterRadioField = FilterRadioField;
exports.FilterSearchField = FilterSearchField;
exports.FilterSelectField = FilterSelectField;
exports.FilterSortField = FilterSortField;
exports.FilterTextField = FilterTextField;
exports.FilterUtil = FilterUtil;
exports.PageUtil = PageUtil;
exports.SortUtil = SortUtil;
