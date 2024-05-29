import {
  faChalkboardUser,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidenav, Nav } from "rsuite";
import { useNavigate } from "react-router-dom";

const Desktopnav = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: 200 }} className="h-screen">
      <Sidenav className="h-screen absolute left-0 top-0">
        <Sidenav.Body>
          <Nav>
            <h1 className="text-3xl px-6 text-left py-2 pl-14 mb-4">ZERAKI</h1>
            <Nav.Item eventKey="1" onSelect={() => navigate("/")}>
              <FontAwesomeIcon
                icon={faSquarePollVertical}
                className="mr-2 text-xl"
              />
              <span className="text-xl font-semibold">Dashboard</span>
            </Nav.Item>
            <Nav.Item eventKey="2" onSelect={() => navigate("/schools")}>
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="mr-2 text-xl"
              />
              <span className="text-xl font-semibold">Schools</span>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Desktopnav;
