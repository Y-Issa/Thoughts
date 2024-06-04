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
        color="primary.400"
        onClick={onOpen}
        display={{ md: "none" }}
      >
        <HamburgerIcon boxSize="25px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary.400">
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
