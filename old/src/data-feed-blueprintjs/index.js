/* eslint-disable */
import React, { useMemo, useCallback } from 'react';
import { Field } from 'redux-form';
import { InputGroup, MenuItem, ButtonGroup, Button } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';

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

var CurrentComponent = function (_a) {
    var restinput = _a.input, rest = __rest(_a, ["input"]);
    return React.createElement(InputGroup, __assign({}, restinput, rest));
};
var BpFilterTextField = function (_a) {
    var props = __rest(_a, []);
    return React.createElement(Field, __assign({ component: CurrentComponent }, props));
};

var BpFilterSearchField = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'search' : _b, placeholder = _a.placeholder, props = __rest(_a, ["name", "placeholder"]);
    return React.createElement(BpFilterTextField, __assign({ placeholder: placeholder || 'Search', leftIcon: "search", name: name }, props));
};

var OptionSelect = Select.ofType();
function getValue(option, valueField) {
    return option ? option[valueField || 'value'] : undefined;
}
var CurrentComponent$1 = function (_a) {
    var _b = _a.input, value = _b.value, onChange = _b.onChange, options = _a.options, placeholder = _a.placeholder, valueField = _a.valueField, renderItem = _a.renderItem;
    var activeItem = useMemo(function () {
        return options.find(function (x) { return getValue(x, valueField) === value; });
    }, [value]);
    var caption = useMemo(function () {
        return activeItem ? activeItem.text : placeholder || 'Select';
    }, [activeItem, placeholder]);
    var noResults = useMemo(function () {
        return React.createElement(MenuItem, { disabled: true, text: 'No Results' });
    }, []);
    var handleItemRenderer = useCallback(function (option, _a) {
        var handleClick = _a.handleClick, modifiers = _a.modifiers;
        if (!modifiers.matchesPredicate) {
            return null;
        }
        if (renderItem) {
            return renderItem({ item: option, onClick: handleClick, modifiers: modifiers });
        }
        return (React.createElement(MenuItem, { active: modifiers.active, disabled: modifiers.disabled, key: getValue(option, valueField), onClick: handleClick, text: option.text }));
    }, [valueField, renderItem]);
    var handleInterPredicate = useCallback(function (query, item) {
        return ("" + item.text.toLowerCase()).indexOf(query.toLowerCase()) >= 0;
    }, []);
    // const handleClose = useCallback((event: React.MouseEvent<HTMLElement>) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     onChange('');
    // }, []);
    return (React.createElement(OptionSelect, { items: options, activeItem: activeItem, filterable: false, itemRenderer: handleItemRenderer, itemPredicate: handleInterPredicate, onItemSelect: function (item) { return onChange(getValue(item, valueField)); }, noResults: noResults },
        React.createElement(ButtonGroup, { style: { width: '100%', display: 'flex' } },
            React.createElement(Button, { style: { flex: 1 }, alignText: "left", text: caption, rightIcon: "caret-down" }))));
};
var BpFilterSelectField = function (props) {
    return React.createElement(Field, __assign({ component: CurrentComponent$1 }, props));
};

var CurrentComponent$2 = function (_a) {
    var label = _a.label, _b = _a.input, inputValue = _b.value, inputName = _b.name, onChange = _b.onChange, options = _a.options, small = _a.small;
    var handleClick = useCallback(function (value) {
        onChange(value === inputValue ? '' : value);
    }, [inputValue]);
    return (React.createElement("div", { className: "df-bp-field-radio" },
        React.createElement("input", { type: "hidden", name: inputName, value: inputValue }),
        label ? React.createElement("div", { className: "df-bp-field-radio__label" }, label) : null,
        React.createElement(ButtonGroup, null, options.map(function (_a, i) {
            var value = _a.value, text = _a.text;
            return (React.createElement(Button, { small: small, key: i, onClick: function () { return handleClick(value); }, active: value === inputValue }, text));
        }))));
};
var BpFilterRadioField = function (props) {
    return React.createElement(Field, __assign({ component: CurrentComponent$2 }, props));
};

var BpFilterBoolField = function (props) {
    var yesNoOptions = useMemo(function () {
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
    return React.createElement(BpFilterRadioField, __assign({ options: yesNoOptions }, props));
};

export { BpFilterBoolField, BpFilterRadioField, BpFilterSearchField, BpFilterSelectField, BpFilterTextField };
