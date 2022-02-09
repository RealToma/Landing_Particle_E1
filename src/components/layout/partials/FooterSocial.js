import React from 'react';
import classNames from 'classnames';
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a target={"_blank"} rel="noopener noreferrer" href="https://twitter.com/rogancoin1">
            <FaTwitter size={"24px"} color='#ACADFF'></FaTwitter>
          </a>
        </li>
        <li>
          <a target={"_blank"} rel="noopener noreferrer" href="https://t.me/rogancoin">
            <FaTelegram size={"24px"} color='#ACADFF'></FaTelegram>
          </a>
        </li>
        <li>
          <a target={"_blank"} rel="noopener noreferrer" href="https://discord.com/invite/uVBZmZSStS">
            <FaDiscord size={"24px"} color='#ACADFF'></FaDiscord>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;