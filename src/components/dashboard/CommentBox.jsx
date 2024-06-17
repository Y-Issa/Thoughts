import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Spacer,
} from "@chakra-ui/react";

function CommentBox({ comment }) {
  if (!comment) return null;
  return (
    <Card bg="bgColor.50" color="textColor.100">
      <CardHeader py="5px">
        <HStack>
          <span>{comment?.creator.name} wrote:</span>
          <Spacer />
          <span
            style={{
              fontSize: "12px",
              color: "textColor.200",
            }}
          >
            on: {new Date(comment?.created).toLocaleString()}
          </span>
        </HStack>
      </CardHeader>
      <Divider borderColor="textColor.800" />
      <CardBody>{comment?.content}</CardBody>
    </Card>
  );
}

export default CommentBox;
