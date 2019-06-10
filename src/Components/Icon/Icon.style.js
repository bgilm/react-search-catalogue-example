import styled, { css } from "styled-components";
import Colors from "../../utils/Colors";

const DEFAULT_HOVER_COLOR = Colors.black;

const applyRulesIf = (condition, rules) => {
  return condition ? rules : null;
};

const disabledRules = css`
  color: rgba(0, 0, 0, 0.3);
  pointer-events: none;
`;

const hoverRules = color => css`
  color: ${color || DEFAULT_HOVER_COLOR};
`;

const getDisabledRules = ({ disabled }) =>
  applyRulesIf(disabled, disabledRules);

const getHoverRules = ({ hoverColor }) => hoverRules(hoverColor);

const StyledIcon = styled.i`
  ${getDisabledRules};
  &:hover {
    ${getHoverRules};
  }
`;

const StyledClickableIcon = styled(StyledIcon)`
  cursor: pointer;
`;

export { StyledClickableIcon, StyledIcon };
