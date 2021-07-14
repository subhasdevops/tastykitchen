import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const {sortByOptions, activeOptionId, updateActiveOptionId} = props
  const onChangeSortBy = event => {
    updateActiveOptionId(event.target.value)
  }

  return (
    <div className="products-header">
      <div>
        <h1 className="products-list-heading">Popular Restaurants</h1>
        <p className="sub-heading">
          Select your favourite restaurant special dish and make your day happy
        </p>
      </div>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <h1 className="sort-by">Sort by</h1>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortBy}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
