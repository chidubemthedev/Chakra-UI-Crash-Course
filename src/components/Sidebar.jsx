import { AtSignIcon, CalendarIcon, EditIcon, LinkIcon } from "@chakra-ui/icons";
import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing="4">
      <ListItem>
        <NavLink to="/">
          <LinkIcon as={CalendarIcon} color="white" mr="10px" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <LinkIcon as={EditIcon} color="white" mr="10px" />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <LinkIcon as={AtSignIcon} color="white" mr="10px" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
