"use strict";

var React = require("react");
var classnames = require("classnames");

var MainButton = React.createClass({
  displayName: "MainButton",

  getDefaultProps: function getDefaultProps() {
    return {
      href: "#",
      onClick: function onClick() {},
      iconResting: "",
      iconActive: "",
      label: null,
      iconRestingClass: "",
      iconActiveClass: ""
    };
  },
  render: function render() {
    var iconRestingClass = classnames("mfb-component__main-icon--resting", this.props.iconRestingClass);
    var iconActiveClass = classnames("mfb-component__main-icon--active", this.props.iconActiveClass);
    var mainClass = classnames("mfb-component__button--main", this.props.className);
    if (this.props.label) {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick, "data-mfb-label": this.props.label },
        React.createElement(
          "i",
          { className: iconRestingClass },
          this.props.iconResting
        ),
        React.createElement(
          "i",
          { className: iconActiveClass },
          this.props.iconActive
        )
      );
    } else {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick },
        React.createElement(
          "i",
          { className: iconRestingClass },
          this.props.iconResting
        ),
        React.createElement(
          "i",
          { className: iconActiveClass },
          this.props.iconActive
        )
      );
    }
  }
});

module.exports = MainButton;