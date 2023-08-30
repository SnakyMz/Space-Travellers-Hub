import { render } from '@testing-library/react';
import Rockets from '../components/Rockets.js';
import MyProfile from '../components/MyProfile.js';

jest.mock('../components/Rockets.js');
jest.mock('../components/MyProfile.js');

describe('Testing Rendering', () => {
  it('Should render Rockets section', () => {
    const rockets = render(<Rockets />);
    expect(rockets).toMatchSnapshot();
  });

  it('Should render MyProfile section', () => {
    const profile = render(<MyProfile />);
    expect(profile).toMatchSnapshot();
  });
});