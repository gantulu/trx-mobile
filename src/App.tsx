import { useState } from 'react'
import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'

type Product = {
  id: string
  name: string
  description: string
  image: string
  price: number
  category: string
  rating: number
}

const products: Product[] = [
  { id: '1', name: 'TRX Essential Tee', description: 'Clean everyday cotton tee for the TRX lifestyle.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80', price: 129000, category: 'Apparel', rating: 4.8 },
  { id: '2', name: 'TRX Runner', description: 'Lightweight footwear designed for everyday movement.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', price: 699000, category: 'Footwear', rating: 4.7 },
  { id: '3', name: 'TRX Carry Bag', description: 'Compact utility bag for daily essentials.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', price: 249000, category: 'Accessories', rating: 4.6 },
  { id: '4', name: 'TRX Cap', description: 'Minimal six-panel cap with a structured fit.', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80', price: 99000, category: 'Accessories', rating: 4.5 },
]

const money = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value)

function AppHeader({ title }: { title: string }) {
  return <header className="app-header"><Link to="/" className="logo">TRX</Link><strong>{title}</strong><button className="icon-button" aria-label="Open notifications">•••</button></header>
}

function BottomNavigation() {
  return <nav className="bottom-nav" aria-label="Primary navigation">
    {[
      ['/', 'Home'], ['/catalog', 'Catalog'], ['/profile', 'Profile'],
    ].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><span>{label}</span></NavLink>)}
  </nav>
}

function AppShell({ children, title }: { children: React.ReactNode; title: string }) {
  return <div className="page"><AppHeader title={title} /><main className="content">{children}</main><BottomNavigation /></div>
}

function Standalone({ children, title }: { children: React.ReactNode; title: string }) {
  return <div className="page standalone-page"><AppHeader title={title} /><main className="content">{children}</main></div>
}

function Home() {
  return <AppShell title="TRX Mobile">
    <section className="hero">
      <div><span className="eyebrow">TRX COLLECTION</span><h1>Move with purpose.</h1><p>Discover essentials selected for your everyday journey.</p><Link className="button primary" to="/catalog">Explore catalog</Link></div>
    </section>
    <section><div className="section-head"><h2>Quick actions</h2></div><div className="quick-grid"><Link to="/catalog">Shop</Link><Link to="/profile">Profile</Link><Link to="/tracking/demo">Track order</Link></div></section>
    <ProductCollection title="Featured products" items={products.slice(0, 3)} />
    <section><div className="section-head"><h2>Promotion</h2></div><div className="promo"><strong>Free delivery</strong><span>On selected orders this week.</span></div></section>
    <section><div className="section-head"><h2>Recent activity</h2></div><div className="activity"><span>Order #TRX-1024</span><small>Delivered recently</small></div></section>
  </AppShell>
}

function ProductCollection({ title, items }: { title: string; items: Product[] }) {
  return <section><div className="section-head"><h2>{title}</h2><Link to="/catalog">See all</Link></div><div className="product-row">{items.map(product => <ProductCard key={product.id} product={product} />)}</div></section>
}

function ProductCard({ product }: { product: Product }) {
  return <Link to={`/product/${product.id}`} className="product-card"><img src={product.image} alt={product.name} /><div className="product-body"><span className="badge">{product.category}</span><strong>{product.name}</strong><span>{money(product.price)}</span></div></Link>
}

