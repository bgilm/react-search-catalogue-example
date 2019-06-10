import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Colors from "../../utils/Colors";

import SearchBar from "./SearchBar.style";

const SearchBarComponent = ({
  fontColor,
  placeholderText,
  searchText,
  setSearchText
}) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <SearchBar.Container fontColor={fontColor}>
      <SearchBar.Header>
        <SearchBar.IconContainer>
          <Icon hoverColor={fontColor} name="search" />
        </SearchBar.IconContainer>
        <SearchBar.InputContainer>
          <form onSubmit={handleSubmit}>
            <SearchBar.Input
              type="text"
              placeholder={placeholderText}
              fontColor={fontColor}
              value={searchText}
              onChange={handleChange}
              tabIndex={0}
            />
          </form>
        </SearchBar.InputContainer>
      </SearchBar.Header>
    </SearchBar.Container>
  );
};

SearchBarComponent.propTypes = {
  fontColor: PropTypes.string,
  placeholderText: PropTypes.string,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func
};

SearchBarComponent.defaultProps = {
  fontColor: Colors.font.main,
  placeholderText: "Search...",
  searchText: "",
  setSearchText: () => {}
};

export default SearchBarComponent;
