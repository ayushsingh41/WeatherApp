import { Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ButtonCom = ({ clickHandler }) => {
  return (
    <Button variant="success" onClick={clickHandler} style={{ width: "100px" }}>
      Check
    </Button>
  );
};

export default ButtonCom;
