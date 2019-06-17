import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
global.flushAwaitable = (doneCallback: Function) => {
    doneCallback();
    return new Promise(resolve => setImmediate(resolve));
};

jest.mock('react-native-device-info', () => ({
    hasNotch: () => true
}));
jest.mock('react-native-vector-icons/Ionicons', () => ({}));