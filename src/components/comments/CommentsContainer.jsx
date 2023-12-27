import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "Data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ className, logginedUserId }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState(null);
  console.log(comments);

  useEffect(() => {
    //next 2 lines are about function with manually call
    // const getComment = () => {};
    // getComment();

    //****************************** */

    //now i will declare a function that can call it self
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);
  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setAffectedComment(null);
    setComments((curState) => {
      return [newComment, ...curState];
    });
  };

  const updateCommentHandler = (value, commentId) => {
    const updatedState = comments.map((item) => {
      return item._id !== commentId ? item : { ...item, desc: value };
    });

    setComments(updatedState);
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    const updatedState = comments.filter(
      (comment) => comment._id !== commentId
    );
    setComments(updatedState);
    setAffectedComment(null);
  };

  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };
  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
function async() {
  throw new Error("Function not implemented.");
}
