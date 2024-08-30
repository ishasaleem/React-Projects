import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: flex-start; /* Align items to the top */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  user-select: none;

  a {
    color: inherit;
    text-decoration: none; /* Remove underline from links */
  }

  .navbar-items {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0; /* Remove margin if you want items flush with the edge */
    padding: 0; /* Remove padding if needed */

    &.nav-link {
      margin-right: 1rem;
      opacity: 0.8;
      padding: 1px solid transparent;
      border-radius: 3px;
      transition: all 0.2s ease;

      &:hover {
        border: 1px solid #ddd;
        background: #f5f5f5; /* Optional: Add a background color on hover */
      }

      &.active {
        background: #fff;
        color: black;
      }
    }
  }

  .showNavbar {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
