import * as React from 'react';
import * as ReactDom from 'react-dom';
import NumberPicker from './components/NumberPicker';

ReactDom.render(<NumberPicker min={0}/>, document.getElementById('app'));