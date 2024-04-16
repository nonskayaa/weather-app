import classes from "./LogoTitle.module.css";

import union_icon from "../../assets/images/union_icon.png";

export default function LogoTitle() {
  return (
    <div className={classes.logo_title__container}>
      <h1 className={classes.title}>Weather app</h1>
      <img src={union_icon} alt="" className={classes.logo_icon} />
    </div>
  );
}
