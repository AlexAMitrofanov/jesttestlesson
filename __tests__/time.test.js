import getTime from '../src/time.js';

test('time', () => {
  expect(getTime('hello')).toEqual('wrong value');
  expect(getTime(-10)).toEqual('wrong value');
  expect(getTime(100)).toEqual('01:40');
  expect(getTime(700)).toEqual('11:40');
  expect(getTime(1205)).toEqual('20:05');
  expect(getTime(1735)).toEqual('04:55');
});
