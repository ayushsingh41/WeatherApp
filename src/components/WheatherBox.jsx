// eslint-disable-next-line react/prop-types
import style from "./WheatherBox.module.css";
const WheatherBox = ({ weather }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  return (
    <>
      {weather && (
        <div className={style.ele}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            {" "}
            <h1>
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/3474/3474041.png"
                width="45px"
              />
              {weather.name}, {weather.sys.country}
            </h1>
            <span style={{ marginLeft: "40px" }}>{today}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "10px",
            }}
          >
            <span>
              {" "}
              <img
                width="30px"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Thermometer_icon.png/768px-Thermometer_icon.png"
              />{" "}
              Temperature: {weather.main.temp - 273} C
            </span>
            <span>
              <img
                width="30px"
                src="https://cdn-icons-png.flaticon.com/512/4810/4810152.png"
              />
              Description: {weather.weather[0].description}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "10px",
            }}
          >
            <span>
              {" "}
              <img
                width="30px"
                src="https://static.vecteezy.com/system/resources/thumbnails/011/652/634/small/humidity-3d-render-icon-illustration-png.png"
              />
              Humidity :{weather.main.humidity}%
            </span>
            <span>
              <img
                width="30px"
                src="https://cdn-icons-png.flaticon.com/512/1839/1839341.png"
              />
              pressure :{weather.main.pressure} hPa
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "10px",
            }}
          >
            <span>
              <img
                width="30px"
                src="https://static.thenounproject.com/png/4256820-200.png"
              />
              Wind speed :{weather.wind.speed}
            </span>
            <span>
              <img
                width="40px"
                src="https://cdn-icons-png.flaticon.com/512/1850/1850730.png"
              />
              Cloudiness :{weather.clouds.all}%
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default WheatherBox;
