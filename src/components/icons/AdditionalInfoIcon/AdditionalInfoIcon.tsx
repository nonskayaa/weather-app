import classes from "./AdditionalInfoIcon.module.css";

import { additionalInfoIconMapping } from "../../../constants/additionalInfoIconMapping";

type IconInfo = {
  amount: string;
  name: string;
};

export default function AdditionalInfoIcon({
  iconInfo,
}: {
  iconInfo: IconInfo;
}) {
  return (
    <div className={classes.additional_info__container}>
      <img
        src={additionalInfoIconMapping[iconInfo.name.toLocaleLowerCase()]}
        alt="weather icon"
        className={classes.additional_info_img}
      />
      <p className={classes.additional_info__amount}>{iconInfo.amount}</p>
      <p className={classes.additional_info__name}>{iconInfo.name}</p>
    </div>
  );
}
