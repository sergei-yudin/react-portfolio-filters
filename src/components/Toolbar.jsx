export default function Toolbar({ filters, selected, onSelectFilter }) {
  return <div className="toolbar">{filters.map((filter) => <button className={filter === selected ? 'filter filter--selected' : 'filter'} key={filter} type="button" onClick={() => onSelectFilter(filter)}>{filter}</button>)}</div>;
}
