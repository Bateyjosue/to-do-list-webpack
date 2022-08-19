import Task from './task.js';

require('jest-localstorage-mock');

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  localStorage.setItem.mockClear();
});
describe('Add and Remove Task on the list of tasks', () => {
  const task = new Task();
  it('"Morning Session" was added to the collection', () => {
    expect(task.addTask('Morning Session')).toBe('Morning Session');
  });

  test('Remove ', () => {
    task.addTask('Morning Prayer');
    expect(task.removerTask(0)).toBe(task.tasks[0]);
  });
});

describe('Edit Task Testing', () => {
  const task = new Task();
  test('Should update the collection "0" to "Morning Session"', () => {
    expect(task.editTask(0, 'Morning Session')).toBe(task.tasks[0]);
  });
  test('Should update the collection "1" to "Morning Prayer"', () => {
    expect(task.editTask(1, 'Morning Prayer')).toBe(task.tasks[1]);
  });
});