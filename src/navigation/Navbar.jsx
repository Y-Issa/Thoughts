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

function Navbar() {
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
    <Flex as="nav" p="10px" mb="40px" alignItems="center" h="8vh">
      <DrawerLinks />

      <Heading as="h1">Dojo Tasks</Heading>

      <Spacer />

      <HStack spacing="20px">
        <Avatar name="Mario" bg="purple.100" src="/img/mario.png">
          <AvatarBadge w="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              🔥
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
