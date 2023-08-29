import MyMission from './MyMission';
import MyRockets from './MyRockets';
import '../styles/MyProfile.css';

function MyProfile() {
  return (
    <section id="profile">
      <MyRockets />
      <MyMission />
    </section>
  );
}

export default MyProfile;
