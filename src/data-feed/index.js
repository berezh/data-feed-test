/* eslint-disable */
import { newActionType, newReducer, setState, newAction } from 'redux-sputnik';
import { change, Field, reduxForm, reset, Form, initialize } from 'redux-form';
import { takeEvery, put, select } from 'redux-saga/effects';
import React, { useMemo, useCallback, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

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

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var prefix = '@feed';
var FeedActionTypes = {
    SET_COUNT: newActionType(prefix, 'SET_COUNT'),
    SET_SKIP: newActionType(prefix, 'SET_SKIP'),
};

var _a;
var FEED_INITIAL_STATE = {
    count: {},
};
var feedReducer = newReducer(FEED_INITIAL_STATE, (_a = {},
    _a[FeedActionTypes.SET_COUNT] = function (state, _a) {
        var form = _a.form, count = _a.count;
        state.count[form] = count;
        return setState(state, function (_) { return _.count; }, __assign({}, state.count));
    },
    _a));

function setSkip(_a) {
    var count;
    var payload = _a.payload;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, select(function (x) { return x.feed.count[payload]; }) || 0];
            case 1:
                count = _b.sent();
                return [4 /*yield*/, put(change(payload, 'skip', count))];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}
function feedSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, takeEvery(FeedActionTypes.SET_SKIP, setSkip)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}

var FILTER_FORM_NAME = 'FILTER_FORM_NAME';

var CurrentComponent = function (_a) {
    var restinput = _a.input, className = _a.className, rest = __rest(_a, ["input", "className"]);
    return React.createElement("input", __assign({ className: classNames('df-field-input', className) }, restinput, rest));
};
var FilterInputField = function (_a) {
    var props = __rest(_a, []);
    return React.createElement(Field, __assign({ component: CurrentComponent }, props));
};

var FilterSearchField = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'search' : _b, placeholder = _a.placeholder, props = __rest(_a, ["name", "placeholder"]);
    return React.createElement(FilterInputField, __assign({ placeholder: placeholder || 'Search', name: name }, props));
};

var CurrentComponent$1 = function (_a) {
    var _b = _a.input, value = _b.value, onChange = _b.onChange, options = _a.options, placeholder = _a.placeholder, className = _a.className;
    return (React.createElement("select", { className: classNames('df-field-select', className), value: value, onChange: onChange },
        placeholder ? React.createElement("option", null, placeholder) : null,
        options.map(function (x, i) {
            return (React.createElement("option", { value: x.value, key: i }, x.text));
        })));
};
var FilterSelectField = function (props) {
    return React.createElement(Field, __assign({ component: CurrentComponent$1 }, props));
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
    var _b = _a.input, inputName = _b.name, value = _b.value, onChange = _b.onChange, options = _a.options, texts = _a.texts;
    var inputValue = useMemo(function () {
        return value ? SortUtil.toValue(value) : '';
    }, [value]);
    var sortValue = useMemo(function () {
        return value ? value : { mode: 'asc', name: '' };
    }, [value]);
    var handleSort = useCallback(function (newName) {
        var mode = sortValue.mode, name = sortValue.name;
        var newValue = name === newName ? { name: name, mode: mode === 'asc' ? 'desc' : 'asc' } : { name: newName, mode: mode };
        onChange(newValue);
    }, [sortValue]);
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "hidden", name: inputName, value: inputValue }),
        options.length ? (React.createElement("div", { className: 'df-sort__sort' },
            React.createElement("div", { className: 'df-sort__option' }, (texts === null || texts === void 0 ? void 0 : texts.sort) || 'Sort: '),
            React.createElement(React.Fragment, { key: "list" }, options.map(function (_a, i) {
                var _b;
                var label = _a.label, optionName = _a.name, icon = _a.icon;
                var currentMode = optionName === sortValue.name ? sortValue.mode : undefined;
                return (React.createElement("div", { key: i, className: classNames('df-sort__option', (_b = {},
                        _b["df-sort__option--" + currentMode] = !!currentMode,
                        _b)), onClick: function () { return handleSort(optionName); } },
                    icon,
                    React.createElement("span", null, "" + (label || optionName))));
            })))) : null));
};
var FilterSortField = function (props) {
    return React.createElement(Field, __assign({ component: CurrentComponent$2 }, props));
};

