import images from "./src/assets/images.js";
/*
import jeremyImg from "/src/assets/jeremy.jpg";
import abdulkareemImg from "/src/assets/abdulkareem.jpg";
import susanImg from "/src/assets/susan.jpg";
import alexaImg from "/src/assets/alexa.jpg";
import jansenImg from "/src/assets/jansen.jpg";
import muhammadImg from "/src/assets/muhammad.jpg";
import alexanderImg from "/src/assets/alexander.jpg";
import naomiImg from "/src/assets/naomi.jpg";
import pauloImg from "/src/assets/paulo.jpg";
import adamImg from "/src/assets/adam.jpg";
import jessicaImg from "/src/assets/jessica.jpg";
import andersImg from "/src/assets/anders.jpg";
*/

const employees = [
  {
    team: "leadership",
    name: "Jeremy Durant",
    title: "CEO",
    bio: "<p>Jeremy developed an interest in computers at an early age. He graduated with a computer science and electrical engineering degree.</p> <p>He was an early founder of successful companies like BlueSpace, Eazybit, and Drifly.</p>",
    image: `${images.jeremy}`,
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "leadership",
    name: "Abdulkareem Jalal",
    title: "CTO",
    bio: "<p>Abdulkareem got a PhD in Computer Science from Stanford. He loves coding.</p> <p>When he’s not coding, he spends time in his cabin with his wife and two daughters.</p>",
    image: `${abdulkareemImg}`,
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "leadership",
    name: "Susan Wójcik",
    title: "CPO",
    bio: "<p>Susan spent her school years running a web hosting business from her room in Seattle, Washington.</p> <p>Susan loves to read, hike, cook, and bird watching. Not necessarily in that order.</p>",
    image: `${susanImg}`,
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    team: "sales",
    name: "Alexa Bobek",
    title: "Account Executive",
    bio: "<p>Alexa has lived in 7 countries.</p> <p>She loves to work with customers and improve their life using our product.</p> <p>Alexa lives with her wife and daughter.</p>",
    image: `${alexaImg}`,
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "sales",
    name: "Jansen Diaz",
    title: "SDR",
    bio: "<p>Jansen is from Argentina and he loves Football.</p> <p>His favorite player is Lionel Messi.</p> <p>Jansen likes to read fiction in his free time.</p>",
    image: `${jansenImg}`,
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    team: "customer service",
    name: "Muhammad Adel",
    title: "Customer Success",
    bio: "<p>Muhammad Adel has worked in customer service for the last 30 years.</p> <p>It was his first job after high school and he’s still working in customer service all these years later!</p>",
    image: `${muhammadImg}`,
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "customer service",
    name: "Alexander Smith",
    title: "Customer Success",
    bio: "<p>Alexander finished his bachelors from the University of Pennsylvania in Economics.</p> <p>Alexander loves skateboarding and snowboarding.</p>",
    image: `${alexanderImg}`,
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "product",
    name: "Naomi Harris",
    title: "Software Engineer",
    bio: "<p>Naomi has been working in tech for the last 35 years. Jeremy’s interest in computers started when his mom brought home a Commodore 64.</p> <p>Jeremy has a bachelor and masters from University of Wisconsin-Madison.</p>",
    image: `${naomiImg}`,
    social: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "product",
    name: "Paulo Dinsen",
    title: "Software Engineer",
    bio: "<p>Paulo got a PhD in Computer Science from UCF. He loves coding.</p> <p>When he’s not coding, he spends time in his cabin with his dog and two cats.</p>",
    image: `${pauloImg}`,
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "product",
    name: "Adam Tesfaye",
    title: "Software Engineer",
    bio: "<p>Adam spent their school years running a freelance coding business from their apartment in Atlanta, Georgia.</p> <p>Adam loves to cook, play soccer, and watch movies. Not necessarily in that order.</p>",
    image: `${adamImg}`,
    social: {
      twitter: "https://twitter.com/",
    },
  },
  {
    team: "product",
    name: "Jessica Albertson",
    title: "Designer",
    bio: "<p>Jessica did a double major in Art and Industrial Design at Carnegie Mellon University.</p> <p>She currently lives in Philadelphia with her husband Sej and two kids.</p>",
    image: `${jessicaImg}`,
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    team: "product",
    name: "Anders Wiig",
    title: "UX Designer",
    bio: "<p>Anders is a designer...</p>",
    image: `${andersImg}`,
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

export default employees;
