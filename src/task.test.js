import Task from './task.js';

require('jest-localstorage-mock');

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  localStorage.setItem.mockClear();
});

it('"Morning Session" was added to the collection', () => {
  const task = new Task();
  expect(task.addTask('Morning Session')).toBe('Morning Session');
});