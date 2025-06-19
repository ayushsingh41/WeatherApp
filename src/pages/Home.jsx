import WheatherMain from "../components/WheatherMain/WheatherMain";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.Hm}>
      <WheatherMain />
    </div>
  );
};

export default Home;