var CurrentComponent$3 = function (_a) {
    var input = _a.input;
    return React.createElement("input", __assign({ type: "hidden" }, input));
};
var FilterHiddenField = function (_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    return React.createElement(Field, __assign({ name: name, component: CurrentComponent$3 }, props));
};

var CurrentComponent$4 = function (_a) {
    var _b = _a.input, inputValue = _b.value, inputName = _b.name, onChange = _b.onChange, options = _a.options;
    var handleChange = useCallback(function (e) {
        onChange(e.currentTarget.value);
    }, [onChange]);
    return (React.createElement("div", { className: "filter-radio" }, options.map(function (_a, i) {
        var value = _a.value, text = _a.text;
        return (React.createElement("label", { key: i },
            React.createElement("input", { type: "radio", value: value, name: inputName, onChange: handleChange, checked: value === inputValue }),
            text));
    })));
};
var FilterRadioField = function (props) {
    return React.createElement(Field, __assign({ component: CurrentComponent$4 }, props));
};

var CurrentComponent$5 = function (_a) {
    var label = _a.label, _b = _a.input, value = _b.value, name = _b.name, onChange = _b.onChange, checked = _b.checked, className = _a.className;
    return (React.createElement("label", { className: classNames('df-field-checkbox', className) },
        React.createElement("input", { className: "df-field-checkbox__input", type: "checkbox", value: value, name: name, onChange: onChange, checked: checked }),
        label));
};
var FilterCheckboxField = function (props) {
    return React.createElement(Field, __assign({ component: CurrentComponent$5 }, props));
};

var ButtonLink = function (_a) {
    var _b;
    var children = _a.children, disabled = _a.disabled, onClick = _a.onClick;
    var handleClick = useCallback(function () {
        if (disabled !== true) {
            onClick();
        }
    }, [disabled]);
    return (React.createElement("div", { className: classNames('df-buttom-link', (_b = {},
            _b['df-buttom-link--disabled'] = disabled,
            _b)), onClick: handleClick }, children));
};

function DialogComponent(_a) {
    var handleSubmit = _a.handleSubmit, children = _a.children, _b = _a.options, options = _b === void 0 ? [] : _b, searchContent = _a.searchContent, total = _a.total, className = _a.className, texts = _a.texts, searchField = _a.searchField;
    var dispatch = useDispatch();
    var handleClean = useCallback(function () {
        dispatch(reset(FILTER_FORM_NAME));
    }, [FILTER_FORM_NAME]);
    return (React.createElement(Form, { onSubmit: handleSubmit, className: classNames('df-filter', className) },
        React.createElement(FilterHiddenField, { name: "skip" }),
        React.createElement(FilterHiddenField, { name: "page" }),
        options.length ? (React.createElement("div", { className: 'df-filter__sort' },
            React.createElement(FilterSortField, { texts: texts, name: "sort", options: options }))) : null,
        React.createElement("div", { className: 'df-filter__search' },
            searchField ? searchField : React.createElement(FilterSearchField, null),
            searchContent),
        children ? React.createElement("div", { className: 'df-filter__children' }, children) : null,
        React.createElement("div", { className: 'df-filter__bottom' },
            React.createElement("div", null, total ? ((texts === null || texts === void 0 ? void 0 : texts.total) || 'Total') + ": " + total : null),
            React.createElement("div", { className: 'df-filter__actions' },
                React.createElement(ButtonLink, { onClick: handleClean }, (texts === null || texts === void 0 ? void 0 : texts.clean) || 'Clean')))));
}
// export const FeedFilterForm = reduxForm<FeedFilterValues, ComponentProps>({
//     form: FILTER_FORM_NAME,
// })(DialogComponent);
function FeedFilterForm(_a) {
    var props = __rest(_a, []);
    var Component = useState(reduxForm({
        form: props.formName,
    })(DialogComponent))[0];
    return React.createElement(Component, __assign({}, props));
}

