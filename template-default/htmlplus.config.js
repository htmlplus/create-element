import { customElement, extract, parse, read, style, validate } from '@htmlplus/element/transformer.js';

export default [read(), parse(), validate(), extract(), style(), customElement()];
