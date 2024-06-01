import { TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";
import { EmailIcon, ChatIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";
import UpdateProfileInfo from "./UpdateProfileInfo";

function AccountTab({ user }) {
  return (
    <TabPanel>
      <List spacing={6} fontSize={{ base: "16px", md: "20px" }}>
        <ListItem>
          <ListIcon as={InfoIcon} />
          Name: {user.name}
        </ListItem>
        <ListItem>
          <ListIcon as={EmailIcon} />
          Email: {user.email}
        </ListItem>
        <ListItem>
          <ListIcon as={ChatIcon} />
          Bio:{" "}
          {user.bio
            ? user.bio
            : "Upload a bio. Just a few words about yourself. 🚀"}
        </ListItem>
        <ListItem>
          <ListIcon as={TimeIcon} />
          Joined on: {new Date(user.joined).toLocaleDateString()}
        </ListItem>
        <ListItem>
          <UpdateProfileInfo />
        </ListItem>
      </List>
    </TabPanel>
  );
}

export default AccountTab;
