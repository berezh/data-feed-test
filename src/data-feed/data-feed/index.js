/* eslint-disable */
'use strict';

var React = require('react');
var classNames = require('classnames');

var SortUtil = /** @class */ (function () {
    function SortUtil() {
    }
    SortUtil.parseValue = function (value) {
        var splits = (value || "").split(this.separator);
        var mode = "asc";
        if (splits.length > 1) {
            mode = splits[1] === "asc" ? "asc" : "desc";
        }
        return splits.length
            ? {
                name: splits.length ? splits[0] : "",
                mode: mode,
            }
            : undefined;
    };
    SortUtil.toValue = function (_a) {
        var name = _a.name, mode = _a.mode;
        return "".concat(name || "").concat(this.separator).concat(mode);
    };
    SortUtil.separator = "|";
    return SortUtil;
}());

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var FilterUtil = {
    toInner: function (data) {
        if (data) {
            var order = data.order, direction = data.direction, rest = __rest(data, ["order", "direction"]);
            var sort = {
                name: order || "",
                mode: direction || "asc",
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
                result = __spreadArray([], param, true);
            }
        }
        else if (typeof param === "object") {
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
        else if (typeof param === "object") {
            result.push([param]);
        }
        return result;
    },
};

var ButtonLink = function (_a) {
    var _b;
    var children = _a.children, disabled = _a.disabled, onClick = _a.onClick;
    var handleClick = React.useCallback(function () {
        if (disabled !== true) {
            onClick();
        }
    }, [onClick, disabled]);
    return (React.createElement("div", { className: classNames("df-button-link", (_b = {},
            _b["df-button-link--disabled"] = disabled,
            _b)), onClick: handleClick }, children));
};

function LightDataFeed(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.total, total = _c === void 0 ? 0 : _c, pageItems = _a.pageItems, _d = _a.currentPage, currentPage = _d === void 0 ? 1 : _d, renderItem = _a.renderItem, _e = _a.texts, texts = _e === void 0 ? {} : _e, className = _a.className, dataClassName = _a.dataClassName, _f = _a.loading, loading = _f === void 0 ? false : _f, onLoad = _a.onLoad, children = _a.children, renderPageItem = _a.renderPageItem;
    var loadRef = React.useRef(null);
    var pageNumber = typeof currentPage === "string" ? parseInt(currentPage) : currentPage;
    var handleLoad = React.useCallback(function () {
        onLoad(data.length);
    }, [data, onLoad]);
    var pages = React.useMemo(function () {
        return PageUtil.getPages(total, pageItems, pageNumber);
    }, [total, pageItems, pageNumber]);
    var loadMoreText = React.useMemo(function () {
        if (loading) {
            return texts.loading || "Loading";
        }
        return (texts === null || texts === void 0 ? void 0 : texts.loadMore) || "Load more";
    }, [texts, loading]);
    React.useEffect(function () {
        onLoad(data === null || data === void 0 ? void 0 : data.length);
    }, []);
    return (React.createElement("div", { className: classNames("df-feed", className) },
        children,
        React.createElement("div", { className: classNames("df-feed__data", dataClassName) }, data.map(function (item, i) {
            return React.createElement(React.Fragment, { key: i }, renderItem(item));
        })),
        data.length < total && pageNumber === 1 ? (React.createElement("div", { className: "df-feed__load", ref: loadRef },
            React.createElement(ButtonLink, { onClick: handleLoad, disabled: loading }, loadMoreText))) : null,
        pageItems && pageItems < total && data.length <= pageItems ? (React.createElement("div", { className: "df-feed__page" }, pages.map(function (p, i) {
            return React.createElement("div", { key: i }, renderPageItem ? renderPageItem(p, pageNumber === p) : React.createElement("span", null, p ? p : "..."));
        }))) : null));
}

var DataFeed = function (_a) {
    var all = _a.total, data = _a.data, step = _a.pageItems, initialValues = _a.initialValues, children = _a.children, className = _a.className, dataClassName = _a.dataClassName, renderItem = _a.renderItem, renderRow = _a.renderRow, renderPageLink = _a.renderPageLink, texts = _a.texts, onChange = _a.onChange;
    var handleFeedChange = React.useCallback(function (skip) {
        onChange === null || onChange === void 0 ? void 0 : onChange({ skip: skip });
    }, [onChange]);
    var renderPageItem = React.useCallback(function (page, current) {
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
    var handleRenderItem = React.useCallback(function (item) {
        if (renderItem) {
            return renderItem(item);
        }
        else if (renderRow) {
            return renderRow(item);
        }
        return "";
    }, [renderItem, renderRow]);
    var currentPage = React.useMemo(function () {
        var page = (initialValues || {}).page;
        return page;
    }, [initialValues]);
    return (React.createElement(LightDataFeed, { total: all, data: data, pageItems: step, currentPage: currentPage, onLoad: handleFeedChange, className: className, dataClassName: dataClassName, renderItem: handleRenderItem, renderPageItem: renderPageItem, texts: texts }, children));
};

var RowAttribute = function (_a) {
    var label = _a.label, content = _a.content, icon = _a.icon, width = _a.width, maxWidth = _a.maxWidth, className = _a.className;
    var style = React.useMemo(function () {
        return { width: width, maxWidth: maxWidth };
    }, [width, maxWidth]);
    return (React.createElement("div", { className: classNames("df-attribute", className) },
        icon ? React.createElement("div", { className: "df-attribute__icon" }, icon) : null,
        React.createElement("div", { className: "df-attribute__text", style: style },
            label ? React.createElement("div", { className: "df-attribute__label" }, label) : null,
            React.createElement("div", { className: "df-attribute__content" }, content))));
};

var StandardRow = function (_a) {
    var children = _a.children, content = _a.content, leftContent = _a.leftContent, rightContent = _a.rightContent, attributes = _a.attributes, actions = _a.actions, attributeWidth = _a.attributeWidth, right = _a.right, left = _a.left, className = _a.className, contentClassName = _a.contentClassName, topRight = _a.topRight;
    var attributeSet = React.useMemo(function () { return FeedArrayUtil.toDobleArray(attributes); }, [attributes]);
    var actionSet = React.useMemo(function () { return FeedArrayUtil.toArray(actions); }, [actions]);
    var showPanel = React.useMemo(function () {
        return attributeSet.length || actionSet.length;
    }, []);
    var showContent = React.useMemo(function () {
        return !!(children || content || rightContent || leftContent);
    }, [children, content, rightContent, leftContent]);
    return (React.createElement("div", { className: classNames("df-standard-row", className) },
        left ? React.createElement("div", { className: "df-standard-row__left" }, left) : null,
        React.createElement("div", { className: "df-standard-row__middle" },
            React.createElement("div", { className: "df-standard-row__middle-static" },
                showContent ? (React.createElement("div", { className: classNames("df-standard-row__content", contentClassName) },
                    leftContent ? React.createElement("div", { className: "df-standard-row__content-left" }, leftContent) : null,
                    children || content ? React.createElement("div", { className: "df-standard-row__content-middle" }, children || content) : null,
                    rightContent ? React.createElement("div", { className: "df-standard-row__content-right" }, rightContent) : null)) : null,
                showPanel ? (React.createElement("div", { className: "df-standard-row__panel" },
                    attributeSet.map(function (set, setKey) { return (React.createElement("div", { key: setKey, className: "df-standard-row__attribute" }, set.map(function (_a, i) {
                        var width = _a.width, attrProps = __rest(_a, ["width"]);
                        return (React.createElement(RowAttribute, __assign({ className: "df-standard-row__attribute-item", key: i, width: width ? width : attributeWidth }, attrProps)));
                    }))); }),
                    actionSet.length > 0 ? (React.createElement("div", { className: "df-standard-row__action" }, actionSet.map(function (action, i) { return (React.createElement("div", { className: "df-standard-row__action-item", key: i }, action)); }))) : null)) : null),
            topRight ? React.createElement("div", { className: "df-standard-row__top-right" }, topRight) : null),
        right ? React.createElement("div", { className: "df-standard-row__right" }, right) : null));
};

var _a;
(_a = {},
    _a["sort"] = "",
    _a["total"] = "",
    _a["clean"] = "",
    _a["search"] = "",
    _a["loadMore"] = "",
    _a["loading"] = "",
    _a);
// export type DataFeedText = keyof DataFeedTexts;

exports.DataFeed = DataFeed;
exports.FeedArrayUtil = FeedArrayUtil;
exports.FilterUtil = FilterUtil;
exports.LightDataFeed = LightDataFeed;
exports.PageUtil = PageUtil;
exports.RowAttribute = RowAttribute;
exports.SortUtil = SortUtil;
exports.StandardRow = StandardRow;