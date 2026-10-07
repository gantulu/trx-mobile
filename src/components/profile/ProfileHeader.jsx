import { useProfile } from "../../hooks/useProfile";

export default function ProfileHeader() {
  const profile = useProfile();
  return <section className="ui-section"><div className="ui-avatar" aria-hidden="true">{profile.name.charAt(0)}</div><h1>{profile.name}</h1><p className="ui-muted">{profile.meta}</p></section>;
}