import React, { FC, useState } from "react";
import { SidebarItem } from "../../model/Sidebaritem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { background } from "@chakra-ui/react";
import Dasboard from "./Dasboard";

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  margin-left:1rem;
  color: white;

  &:hover{
    background-color:#1d1d21;
    border-left: 4px solid #6d44dc;
  }

`;

const SidebarText = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  margin-right:7rem;
  color: white;

`;


const DropdownLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarLabel = styled.span`
  margin-left: 1rev;
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  

  return (
    <>
      <SidebarLink to={item.path} >
        <div>
          {item.icon}
          </div> 
        <SidebarText to={item.path}>
        <div>
      <SidebarLabel >{item.title}</SidebarLabel>
      </div>
       
      </SidebarText> 
      </SidebarLink>
      
    </>
  );
};

export default Submenu;
