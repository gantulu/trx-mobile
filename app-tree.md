# TRX Mobile — App Structure Tree

> Version: 1.0  
> Type: Architectural Reference  
> Status: ACTIVE  
> Source: `blueprint.json` V1.1

## 1. Purpose

`app-tree.md` is the living architectural map of TRX Mobile.

It describes how the application is structured and how the structure may be expanded over time.

This document is a **reference**, not a claim that every node already exists in the source code.

### Status meanings

- **IMPLEMENTED** — currently represented in the repository.
- **PLANNED** — architectural target; not necessarily implemented.
- **IN PROGRESS** — currently being implemented.
- **DEPRECATED** — retained for historical/reference purposes only.

Never treat a PLANNED node as an implemented feature.

---

## 2. Current Architecture Tree

```text
TRX Mobile
│
├── App
│   │
│   ├── AppShell
│   │   ├── Header
│   │   │   └── AppHeader
│   │   ├── Main
│   │   │   ├── Home
│   │   │   ├── Catalog
│   │   │   └── Profile
│   │   ├── BottomNavigation
│   │   │   ├── Home
│   │   │   ├── Catalog
│   │   │   └── Profile
│   │   └── Overlay
│   │       ├── Modal
│   │       ├── Drawer
│   │       ├── Toast
│   │       └── Loading
│   │
│   └── Standalone
│       ├── Header
│       │   └── AppHeader
│       ├── Main
│       │   ├── ProductDetailPage
│       │   ├── CheckoutPage
│       │   └── TrackingPage
│       └── BottomActionBar
│           ├── ProductDetailActionBar
│           ├── CheckoutActionBar
│           └── TrackingActionBar
│
├── Pages
│   ├── Home
│   ├── Catalog
│   ├── Profile
│   ├── ProductDetailPage
│   ├── CheckoutPage
│   └── TrackingPage
│
├── Components
│   ├── Navigation
│   ├── Product
│   ├── Catalog
│   ├── Profile
│   ├── Checkout
│   ├── Tracking
│   ├── Feedback
│   └── Overlay
│
├── Features
│   ├── Product
│   ├── Cart
│   ├── Checkout
│   ├── Order
│   ├── Tracking
│   └── Account
│
├── Data
│   ├── Products
│   ├── Cart
│   ├── Addresses
│   ├── Orders
│   └── TrackingEvents
│
├── State
│   ├── Global
│   ├── Cart
│   ├── Checkout
│   ├── Order
│   └── UI / Overlay
│
├── Services
│   ├── ProductService
│   ├── CartService
│   ├── CheckoutService
│   ├── OrderService
│   └── TrackingService
│
├── Hooks
│   ├── Product
│   ├── Cart
│   ├── Checkout
│   ├── Order
│   └── UI
│
└── Utils
    ├── Formatting
    ├── Validation
    ├── Navigation
    └── Helpers
```

---

## 3. App Shell

### AppShell — IMPLEMENTED

Primary application shell for the main navigation experience.

```text
AppShell
├── Header
├── Main
│   ├── Home
│   ├── Catalog
│   └── Profile
├── BottomNavigation
└── Overlay
    ├── Modal
    ├── Drawer
    ├── Toast
    └── Loading
```

**Rules**

- AppShell has a header.
- AppShell does not have a BottomActionBar.
- Main pages use BottomNavigation.
- Overlay belongs to the application shell.
- AppShell structure must remain compatible with `blueprint.json`.

---

## 4. Standalone

### Standalone — IMPLEMENTED

Used for focused flows outside the primary bottom-navigation experience.

```text
Standalone
├── Header
├── Main
│   ├── ProductDetailPage
│   ├── CheckoutPage
│   └── TrackingPage
└── BottomActionBar
```

**Rules**

- Standalone has a header.
- Standalone has a BottomActionBar.
- Standalone pages do not use BottomNavigation.
- Each standalone page may define its own action bar.
- Standalone structure must remain compatible with `blueprint.json`.

---

## 5. Pages

### Home — IMPLEMENTED

```text
Home
├── HomeHero
├── QuickActions
├── FeaturedProducts
├── PromotionSection
└── RecentActivity
```

### Catalog — IMPLEMENTED

```text
Catalog
├── CatalogHeader
├── CategoryFilter
├── SearchBar
├── ProductGrid
└── CatalogEmptyState
```

### Profile — IMPLEMENTED

```text
Profile
├── ProfileHeader
├── ProfileSummary
├── ProfileMenu
└── AccountActions
```

### ProductDetailPage — IMPLEMENTED

```text
ProductDetailPage
├── ProductGallery
├── ProductInfo
├── ProductOptions
├── ProductDescription
├── ProductDeliveryInfo
└── ProductDetailActionBar
    ├── AddToCart
    └── BuyNow
```

### CheckoutPage — IMPLEMENTED

```text
CheckoutPage
├── CheckoutSummary
├── ShippingAddress
├── DeliveryMethod
├── PaymentMethod
├── OrderSummary
└── CheckoutActionBar
    └── PlaceOrder
```

### TrackingPage — IMPLEMENTED

```text
TrackingPage
├── TrackingHeader
├── OrderStatus
├── TrackingTimeline
├── DeliveryInformation
├── OrderItems
└── TrackingActionBar
    ├── ContactSupport
    └── ViewOrder
```

> Page presence is based on the current application structure. Individual interactions and production data behavior are separate implementation concerns.

---

## 6. Component Domains

### Navigation

```text
Navigation
├── AppHeader
├── BottomNavigation
└── BottomActionBar
```

### Product

