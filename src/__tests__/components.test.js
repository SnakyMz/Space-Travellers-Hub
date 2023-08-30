import { render } from '@testing-library/react';
import Rockets from '../components/Rockets';
import MyProfile from '../components/MyProfile';
import Missions from '../components/Missions';
import Header from '../components/Header';

jest.mock('../components/Rockets.js');
jest.mock('../components/MyProfile.js');
jest.mock('../components/Header');
jest.mock('../components/Missions');

describe('Testing Rendering', () => {
  it('Should render Rockets section', () => {
    const rockets = render(<Rockets />);
    expect(rockets).toMatchSnapshot();
  });

  it('Should render MyProfile section', () => {
    const profile = render(<MyProfile />);
    expect(profile).toMatchSnapshot();
  });

  it('Should render Header section', () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });

  it('Should render Missions section', () => {
    const missions = render(<Missions />);
    expect(missions).toMatchSnapshot();
  });
});
