import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import Sidebar from "./Sidebar";

function DrawerLinks() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <>
      <Button
        variant="ghost"
        colorScheme="purple"
        onClick={onOpen}
        display={{ md: "none" }}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="purple.400">
          {/* <DrawerCloseButton color="white" /> */}
          <DrawerHeader>
            <Button variant="unstyled" onClick={onClose}>
              <Sidebar />
            </Button>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerLinks;
