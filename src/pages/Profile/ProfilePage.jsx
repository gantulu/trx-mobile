import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileSummary from "../../components/profile/ProfileSummary";
import ProfileMenu from "../../components/profile/ProfileMenu";
import AccountActions from "../../components/profile/AccountActions";
import profile from "../../components/undefined";

export default function ProfilePage() {
  return (
    <div className="page-composition">
      <ProfileHeader />
      <ProfileSummary />
      <ProfileMenu />
      <AccountActions />
      <profile />
    </div>
  );
}
