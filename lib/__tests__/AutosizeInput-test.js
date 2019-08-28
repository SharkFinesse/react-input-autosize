'use strict';
/* global describe, it, expect */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _AutosizeInput = require('../AutosizeInput');

var _AutosizeInput2 = _interopRequireDefault(_AutosizeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AutosizeInput test', function () {
	function logChange(val) {
		console.log('Selected: ' + val);
	}
	// Render an instance of the component
	var instance = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_AutosizeInput2.default, { onChange: logChange, value: 'test', inputClassName: 'testClass' }));

	var inputElement = _testUtils2.default.findRenderedDOMComponentWithTag(instance, 'input');
	it('should assign the given inputClassName', function () {
		expect(true).toEqual(true);
		expect(inputElement.className).toEqual('testClass');
	});
});