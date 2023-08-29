import MyMission from './MyMission';
import MyRockets from './MyRockets';
import '../styles/MyProfile.css';

function MyProfile() {
  return (
    <section id="profile">
      <MyMission />
      <MyRockets />
    </section>
  );
}

export default MyProfile;
