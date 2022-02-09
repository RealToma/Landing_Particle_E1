import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to={{pathname:"https://bscscan.com/token/0xE42F8Cb4acdE0C81202171a3faF7ED14a33AabeE?a=0xf3ad829adfb1c3c3fd97b6ba2d8288097fd3d1c6"}} target="_blank">Contact</Link>
        </li>
        <li>
          <Link to="/" target="_blank">About us</Link>
        </li>
        <li>
          <Link to="/">FAQ's</Link>
        </li>
        <li>
          <Link to="/">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;