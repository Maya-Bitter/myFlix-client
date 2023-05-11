import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyFlix
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  //   return (
  //     <Navbar>
  //       <Container>
  //         <Navbar.Brand as={Link} to="/">
  //           MyFlix
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse className="justify-content-end">
  //           <Nav className="me-auto">
  //             {!user && (
  //               <>
  //                 <Nav.Link as={Link} to="/login">
  //                   Login
  //                 </Nav.Link>
  //                 <Nav.Link as={Link} to="/signup">
  //                   Signup
  //                 </Nav.Link>
  //               </>
  //             )}
  //             {user && (
  //               <>
  //                 <Nav.Link as={Link} to="/profile">
  //                   Profile
  //                 </Nav.Link>
  //                 <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
  //               </>
  //             )}
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   );
};
