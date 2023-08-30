import missionsReducer, { reserve, cancel } from '../redux/missions/missionSlice';

jest.mock('../redux/missions/missionSlice.js');

describe('Mission reducers testing', () => {
  it('Should reserve a mission', () => {
    const reducer = reserve(1);
    const state = missionsReducer(undefined, reducer);
    expect(state.missions[0].reserved).toBeTruthy();
  });

  it('Should cancel a mission', () => {
    const reducer = cancel(2);
    const state = missionsReducer(undefined, reducer);
    expect(state.missions[1].reserved).toBeFalsy();
  });
});
