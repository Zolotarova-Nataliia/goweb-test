import { Nav, NavigationLink } from "./Navigation.styled";
export default function Navigation() {
  return (
    <>
      <Nav>
        <li>
          <NavigationLink>Home</NavigationLink>
        </li>
        <li>
          <NavigationLink>About</NavigationLink>
        </li>
        <li>
          <NavigationLink>Cases</NavigationLink>
        </li>
        <li>
          <NavigationLink>Blog</NavigationLink>
        </li>
        <li>
          <NavigationLink>Contact</NavigationLink>
        </li>
      </Nav>
    </>
  );
}
