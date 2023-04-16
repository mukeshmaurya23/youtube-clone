import React from "react";

const commentList = [
  {
    name: "mukesh maurya",
    text: "Very Intresting Topic i Like it",
    date: "12/12/2020",
    replies: [
      {
        name: "Aman maurya",
        text: "Very Intresting ",
        date: "17/12/2020",
        replies: [
          {
            name: "om maurya",
            text: "Very Intresting ",
          },
          {
            name: "mukesh maurya",
            text: "padhai karo ",
          },
        ],
      },
      {
        name: "Aarush maurya",
        text: "Intresting Topic i Like it",
        date: "12/12/2020",
      },
      {
        name: "mukesh",
        text: "Very Intresting Topic i Like it",
        date: "12/12/2020",
      },
    ],
  },
  {
    name: "Sahil Gupta",
    text: "Very Intresting Topic i Like it",
    date: "12/12/2020",
    replies: [
      {
        name: "Aman maurya",
        text: "Very Intresting ",
        date: "17/12/2020",
        replies: [
          {
            name: "om maurya",
            text: "Very Intresting ",
          },
          {
            name: "mukesh maurya",
            text: "padhai karo ",
          },
        ],
      },
      {
        name: "Aarush maurya",
        text: "Intresting Topic i Like it",
        date: "12/12/2020",
        replies: [
          {
            name: "Sushma Sharma",
            text: "Very Intresting Topic i Like it",
            date: "12/12/2020",
            replies: [
              {
                name: "Aman",
                text: "Very Intresting Topic i Like it",
                date: "12/12/2020",
              },
            ],
          },
          {
            name: "Helloo Dev",
            text: "Very Intresting Topic i Like it",
            date: "12/12/2020",
          },
        ],
      },
      {
        name: "mukesh",
        text: "Very Intresting Topic i Like it",
        date: "12/12/2020",
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Very Intresting Topic i Like it",
    date: "12/12/2020",
    replies: [
      {
        name: "Aman maurya",
        text: "Very Intresting ",
        date: "17/12/2020",
        replies: [
          {
            name: "om maurya",
            text: "Very Intresting ",
          },
          {
            name: "mukesh maurya",
            text: "padhai karo ",
          },
        ],
      },
      {
        name: "Aarush maurya",
        text: "Intresting Topic i Like it",
        date: "12/12/2020",
      },
      {
        name: "mukesh",
        text: "Very Intresting Topic i Like it",
        date: "12/12/2020",
      },
    ],
  },
  {
    name: "Sushma Sharma",
    text: "Very Intresting Topic i Like it",
    date: "12/12/2020",
    replies: [
      {
        name: "Aman maurya",
        text: "Very Intresting ",
        date: "17/12/2020",
        replies: [
          {
            name: "om maurya",
            text: "Very Intresting ",
          },
          {
            name: "mukesh maurya",
            text: "padhai karo ",
          },
        ],
      },
      {
        name: "Aarush maurya",
        text: "Intresting Topic i Like it",
        date: "12/12/2020",
      },
      {
        name: "mukesh",
        text: "Very Intresting Topic i Like it",
        date: "12/12/2020",
      },
    ],
  },
  {
    name: "Nitish",
    text: "Very Intresting Topic i Like it",
    date: "12/12/2020",
    replies: [
      {
        name: "Aman maurya",
        text: "Very Intresting ",
        date: "17/12/2020",
        replies: [
          {
            name: "om maurya",
            text: "Very Intresting ",
          },
          {
            name: "mukesh maurya",
            text: "padhai karo ",
          },
        ],
      },
      {
        name: "Aarush maurya",
        text: "Intresting Topic i Like it",
        date: "12/12/2020",
      },
      {
        name: "mukesh",
        text: "Very Intresting Topic i Like it",
        date: "12/12/2020",
      },
    ],
  },
  {
    name: "Satyam",
    text: "Very Intresting Topic i Like it",
    date: "12/12/2020",
    replies: [
      {
        name: "Aman maurya",
        text: "Very Intresting ",
        date: "17/12/2020",
        replies: [
          {
            name: "om maurya",
            text: "Very Intresting ",
          },
          {
            name: "mukesh maurya",
            text: "padhai karo ",
          },
        ],
      },
      {
        name: "Aarush maurya",
        text: "Intresting Topic i Like it",
        date: "12/12/2020",
      },
      {
        name: "mukesh",
        text: "Very Intresting Topic i Like it",
        date: "12/12/2020",
      },
    ],
  },
];
const CommentAllList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <>
            <div key={index}>
              <CommentData data={comment} />
            </div>
            <div className="ml-4">
              {comment.replies && <CommentAllList comments={comment.replies} />}
            </div>
          </>
        );
      })}
    </div>
  );
};
const CommentData = ({ data }) => {
  const { name, text, date } = data;
  return (
    <div className="border border-gray-300 rounded-md p-2 m-1">
      <div>
        <h3>
          <i className="fa fa-user" /> {name} <span>{date}</span>
        </h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="bg-gray-100 rounded-lg ">
      {/* <CommentData data={commentList[0]} /> */}
      <CommentAllList comments={commentList} />
    </div>
  );
};

export default Comment;
