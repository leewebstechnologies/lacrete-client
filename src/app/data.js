import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";
import seven from "../images/7.png";
import eight from "../images/8.png";
import nine from "../images/9.png";
import ten from "../images/10.png";
import banner1 from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import logo from "../images/logo.png";
import testimonial from "../images/testimonial3.jpg";
import avatar from "../images/avatar.png";

// import onevideo from "./video/one.mp4";
// import twovideo from "./video/two.mp4";
// import five from "../images/5.png";
// import six from "../images/6.png";
// import seven from "../images/7.png";
// import eight from "../images/8.png";
// import nine from "../images/9.png";
// import ten from "../images/10.png";

export const services = [
  {
    id: 1,
    name: "building&civildesign",
    title: "Building & Civil Design",
    desc: "For trips within a city or town",
    video: "../video/one.mp4",
    photo: one,
  },

  {
    id: 2,
    name: "building&civilconstruction",
    title: "Building & Civil Construction",
    desc: "For trips within a city or town",
    video: "../video/two.mp4",
    photo: two,
  },

  {
    id: 3,
    name: "buildingrenovation&maintenance",
    title: "Building Renovation & Maintenance",
    desc: "For trips within a city or town",
    // video: "two.mp4",
    photo: three,
  },

  {
    id: 4,
    name: "steelworks&planning",
    title: "Steel Works & Planning",
    desc: "For trips within a city or town",
    // video: "two.mp4",
    photo: four,
  },
];


export const projects = [
  {
    id: 1,
    title: "Mansion",
    category: "Completed Projects",
    image: one,
  },
  {
    id: 2,
    title: "Health Centre",
    category: "Ongoing Projects",
    image: two,
  },

  {
    id: 3,
    title: "School",
    category: "Designs",
    image: three,
  },
  {
    id: 4,
    title: "School",
    category: "Completed Projects",
    image: four,
  },

  {
    id: 5,
    title: "Mansion",
    category: "Ongoing Projects",
    image: five,
  },

  {
    id: 6,
    title: "Mansion",
    category: "Designs",
    image: six,
  },
];

export const users = [
  {
    id: 1,
    logo: logo,
    avatar: five,
    comment:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    name: "John Doe",
    title: "Executive Manager",
  },
  {
    id: 2,
    logo: logo,
    avatar: five,
    comment:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    name: "John Doe",
    title: "HR Manager",
  },
  {
    id: 3,
    logo: logo,
    avatar: five,
    comment:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    name: "John Doe",
    title: "HR Manager",
  },
];


export const team = [
  {
    id: 1,
    image: testimonial,
    name: "Azeez Adeyemi",
    position: "Founder & CEO",
  },
  {
    id: 2,
    image: testimonial,
    name: "Ali Ajibade",
    position: "Head of Architecture",
  },
  {
    id: 3,
    image: testimonial,
    name: "Adedotun Ajibade",
    position: "Construction Manager",
  },
];

export const review = [
  {
    id: 1,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Ademola Ajibade",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
  {
    id: 2,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Adeola Fayemi",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
  {
    id: 3,
    comment:
      "The service was absolutely fantastic! I was amazed by theattention to detail and the professionalism of the team. They delivered beyond my expectations",
    image: avatar,
    name: "Sharon Ajibade",
    position: "Marketing Director, TechCorp",
    rating: "★★★★★",
  },
];

export const posts = [
  {
    id: 1,
    title: "The Art of Mindful Living",
    summary: "Discover how mindfulness can transform your daily life.",
  },
  {
    id: 2,
    title: "Exploring the World through Travel",
    summary: "A journey through breathtaking destinations and hidden gems.",
  },
  {
    id: 3,
    title: "Healthy Recipes for a Better You",
    summary: "Tasty and nutritious recipes that are easy to make at home.",
  },
];


export const postDetails = [
  {
    id: 1,
    title: "The Art of Mindful Living",
    content: "Mindfulness is about living in the present moment...",
  },
  {
    id: 2,
    title: "Exploring the World through Travel",
    content: "Traveling opens up your mind to new experiences...",
  },
  {
    id: 3,
    title: "Healthy Recipes for a Better You",
    content: "Eating healthy doesn’t have to be boring or complicated...",
  },
];
