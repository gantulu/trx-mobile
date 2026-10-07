import { Route, Routes } from "react-router";
import AppShell from "./layouts/AppShell";
import Standalone from "./layouts/Standalone";
import HomePage from "./pages/Home/HomePage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import TrackingPage from "./pages/Tracking/TrackingPage";
import PlaceholderPage from "./components/common/PlaceholderPage";

function StandalonePage({ children, action }) {
  return (
    <Standalone
      bottomActionBar={
        <button type="button" disabled>
          {action}
        </button>
      }
    >
      {children}
    </Standalone>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell><HomePage /></AppShell>} />
      <Route path="/catalog" element={<AppShell><CatalogPage /></AppShell>} />
      <Route path="/profile" element={<AppShell><ProfilePage /></AppShell>} />
      <Route path="/product/:productId" element={<StandalonePage action="Add to Cart"><ProductDetailPage /></StandalonePage>} />
      <Route path="/checkout" element={<StandalonePage action="Place Order"><CheckoutPage /></StandalonePage>} />
      <Route path="/tracking/:orderId" element={<StandalonePage action="Contact Support"><TrackingPage /></StandalonePage>} />
      <Route path="*" element={<AppShell><PlaceholderPage title="Page not found" description="The requested route does not exist." /></AppShell>} />
    </Routes>
  );
}
