import React from "react";
import PropTypes from "prop-types";

import Item from "./Item.style";

const BASE_URL = "images/";
const getPath = img => `${BASE_URL}${img}`;

const ItemComponent = ({ img, title, description }) => {
  return (
    <Item.Container>
      <Item.Info>
        <Item.Title>{title}</Item.Title>
        <Item.Description>{description}</Item.Description>
      </Item.Info>
      <Item.Image src={getPath(img)} alt=" " />
    </Item.Container>
  );
};

ItemComponent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

ItemComponent.defaultProps = {
  description: ""
};

export default ItemComponent;
