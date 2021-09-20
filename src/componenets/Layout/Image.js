import classes from "./Image.module.css";
import meals from "../../assets/meals.jpg";

const Image = (props) => {
  return (
    <div className={classes["main-image"]}>
      <img src={meals} alt="Food" />
    </div>
  );
};

export default Image;
