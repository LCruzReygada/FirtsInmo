import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/pexels-pixabay-262347.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";
import SectionSearch from "./SectionSearch";
import SectionTitle from "./SectionTitle";
import CasaIcon from "../../assets/icon/CasaIcon";
import SectionMenu from "./SectionMenu";

const useStyles = makeStyles(styles);

export default function TransparentNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >       
        <Header
        brand="Navbar with profile"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Discover
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Wishlist
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.registerNavLink}
                onClick={e => e.preventDefault()}
                color="rose"
                round
              >
                Register
              </Button>
            </ListItem>
          </List>
        }
      />
    
      <SectionTitle/>
      <SectionMenu/>
        </div>
      </div>
    </div>
  );
}
