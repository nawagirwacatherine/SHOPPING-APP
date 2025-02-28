const SearchFilter = ({search,setSearch,setCategory, sort,setSort}) =>{
return(
<div className="search-filter">
    <input type="text" 
    placeholder="search products"
    value={search}
    
    onChange={(e) => setSearch(e.target.value)}/>
</div>
)
}