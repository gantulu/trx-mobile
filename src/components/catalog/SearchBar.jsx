export default function SearchBar({ value, onChange }) {
  return <label className="ui-search"><span className="sr-only">Search products</span><input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search products" /></label>;
}