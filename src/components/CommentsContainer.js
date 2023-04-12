import React from "react";

const commentsData = [
  {
    name: "Akash Krishnan",
    text: "Lorem Ipsum Good Morning Very Good!",
    replies: [],
  },
  {
    name: "Akash Krishnan",
    text: "Lorem Ipsum Good Morning Very Good!",
    replies: [
      {
        name: "Akash Krishnan",
        text: "Lorem Ipsum Good Morning Very Good!",
        replies: [
          {
            name: "Akash Krishnan",
            text: "Lorem Ipsum Good Morning Very Good!",
            replies: [
              {
                name: "Akash Krishnan",
                text: "Lorem Ipsum Good Morning Very Good!",
                replies: [
                  {
                    name: "Akash Krishnan",
                    text: "Lorem Ipsum Good Morning Very Good!",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Akash Krishnan",
            text: "Lorem Ipsum Good Morning Very Good!",
            replies: [],
          },
          {
            name: "Akash Krishnan",
            text: "Lorem Ipsum Good Morning Very Good!",
            replies: [],
          },
          {
            name: "Akash Krishnan",
            text: "Lorem Ipsum Good Morning Very Good!",
            replies: [],
          },
        ],
      },
      {
        name: "Akash Krishnan",
        text: "Lorem Ipsum Good Morning Very Good!",
        replies: [],
      },
      {
        name: "Akash Krishnan",
        text: "Lorem Ipsum Good Morning Very Good!",
        replies: [],
      },
      {
        name: "Akash Krishnan",
        text: "Lorem Ipsum Good Morning Very Good!",
        replies: [],
      },
      {
        name: "Akash Krishnan",
        text: "Lorem Ipsum Good Morning Very Good!",
        replies: [],
      },
    ],
  },
  {
    name: "Akash Krishnan",
    text: "Lorem Ipsum Good Morning Very Good!",
    replies: [],
  },
  {
    name: "Akash Krishnan",
    text: "Lorem Ipsum Good Morning Very Good!",
    replies: [],
  },
  {
    name: "Akash Krishnan",
    text: "Lorem Ipsum Good Morning Very Good!",
    replies: [],
  },
  {
    name: "Akash Krishnan",
    text: "Lorem Ipsum Good Morning Very Good!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm rounded-lg p-5 my-5 bg-gray-100">
      <img
        className="w-12 h-12"
        alt="user"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAoAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwcBBQYEAv/EAD0QAAEDAwICBQgGCwEAAAAAAAABAgMEBREGIQcSEzFBUWEUIlJTcZGSoSOBgrHB0gglMzVCVHKDk+HiJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKEFTW0tIiLVVMMKL6yRG/eBOCCmraWrTNLUwzInq5Ed9xNlO8DIAAAAAAAAAAAAAAAAAAHxLIyGN0kjmsY1Muc5cIid6n2Vhxwu9Y222/TVrcvll6m6NcLjzEVNs+KqiL4ZA1t01jqPXl3ms2gE8lt8S8tRdXoqZ9i428Mbr4Hrt/BGzvXp7/AHO4XKremZHrJyIq/Nfep32k9PUemLFTWuhYnJE3z343kf2uXxVTcAVTcOCNnb9NYbnX22rZux/ScyIvyX3KeO2aw1JoS7Q2fX//AKbfMvLT3RiKuPauN/HO6eJcRp9V6fo9TWSotdcxOSVvmPRPOjf2OTxRQNrFI2WNr43NcxyIrXNXKKneh9lX8DrvVut1w01dFVayyz9GmVVfo1VURM9yKionhgtAAAAAAAAAAAAAAAAAAVJrTzuOOkmzfsUgyzPVzfSfjyltlV8b7fV00No1XbWK6os86LJj0FVF92Ux9oC00Mmt0/eaO/WemudA/ngqGI5O9q9rV8UXY2QAwpk1uoLzSWGz1N0r3oyCnYrl33cvYieKrsBW+ist45auSH9isGX46ubMf48xbRVfA6gq6mK76suTOWe8VCrH/QiqqqnhlcfZLUAAAAAAAAAAAAAAAAAENXTw1VNJT1MbZYZWqyRjkyjmr1opKrkTr2TvOJv/ABW0lZJn08te6qnZs6OkZz4Xu5ur5gcbNY9UcLblNXaZifdtOyu5paLdz4vdvt6SdnWh0Vq40aUrGIldLU2+dNnRzwquF7d25/A8C8eNM/yF1/xs/Oae4cUOHVzf0lx0vLUyenJRwq7382QOnuvGfSdIxW0MtTcJ12bHBCqZXs3dg52Cyan4p3GCu1PDJadOwu54aJMo+Xx3339JezqTtIrdxQ4dWuTpLdpeWmk9OOihR3v5sm3TjxpnO9DdE/ts/MBaNLTQ0tPFBTxtjiiajWMYmEaiJhEQmOHsPFfSN7nZTx17qWd64ayrZ0eV7ubq+Z27XI5MpugGQAAAAAAAAAAAAAwvUZIK6byaiqJ0TKxRufj2JkCp9cXi6621U7ROmp1go4P3nVtXbHa3PcmcY7V9h2mleH+ndNU7I6O3xSzonn1NQ1HyPXvyvV7EOU/R9oc6cuF5nXnrK+sdzyqm6o3/AKVylrAReTU/qIvgQeTQeoi+BCUAReTQeoi+BDC0tOvXBF8CEwA5TVWgNO6lpnsrLfHFUKi8lTTtRkjF78p1+xTitDXe7aI1S3Q+pJ1mo5k/VdW7qx/C3PcuMY7F27S4Cqf0gqLl07brxAvR1dBWN6OVqbojv9o1QLWBBRTrU0cE6phZI2vVO7KZJwAAAAAAAAAAABd0woAEcEENPGkVPEyKNOprGo1E+pCQAAAAAAAEc8ENRGsdREyWNetr2o5F+pSQAETHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl ">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;