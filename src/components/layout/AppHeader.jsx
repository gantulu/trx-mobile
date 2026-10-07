export default function AppHeader({ title = "TRX Mobile" }) {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <div className="app-header__brand" aria-label="TRX Mobile">
          <span className="app-header__logo" aria-hidden="true">TRX</span>
          <span className="app-header__title">{title}</span>
        </div>
        <div className="app-header__actions" aria-label="Header actions" />
      </div>
    </header>
  );
}
