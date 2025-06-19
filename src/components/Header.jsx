import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      style={{ backgroundImage: "linear-gradient(to right, #4880EC,#A24F2E)" }}
    >
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          <img
            width="40px"
            src="https://cdn-icons-png.flaticon.com/512/3767/3767036.png"
          />
          Wheather Aap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
