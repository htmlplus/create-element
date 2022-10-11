import {
  customElement,
  extract,
  parse,
  read,
  style,
  validate
} from '@htmlplus/element/compiler/index.js';

export default [
  read(),
  parse(),
  validate(),
  extract(),
  style(),
  customElement()
];
