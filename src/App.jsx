import { Routes, Route } from "react-router";
import AppShell from "./layouts/AppShell";
import Standalone from "./layouts/Standalone";
import PlaceholderPage from "./components/common/PlaceholderPage";

function AppPage({ title, description }) {
  return (
    <AppShell>
      <PlaceholderPage title={title} description={description} />
    </AppShell>
  );
}

function StandalonePage({ title, description, action }) {
  return (
    <Standalone bottomActionBar={action ? <button type="button">{action}</button> : null}>
      <PlaceholderPage title={title} description={description} />
    </Standalone>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppPage title="Home" description="Home page foundation. Page components will be implemented in Phase 3." />} />
      <Route path="/catalog" element={<AppPage title="Catalog" description="Catalog page foundation. Page components will be implemented in Phase 3." />} />
      <Route path="/profile" element={<AppPage title="Profile" description="Profile page foundation. Page components will be implemented in Phase 3." />} />
      <Route path="/product/:productId" element={<StandalonePage title="Product Detail" description="Product detail foundation." action="Add to Cart" />} />
      <Route path="/checkout" element={<StandalonePage title="Checkout" description="Checkout foundation." action="Place Order" />} />
      <Route path="/tracking/:orderId" element={<StandalonePage title="Tracking" description="Tracking foundation." action="Contact Support" />} />
      <Route path="*" element={<AppShell><PlaceholderPage title="Page not found" description="The requested route does not exist." /></AppShell>} />
    </Routes>
  );
}
