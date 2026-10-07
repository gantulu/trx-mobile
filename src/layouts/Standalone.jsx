import AppHeader from "../components/layout/AppHeader";

export default function Standalone({ children, bottomActionBar = null }) {
  return (
    <div className="standalone">
      <AppHeader />
      <main className="standalone__main">{children}</main>
      {bottomActionBar ? (
        <div className="standalone__bottom-action-bar">{bottomActionBar}</div>
      ) : null}
    </div>
  );
}
