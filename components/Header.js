import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import {Link} from "../routes";

export default () => {
  return (
    <Menu borderless style={{backgroundColor:"teal"}}>
      <Link route="/">
        <a className="item" style={{paddingLeft:"15px", fontSize:"30px", color:"white"}}>
          <b>Gitchain</b>
        </a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/new">
          <a className="item" style={{fontSize:"20px", color:"white"}}>
            New Project
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
