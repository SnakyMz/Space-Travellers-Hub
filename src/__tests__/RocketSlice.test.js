import rocketsReducer, { reserveRocket, cancelRocket } from '../redux/rockets/rocketSlice';

jest.mock('../redux/rockets/rocketSlice');

describe('Rocket reducers testing', () => {
  it('Should reserve a rocket', () => {
    const reducer = reserveRocket(1);
    const state = rocketsReducer(undefined, reducer);
    expect(state.rockets[0].reserved).toBeTruthy();
  });

  it('Should cancel a rocket', () => {
    const reducer = cancelRocket(2);
    const state = rocketsReducer(undefined, reducer);
    expect(state.rockets[1].reserved).toBeFalsy();
  });
});
