import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './filter.module.css';

class Filter extends Component {
  updateFilter = event => {
    this.props.onFilter(event.target.value);
  };

  render() {
    return (
      <div className={css.filter}>
        <label className={css.label} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          onChange={this.updateFilter}
          value={this.props.filter}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;