```text
Product
├── ProductGallery
├── ProductCard
├── ProductInfo
├── ProductOptions
├── ProductDescription
└── ProductDeliveryInfo
```

### Catalog

```text
Catalog
├── CatalogHeader
├── CategoryFilter
├── SearchBar
├── ProductGrid
└── CatalogEmptyState
```

### Profile

```text
Profile
├── ProfileHeader
├── ProfileSummary
├── ProfileMenu
└── AccountActions
```

### Checkout

```text
Checkout
├── CheckoutSummary
├── ShippingAddress
├── DeliveryMethod
├── PaymentMethod
└── OrderSummary
```

### Tracking

```text
Tracking
├── TrackingHeader
├── OrderStatus
├── TrackingTimeline
├── DeliveryInformation
└── OrderItems
```

### Feedback / Overlay

```text
Feedback
├── Modal
├── Drawer
├── Toast
└── Loading
```

---

## 7. Feature Architecture

Features are the preferred expansion boundary when the application becomes more complex.

```text
Features
├── Product
│   ├── Browse
│   ├── Detail
│   └── Options
│
├── Cart
│   ├── Items
│   ├── Quantity
│   └── Persistence
│
├── Checkout
│   ├── Address
│   ├── Delivery
│   ├── Payment
│   └── OrderSummary
│
├── Order
│   ├── Create
│   ├── Status
│   └── History
│
├── Tracking
│   ├── Timeline
│   └── Delivery
│
└── Account
    ├── Profile
    └── Settings
```

Feature nodes are **PLANNED** unless explicitly implemented and verified in the repository.

---

## 8. Data Architecture

The blueprint defines these domain models:

```text
Data
├── Product
│   ├── id
│   ├── name
│   ├── description
│   ├── image
│   ├── price
│   ├── category
│   └── rating
│
├── CartItem
│   ├── productId
│   ├── quantity
│   ├── price
│   └── options
│
├── Address
│   ├── id
│   ├── name
│   ├── phone
│   ├── address
│   ├── city
│   └── postalCode
│
├── Order
│   ├── id
│   ├── items
│   ├── address
│   ├── deliveryMethod
│   ├── paymentMethod
│   ├── total
│   └── status
│
└── TrackingEvent
    ├── id
    ├── status
    ├── title
    ├── description
    └── timestamp
```

The existence of a model in this tree does **not** mean that a production data source currently exists.

---

## 9. State Architecture

```text
State
├── Global
│   ├── loading
│   ├── error
│   ├── success
│   └── empty
│
├── Page
│   ├── idle
│   ├── loading
│   ├── ready
│   ├── error
│   └── empty
│
├── Overlay
│   ├── closed
│   ├── modal
│   ├── drawer
│   ├── toast
│   └── loading
│
├── Form
│   ├── idle
│   ├── editing
│   ├── submitting
│   ├── success
│   └── error
│
└── Order
    ├── draft
    ├── pending
    ├── paid
    ├── processing
    ├── shipped
    ├── delivered
    └── cancelled
```

State architecture is **PLANNED** where it is not yet represented by dedicated state modules.

---

## 10. Expansion Rules

When expanding the application:

1. Inspect the current repository before adding a node.
2. Check whether the node already exists under another name.
3. Preserve the existing AppShell / Standalone boundary.
4. Add new functionality to the smallest appropriate domain.
5. Do not move existing pages/components solely to make the tree look cleaner.
6. Do not mark a node IMPLEMENTED until repository state confirms it.
7. Update this tree when architecture changes.
8. Keep `blueprint.json` and `app-tree.md` consistent.
9. Use versioning for meaningful architectural changes.
10. Never treat this document as proof of runtime behavior.

---

## 11. Blueprint Relationship

```text
blueprint.json
    │
    ├── UI structure
    ├── Pages
    ├── Components
    ├── Routes
    ├── States
    ├── Data Models
    └── Rules
          │
          ▼
app-tree.md
    │
    ├── Architectural hierarchy
    ├── Domain boundaries
    ├── Expansion map
    ├── Implementation status
    └── Future structure
          │
          ▼
src/
    │
    └── Actual implementation
```

**Source-of-truth principle:**

- Repository implementation = actual implementation truth.
- `blueprint.json` = UI/structure specification.
- `app-tree.md` = architectural reference.
- If they diverge, report the divergence before making consequential changes.

---

## 12. Recommended Future Source Structure

When the application requires further separation, the preferred direction is:

```text
src/
├── components/
├── layouts/
├── pages/
├── features/
├── data/
├── state/
├── services/
├── hooks/
├── utils/
└── App.tsx
```

This is a **future architecture target**, not an instruction to refactor immediately.

---

## 13. Architecture Evolution

### V1 — Current Foundation

```text
App
├── AppShell
└── Standalone
```

### V2 — Domain Separation

```text
App
├── AppShell
├── Standalone
├── Components
└── Features
    ├── Product
    ├── Cart
    ├── Checkout
    └── Tracking
```

### V3 — Application Services

```text
App
├── AppShell
├── Standalone
├── Components
├── Features
├── State
├── Services
└── Data
```

### V4 — Production Architecture

```text
App
├── Presentation
├── Features
├── State
├── Domain / Data
├── Services
├── Infrastructure
└── Tests
```

Evolution must be incremental. Do not perform a broad rewrite solely because a later version of the tree exists.

---

## 14. Version History

| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-10-08 | Initial extensible architectural tree created from blueprint V1.1 |

---

## 15. Current Status

**Architecture Reference:** ACTIVE

**Implementation:** V1 foundation

**Next recommended evolution:** Domain/component separation, followed by state and data architecture.

**Important:** This file is a living reference. Update it whenever the application's verified architecture materially changes.
