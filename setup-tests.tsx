import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
global.flushAwaitable = (doneCallback: Function) => {
    doneCallback();
    return new Promise(resolve => setImmediate(resolve));
};

const originalConsoleError = console.error;
console.error = (message) => {
    if (message.startsWith('Warning:')) {
        return;
    }
    originalConsoleError(message);
};

jest.mock('react-native-device-info', () => ({
    hasNotch: () => true
}));
jest.mock('react-native-vector-icons/Ionicons', () => ({}));

// React Navigation generates random React keys, which makes
// snapshot testing fail. Mock the randomness to keep from failing.
Date.now = jest.fn(() => 0);
