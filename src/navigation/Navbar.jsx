import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import DrawerLinks from "./DrawerLinks";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDarkMode } from "../contexts/DarkModeContext";

function Navbar() {
  const { isDark, toggleTheme } = useDarkMode();

  const toast = useToast();

  function showToast() {
    toast({
      title: "Logged out",
      description: "You have been logged out.",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }

  return (
    <Flex
      as="nav"
      p={{ base: "2px", md: "10px" }}
      mb="40px"
      alignItems="center"
      h="8vh"
    >
      <DrawerLinks />

      <Heading
        as="h1"
        color="textColor.50"
        fontSize={{ base: "l", sm: "larger", md: "4xl" }}
      >
        Dojo Tasks
      </Heading>

      <Spacer />

      <HStack spacing={{ base: "10px", md: "20px" }}>
        <Avatar name="Mario" bg="purple.100" src="/img/mario.png">
          <AvatarBadge w="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              🔥
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text display={{ base: "none", sm: "block" }} color="textColor.50">
          mario@netninja.dev
        </Text>
        <Button onClick={toggleTheme} bgColor="bgColor.400" color="primary.400">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Button bgColor="primary.400" color="white" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
