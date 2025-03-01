
import PropTypes from "prop-types";
import "./SearchFilter.css";

const SearchFilter = ({ search, setSearch, category, setCategory, sort, setSort }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Jerry">Jerry</option>
        <option value="Lotion">Lotion</option>
        <option value="Hair spray">Hair spray</option>
        <option value="Roll-on">Roll-on</option>
        <option value="body splash">body splash</option>
        <option value="Skin care">Skin care</option>
        <option value="Wig">Wig</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Price</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Alphabetical Order</option>
      </select>
    </div>
  );
};

SearchFilter.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
    setSort: PropTypes.func.isRequired,
  };

export default SearchFilter;