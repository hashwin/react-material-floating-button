"use strict";

var React = require("react");
var classnames = require("classnames");

var ChildButton = React.createClass({
  displayName: "ChildButton",

  handleOnClick: function handleOnClick() {
    if (this.props.disabled === true) {
      return;
    }

    this.props.onClick();
  },

  render: function render() {
    var iconClass = classnames("mfb-component__child-icon", this.props.iconClass);
    var className = classnames("mfb-component__button--child", this.props.className, { "mfb-component__button--disabled": this.props.disabled });
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: this.props.href,
          "data-mfb-label": this.props.label,
          onClick: this.handleOnClick,
          className: className },
        React.createElement(
          "i",
          { className: iconClass },
          this.props.icon
        )
      )
    );
  }
});

module.exports = ChildButton;