function useDebouncedCallback(wait, callback, deps) {
    if (deps === void 0) { deps = []; }
    return useCallback(debounce(callback, wait), deps);
}

function DataFeed(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.all, all = _c === void 0 ? 0 : _c, step = _a.step, _d = _a.page, page = _d === void 0 ? 1 : _d, renderItem = _a.renderItem, _e = _a.texts, texts = _e === void 0 ? {} : _e, className = _a.className, _f = _a.loading, loading = _f === void 0 ? false : _f, onChange = _a.onChange, children = _a.children, renderPageItem = _a.renderPageItem;
    var loadRef = useRef(null);
    var handleLoad = useCallback(function () {
        onChange(data.length);
    }, [data, onChange]);
    var pages = useMemo(function () {
        return PageUtil.getPages(all, step, page);
    }, [all, step, page]);
    return (React.createElement("div", { className: classNames('data-feed', className) },
        children,
        React.createElement("div", { className: "df-feed__data" }, data.map(function (item, i) { return (React.createElement("div", { key: i }, renderItem(item))); })),
        data.length < all && page === 1 ? (React.createElement("div", { className: "df-feed__load", ref: loadRef },
            React.createElement(ButtonLink, { onClick: handleLoad, disabled: loading }, (texts === null || texts === void 0 ? void 0 : texts.loadMore) || 'Load more'))) : null,
        step && step < all && data.length <= step ? (React.createElement("div", { className: "df-feed__page" }, pages.map(function (p, i) {
            return (React.createElement("div", { key: i }, renderPageItem ? renderPageItem(p, page === p) : React.createElement("span", null, p ? p : '...')));
        }))) : null));
}

var FeedActions = {
    setCount: function (payload) { return newAction(FeedActionTypes.SET_COUNT, payload); },
    setSkip: function (payload) { return newAction(FeedActionTypes.SET_SKIP, payload); },
};

var FilterDataFeed = function (_a) {
    var all = _a.all, data = _a.data, step = _a.step, initialValues = _a.initialValues, children = _a.children, className = _a.className, renderItem = _a.renderItem, renderRow = _a.renderRow, onChange = _a.onChange, sortOptions = _a.sortOptions, renderPageLink = _a.renderPageLink, _b = _a.initialLoad, initialLoad = _b === void 0 ? true : _b, _c = _a.languageOptions, languageOptions = _c === void 0 ? [] : _c, _d = _a.showTotal, showTotal = _d === void 0 ? true : _d, texts = _a.texts, searchField = _a.searchField;
    var dispatch = useDispatch();
    var _e = useState(initialLoad), init = _e[0], setInit = _e[1];
    var debounceFilterChange = useDebouncedCallback(500, function (data) {
        if (init) {
            onChange(FilterUtil.toOuter(data));
        }
        else {
            setInit(true);
        }
    }, [init, onChange]);
    var handleFilterChange = useCallback(function (_a, _dispatch, _form, _b) {
        var prevSkip = _b.skip;
        var skip = _a.skip, data = __rest(_a, ["skip"]);
        if (skip === 0 || skip !== prevSkip) {
            debounceFilterChange(__assign({ skip: skip }, data));
        }
        else {
            dispatch(change(FILTER_FORM_NAME, 'skip', 0));
        }
    }, [init, onChange]);
    var handleFeedChange = useCallback(function () {
        dispatch(FeedActions.setSkip(FILTER_FORM_NAME));
    }, []);
    var renderPageItem = useCallback(function (page, current) {
        if (page === null) {
            return React.createElement("span", null, "...");
        }
        else if (current) {
            return React.createElement("b", null, page);
        }
        else {
            return renderPageLink ? renderPageLink(page) : React.createElement("b", null, page);
        }
    }, [renderPageLink]);
    var handleRenderItem = useCallback(function (item) {
        if (renderItem) {
            return renderItem(item);
        }
        else if (renderRow) {
            return renderRow(item);
        }
        return '';
    }, [renderItem, renderRow]);
    var currentPage = useMemo(function () {
        var page = (initialValues || {}).page;
        return page;
    }, [initialValues]);
    var searchContent = useMemo(function () {
        return languageOptions.length ? (React.createElement(FilterSelectField, { placeholder: 'Language', name: "languageCode", options: languageOptions })) : null;
    }, [languageOptions]);
    useEffect(function () {
        var _a = initialValues || {}, _b = _a.skip, skip = _b === void 0 ? 0 : _b, rest = __rest(_a, ["skip"]);
        dispatch(initialize(FILTER_FORM_NAME, FilterUtil.toInner(__assign({ skip: skip }, rest))));
    }, []);
    useEffect(function () {
        dispatch(FeedActions.setCount({ form: FILTER_FORM_NAME, count: (data === null || data === void 0 ? void 0 : data.length) || 0 }));
    }, [data]);
    return (React.createElement(DataFeed, { all: all, data: data, step: step, page: currentPage, onChange: handleFeedChange, className: className, renderItem: handleRenderItem, renderPageItem: renderPageItem, texts: texts },
        React.createElement(FeedFilterForm, { total: showTotal ? all : undefined, onChange: handleFilterChange, options: sortOptions, searchContent: searchContent, texts: texts, formName: FILTER_FORM_NAME, searchField: searchField }, children)));
};

