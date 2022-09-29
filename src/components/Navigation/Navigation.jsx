import { Nav, NavigationLink } from "./Navigation.styled";

export default function Navigation() {
  return (
    <>
      <Nav>
        <li>
          <NavigationLink smooth to={"/#home"}>
            Home
          </NavigationLink>
        </li>
        <li>
          <NavigationLink smooth to={"/#about"}>
            About
          </NavigationLink>
        </li>
        <li>
          <NavigationLink smooth to={"/#cases"}>
            Cases
          </NavigationLink>
        </li>
        <li>
          <NavigationLink smooth to={"/#blog"}>
            Blog
          </NavigationLink>
        </li>
        <li>
          <NavigationLink smooth to={"/#contact"}>
            Contact
          </NavigationLink>
        </li>
      </Nav>
    </>
  );
}
