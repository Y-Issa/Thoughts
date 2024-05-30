import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <List
      color="textColor.50"
      fontSize="1.2rem"
      display={{ base: "flex" }}
      flexDir={{ base: "row", md: "column" }}
      gap={5}
    >
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={EditIcon} />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
}

export default Sidebar;
