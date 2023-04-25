import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: centre;
  height: 3rem;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: black;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: centre;
  height: 5rem;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const NavIconin= styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: centre;
  height: 5rem;
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-left: 1rem;
  color:white;
`

const SidebarWrap = styled.div``;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: " " }}>
      <Nav>
        <NavIcon to="#" onClick={showSidebar}>
          <AiOutlineMenuFold />
        </NavIcon>
        
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIconin to="#" onClick={showSidebar}>
            <AiOutlineMenuUnfold />
            
          </NavIconin>
          
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
