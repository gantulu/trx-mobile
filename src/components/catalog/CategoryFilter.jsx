export default function CategoryFilter({ categories, value, onChange }) {
  return <section className="ui-section"><div className="ui-chip-row">{categories.map((category) => <button key={category} type="button" className={value === category ? "is-selected" : ""} onClick={() => onChange(category)}>{category}</button>)}</div></section>;
}