function Catalog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(products.map(p => p.category))]
  const filtered = products.filter(p => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()))
  return <AppShell title="Catalog">
    <section className="catalog-header"><h1>Catalog</h1><p>Find what fits your next move.</p></section>
    <div className="search"><span>⌕</span><input aria-label="Search products" placeholder="Search products" value={query} onChange={e => setQuery(e.target.value)} />{query && <button onClick={() => setQuery('')} aria-label="Clear search">×</button>}</div>
    <div className="chips">{categories.map(c => <button key={c} className={category === c ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>{c}</button>)}</div>
    {filtered.length ? <div className="product-grid">{filtered.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty">No products found.</div>}
  </AppShell>
}

function Profile() {
  return <AppShell title="Profile">
    <section className="profile-header"><div className="avatar">G</div><div><h1>Gantulu</h1><p>TRX member</p></div></section>
    <div className="summary"><div><strong>4</strong><span>Orders</span></div><div><strong>2</strong><span>Saved</span></div><div><strong>1</strong><span>Active</span></div></div>
    <section className="menu"><button>Personal information</button><button>Addresses</button><button>Payment methods</button><button>Notifications</button></section>
    <button className="button danger">Log out</button>
  </AppShell>
}

function ProductDetail() {
  const { productId } = useParams()
  const product = products.find(p => p.id === productId) ?? products[0]
  const navigate = useNavigate()
  return <Standalone title="Product">
    <img className="detail-image" src={product.image} alt={product.name} />
    <section className="detail-info"><span className="badge">{product.category}</span><h1>{product.name}</h1><div className="rating">★ {product.rating}</div><strong className="price">{money(product.price)}</strong><p>{product.description}</p></section>
    <section className="options"><h2>Options</h2><div className="option-row"><button className="option active">Default</button><button className="option">Gift wrap</button></div></section>
    <section className="info-card"><strong>Delivery</strong><span>Estimated 2–4 business days.</span></section>
    <div className="bottom-action"><button className="button secondary">Add to cart</button><button className="button primary" onClick={() => navigate('/checkout')}>Buy now</button></div>
  </Standalone>
}

function Checkout() {
  return <Standalone title="Checkout">
    <section><h1>Checkout</h1><div className="cart-item"><img src={products[0].image} alt="" /><div><strong>{products[0].name}</strong><span>Qty 1</span><strong>{money(products[0].price)}</strong></div></div></section>
    <section className="form-card"><h2>Shipping address</h2><div><strong>Home</strong><span>Gantulu · +62 812 0000 0000</span><span>Makassar, Indonesia</span></div></section>
    <section className="form-card"><h2>Delivery method</h2><button className="selection active">Standard · 2–4 days</button></section>
    <section className="form-card"><h2>Payment method</h2><button className="selection active">Cashless payment</button></section>
    <section className="order-summary"><h2>Order summary</h2><div><span>Subtotal</span><span>{money(products[0].price)}</span></div><div><span>Delivery</span><span>Free</span></div><div className="total"><strong>Total</strong><strong>{money(products[0].price)}</strong></div></section>
    <div className="bottom-action"><button className="button primary full" onClick={() => window.location.href = '/tracking/TRX-1024'}>Place order</button></div>
  </Standalone>
}

function Tracking() {
  return <Standalone title="Tracking">
    <section className="tracking-header"><span>ORDER #TRX-1024</span><h1>On the way</h1></section>
    <section className="status-card"><strong>Estimated delivery</strong><span>Today, 16:00–18:00</span></section>
    <section className="timeline">{['Order placed', 'Payment confirmed', 'Packed', 'Shipped', 'Delivered'].map((step, i) => <div className={i < 4 ? 'timeline-step done' : 'timeline-step'} key={step}><i /> <div><strong>{step}</strong><span>{i < 4 ? 'Completed' : 'Pending'}</span></div></div>)}</section>
    <section className="info-card"><strong>Delivery information</strong><span>Standard delivery · Home address</span></section>
    <section><h2>Order items</h2><div className="cart-item"><img src={products[0].image} alt="" /><div><strong>{products[0].name}</strong><span>Qty 1</span></div></div></section>
    <div className="bottom-action"><button className="button secondary">Contact support</button><Link className="button primary" to="/profile">View order</Link></div>
  </Standalone>
}

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/product/:productId" element={<ProductDetail />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/tracking/:orderId" element={<Tracking />} />
  </Routes>
}