// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Stories } from "@/types/stories";
import type { NextApiRequest, NextApiResponse } from "next";

const storiesData: Stories = [
  {
    userName: "Ben Ten",
    userPicture: "https://i.imgur.com/CzXTtJV.jpg",
    stories: [
      "https://plus.unsplash.com/premium_photo-1693227521269-d90b70e3ee06?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675419532425-e6b52fe24dc5?q=80&w=3574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    userName: "Super Man",
    userPicture: "https://i.imgur.com/OB0y6MR.jpg",
    stories: [
      "https://images.unsplash.com/photo-1568650041055-93e9e68cc98a?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    userName: "Spider Man",
    userPicture:
      "https://farm3.staticflickr.com/2378/2178054924_423324aac8.jpg",
    stories: [
      "https://plus.unsplash.com/premium_photo-1680807869086-e08309acfb24?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    userName: "Thor Odinson",
    userPicture:
      "https://farm3.staticflickr.com/2378/2178054924_423324aac8.jpg",
    stories: [
      "https://images.unsplash.com/photo-1576086476234-1103be98f096?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    userName: "Black Panther",
    userPicture:
      "https://farm4.staticflickr.com/3049/2327691528_f060ee2d1f.jpg",
    stories: [
      "https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=80&w=3287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    userName: "Iron Man",
    userPicture:
      "https://farm3.staticflickr.com/2042/2203964933_f1b80a18ba.jpg",
    stories: [
      "https://images.unsplash.com/photo-1583912267856-1fcdf6e0a1f9?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518826778770-a729fb53327c?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stories>
) {
  res.status(200).json(storiesData);
}