var FeedAttribute = function (_a) {
    var label = _a.label, content = _a.content, icon = _a.icon, width = _a.width, maxWidth = _a.maxWidth;
    var style = {
        width: width,
        maxWidth: maxWidth,
    };
    return (React.createElement("div", { className: "df-attribute" },
        icon ? React.createElement("div", { className: "df-attribute__icon" }, icon) : null,
        React.createElement("div", { className: "df-attribute__text", style: style },
            React.createElement("div", { className: "df-attribute__name" }, label),
            React.createElement("div", { className: "df-attribute__value" }, content))));
};

var DataFeedItem = function (_a) {
    var title = _a.title, titleRight = _a.titleRight, attributes = _a.attributes, actions = _a.actions, attributeWidth = _a.attributeWidth, right = _a.right, left = _a.left, className = _a.className;
    var attributeSet = FeedArrayUtil.toDobleArray(attributes);
    var actionSet = FeedArrayUtil.toArray(actions);
    return (React.createElement("div", { className: classNames('feed-item', className) },
        left ? React.createElement("div", { className: "feed-item__left" }, left) : null,
        React.createElement("div", { className: "feed-item__content" },
            title || titleRight ? (React.createElement("div", { className: "feed-item__top" },
                React.createElement("div", { className: "feed-item__title" }, title),
                React.createElement("div", { className: "feed-item__top-right" }, titleRight))) : null,
            attributeSet.map(function (set, setKey) { return (React.createElement("div", { key: setKey, className: "feed-item__attribute-set" }, set.map(function (_a, i) {
                var width = _a.width, attrProps = __rest(_a, ["width"]);
                return (React.createElement("div", { key: i },
                    React.createElement(FeedAttribute, __assign({ width: width ? width : attributeWidth }, attrProps))));
            }))); }),
            actionSet.length > 0 ? (React.createElement("div", { className: "feed-item__action-set" }, actionSet.map(function (action, i) { return (React.createElement("div", { key: i }, action)); }))) : null),
        right ? React.createElement("div", { className: "feed-item__right" }, right) : null));
};

var _a$1;
var defaultLocale = (_a$1 = {},
    _a$1['sort'] = '',
    _a$1['total'] = '',
    _a$1['clean'] = '',
    _a$1['search'] = '',
    _a$1['loadMore'] = '',
    _a$1['loading'] = '',
    _a$1);
// export type DataFeedText = keyof DataFeedTexts;

export { DataFeed, DataFeedItem, FILTER_FORM_NAME, FeedArrayUtil, FeedFilterForm, FilterCheckboxField, FilterDataFeed, FilterHiddenField, FilterInputField, FilterRadioField, FilterSearchField, FilterSelectField, FilterSortField, FilterUtil, PageUtil, SortUtil, feedReducer, feedSaga };
