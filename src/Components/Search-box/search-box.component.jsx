import { Component } from "react";
import ApplyStyle from './search-box.style.module.css';

class SearchBox extends Component {
  render() {
    return (
      <input
          className={`${ApplyStyle['search-box']} ${this.props.className}`}
          type='search'
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox;