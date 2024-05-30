import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

function Profile() {
  return (
    <Tabs mt="40p" p="20px" color="textColor.100" variant="enclosed">
      <TabList maxW="520px">
        <Tab _selected={{ color: "white", bg: "primary.400" }}>
          Account Info
        </Tab>
        <Tab _selected={{ color: "white", bg: "primary.400" }}>
          Task History
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem impsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem impsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Profile;
