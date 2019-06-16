/// <reference path='./index.d.ts' />

import {Navigator} from './components/navigator';
import {createAppContainer} from 'react-navigation';

const App = createAppContainer(Navigator);
export default App;
