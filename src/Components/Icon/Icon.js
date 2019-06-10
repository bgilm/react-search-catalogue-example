import React from "react";
import PropTypes from "prop-types";

import { StyledIcon, StyledClickableIcon } from "./Icon.style";

const ClickableIcon = ({ disabled, hoverColor, name, onClick }) => (
  <StyledClickableIcon
    disabled={disabled}
    className="material-icons"
    hoverColor={hoverColor}
    onClick={onClick}
  >
    {name}
  </StyledClickableIcon>
);

const NormalIcon = ({ disabled, hoverColor, name }) => (
  <StyledIcon
    disabled={disabled}
    className="material-icons"
    hoverColor={hoverColor}
  >
    {name}
  </StyledIcon>
);

const Icon = props => {
  const { onClick } = props;

  return onClick ? <ClickableIcon {...props} /> : <NormalIcon {...props} />;
};

const iconProps = {
  disabled: PropTypes.bool,
  hoverColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Icon.propTypes = iconProps;
NormalIcon.propTypes = { ...iconProps };
ClickableIcon.propTypes = { ...iconProps };

Icon.defaultProps = {
  disabled: false,
  hoverColor: null,
  onClick: null
};

export default Icon;
