import { useState, useRef, useCallback } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useHttpClient } from "./httpHook";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function useComments(idea) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [comments, setComments] = useState([]);
  const { fetchData } = useHttpClient();

  const fetchComments = useCallback(async () => {
    if (
      idea.comments.length === 0 ||
      idea?.comments?.[idea.comments.length - 1] ===
        comments?.[comments.length - 1]?._id
    )
      return;

    try {
      const responseData = await fetchData(
        `https://thoughts-backend-4tsi.onrender.com/api/ideas/${idea.id}/comments`
      );
      setComments(responseData.comments);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    }
  }, [fetchData, idea, comments]);

  const handleOpen = () => {
    fetchComments();
    onOpen();
  };

  return {
    isOpen,
    onOpen: handleOpen,
    onClose,
    btnRef,
    comments,
  };
}

export function useCommentForm(ideaId, onClose) {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const { user, token } = useAuth();
  const { fetchData, localError, isLoading } = useHttpClient();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetchData(
        `https://thoughts-backend-4tsi.onrender.com/api/ideas/${ideaId}/comment`,
        "POST",
        JSON.stringify({ content: comment, creator: user.id }),
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      );
      navigate("/");
    } catch (err) {
      // error handled in the httpHook
    } finally {
      toast({
        title: localError.current ? localError.current : "Commented",
        description: localError.current
          ? "Please try again."
          : "Your comment has been added.",
        duration: 3000,
        position: "top",
        variant: localError.current ? "left-accent" : "solid",
        status: localError.current ? "error" : "success",
      });
      if (!localError.current) {
        onClose();
      }
      localError.current = null;
      setComment("");
    }
  }

  return {
    comment,
    setComment,
    handleSubmit,
    isLoading,
  };
}
