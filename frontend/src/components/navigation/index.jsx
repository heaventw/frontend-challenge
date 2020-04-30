import React, { useState } from 'react';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';
import {
  MdDehaze as BurgerIcon,
  MdClose,
  MdMail,
  MdBusinessCenter
} from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import LocaleSwitcher from '../../containers/locale-switcher';
import './index.scss';
import logo from './assets/logo.png';
import profilePhoto from './assets/vs.jpg';

const Navigation = ({ intl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const className = classnames('navigation', {
    'navigation--expanded': isExpanded
  });
  const logoAlt = intl.formatMessage({
    id: 'logo_alt'
  });
  const emailLabel = intl.formatMessage({
    id: 'email_me'
  });
  const cvLabel = intl.formatMessage({
    id: 'cv_label'
  });
  const linkedinLabel = intl.formatMessage({
    id: 'linkedin_label'
  });
  return (
    <nav className={className}>
      <button
        className="navigation__toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <MdClose /> : <BurgerIcon />}
      </button>
      <a href="/" aria-label="To Homepage" className="navigation__home-link">
        <img className="navigation__logo" alt={logoAlt} src={logo} />
      </a>
      <img
        className="navigation__user-photo"
        src={profilePhoto}
        alt="Vitaliy Stanyshevskyy"
      />
      <h3 className="navigation__user-name">Vitaliy Stanyshevskyy</h3>
      <ul className="navigation__user-contacts">
        <li className="navigation__user-contact">
          <a
            href="mailto:vitaliy.stanyshevskyy@gmail.com"
            aria-label={emailLabel}
          >
            <MdMail className="navigation__user-email-icon" />
          </a>
        </li>
        <li className="navigation__user-contact">
          <a
            href="https://docs.google.com/document/d/13xPDDYugeCrWdRtD6Owd0SvQQrMr_KoP9ScY9I4OvjM/edit?usp=sharing"
            aria-label={cvLabel}
          >
            <MdBusinessCenter />
          </a>
        </li>
        <li className="navigation__user-contact">
          <a
            href="https://www.linkedin.com/in/stanyshevskyy/"
            aria-label={linkedinLabel}
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
      <LocaleSwitcher />
    </nav>
  );
};

export default injectIntl(Navigation);
