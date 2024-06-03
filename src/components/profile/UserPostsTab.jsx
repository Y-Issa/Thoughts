import { TabPanel } from "@chakra-ui/react";
import UserPosts from "./UserPosts";

function UserPostsTab() {
  return (
    <TabPanel px={0}>
      <UserPosts />
    </TabPanel>
  );
}

export default UserPostsTab;
