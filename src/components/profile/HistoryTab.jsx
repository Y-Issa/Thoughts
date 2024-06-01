import { TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function HistoryTab() {
  return (
    <TabPanel>
      <List spacing={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal.400" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ListItem>
      </List>
    </TabPanel>
  );
}

export default HistoryTab;
