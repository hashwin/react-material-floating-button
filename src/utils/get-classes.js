'use strict';

var classnames = require('classnames');

function getClasses(props){
  return classnames({
    'mfb-zoomin': props.effect === 'zoomin',
    'mfb-slidein': props.effect === 'slidein',
    'mfb-fountain': props.effect === 'fountain',
    'mfb-component--tl': props.position === 'tl',
    'mfb-component--tr': props.position === 'tr',
    'mfb-component--bl': props.position === 'bl',
    'mfb-component--br': props.position === 'br'
  });
}

module.exports = getClasses;
