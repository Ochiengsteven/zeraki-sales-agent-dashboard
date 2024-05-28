import {
  faChalkboardUser,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidenav, Nav } from "rsuite";

const Desktopnav = () => {
  return (
    <div style={{ width: 200 }} className="h-screen">
      <Sidenav className="h-screen absolute left-0 top-0">
        <Sidenav.Body>
          <Nav>
            <h1 className="text-3xl px-6 text-center">ZERAKI</h1>
            <hr />
            <Nav.Item eventKey="1">
              <FontAwesomeIcon icon={faSquarePollVertical} className="mr-2" />
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2">
              <FontAwesomeIcon icon={faChalkboardUser} className="mr-2" />
              Schools
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Desktopnav;
