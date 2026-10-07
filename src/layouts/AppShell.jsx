import AppHeader from "../components/layout/AppHeader";
import BottomNavigation from "../components/navigation/BottomNavigation";
import Overlay from "../components/overlay/Overlay";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <AppHeader />
      <main className="app-shell__main">{children}</main>
      <BottomNavigation />
      <Overlay />
    </div>
  );
}
