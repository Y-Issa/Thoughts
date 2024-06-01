import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

import AccountTab from "../components/profile/AccountTab";
import UserPostsTab from "../components/profile/UserPostsTab";
import EmptyProfile from "../components/profile/EmptyProfile";

function Profile() {
  const { isLoggedIn, user } = useAuth();

  return isLoggedIn ? (
    <Tabs mt="40p" p="20px" color="textColor.100" variant="enclosed">
      <TabList maxW="520px">
        <Tab _selected={{ color: "white", bg: "primary.400" }}>
          Account Info
        </Tab>
        <Tab _selected={{ color: "white", bg: "primary.400" }}>My Posts</Tab>
      </TabList>

      <TabPanels>
        <AccountTab user={user} />

        <UserPostsTab />
      </TabPanels>
    </Tabs>
  ) : (
    <EmptyProfile />
  );
}

export default Profile;
