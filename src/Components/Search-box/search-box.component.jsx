import { Component } from "react";
import ApplyStyle from './search-box.style.module.css';

class SearchBox extends Component {
  render() {
    console.log(this.props);
    return (
      <input
          className={`${ApplyStyle[this.props.className[1]]} ${this.props.className[0]}`}
          type='search'
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox;