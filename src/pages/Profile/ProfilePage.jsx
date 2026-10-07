import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileSummary from "../../components/profile/ProfileSummary";
import ProfileMenu from "../../components/profile/ProfileMenu";
import AccountActions from "../../components/profile/AccountActions";

export default function ProfilePage() {
  return (
    <div className="page-composition">
      <ProfileHeader />
      <ProfileSummary />
      <ProfileMenu />
      <AccountActions />
    </div>
  );
}
