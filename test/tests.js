import 'angular';
import 'angular-mocks';

const tests = require.context('.', true, /\.spec$/);
tests.keys().forEach(tests);
