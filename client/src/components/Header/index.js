import React from "react";
import { injectIntl } from "react-intl";
import { IntlPropType } from "../../constants";
import SelectLanguage from "../../containers/SelectLanguage";
import { StyledHeader, StyledHeaderWrap, StyledLogo } from "./styled";

const Header = ({ intl }) => {
  return (
    <StyledHeader>
      <StyledHeaderWrap>
        <StyledLogo data-text="logo">{intl.formatMessage({ id: "general.expenses" })}</StyledLogo>
        <SelectLanguage />
      </StyledHeaderWrap>
    </StyledHeader>
  );
};

Header.propTypes = {
  intl: IntlPropType
};

export default injectIntl(Header);
