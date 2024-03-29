import { airbnb, tripadvisor,expedia , locationIcon, calendarIcon, thirdIcon , booking, orbitz, forecast, easybooking, world, maldives, mountains, ocean, australia,mountainCook,dalLake,ladakh} from "../assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "discover",
    title: "Discover",
  },
  {
    id: "special-deals",
    title: "Special Deals",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    id: "service-1",
    icon: world,
    title: "Best Tour Guide",
    content:
      "What looked like a small patch of purple grass, above five feet.",
  },
  {
    id: "service-2",
    icon: easybooking,
    title: "Easy Booking",
    content:
      "Square, was moving across the sand in their direction.",
  },
  {
    id: "service-3",
    icon: forecast,
    title: "Weather Forecast",
    content:
      "What looked like a small patch of purple grass, above five feet.",
  },
  
];

// export const cards = [
//   {
//     id: "paradise-beach",
//     image: paradise,
//     title: "Paradise Beach, Bantayan Island",
//     price: "$550.16",
//     location: "Rome, Italy",
//     Rating: 4.5,
//   },
//   {
//     id: "ocean-of-colors",
//     image: fish,
//     title: "Ocean with full of colors",
//     price: "$680.86",
//     location: "Maldives",
//     Rating: 4.0,
//   },
//   {
//     id: "paradise-beach",
//     image: mountainview,
//     title: "Mountain View, Above the cloud",
//     price: "$150.90",
//     location: "United Arab Emirates",
//     Rating: 3.5,
//   },
  
// ];

export const Features = [
  {
    id: "Feature-1",
    bg:'bg-[#FF5722]',
    icon: locationIcon,
    title: "We offer best services",
    text: "It has roots in a piece of classical",
  },
  {
    id: "Feature-2",
    bg:'bg-[#FACD49]',
    icon: calendarIcon,
    title: "Schedule your trip",
    text: "Lorem Ipsum is not simply random text",
  },
  {
    id: "Feature-3",
    bg:'bg-[#F85E9F]',
    icon: thirdIcon,
    title: "Get discounted coupons",
    text: "Lorem Ipsum is not simply random text",
  },
];
export const stats = [
  {
    id: "holiday-package",
    title: "500+",
    text: "Holiday Packages",
  },
  {
    id: "luxury-hotel",
    title: "100",
    text: "Luxury Hotels",
  },
  {
    id: "premium-airlines",
    title: "7",
    text: "Premium Airlines",
  },
  {
    id: "customers",
    title: "2K+",
    text: "Customers",
  },
];


 export const destinations = [
  {
    id: "destination-4",
    image: ladakh,
    price: '$200.16',
    name: "Nubra Valley",
    location: "India, Ladakh",
    rating: "4.5",
  },
   {
     id: "destination-1",
     image: maldives,
     price: '$550.16',
     name: "Paradise Beach, Bantayan Island",
     location: "Rome, Italy",
     rating: "4.5",
   },
   {
     id: "destination-2",
     image: mountains,
     price: '$150.99',
     name: "Mountain View, Above the cloud",
     location: "United Arab Emeries",
     rating: "5.0",
   },
   {
     id: "destination-3",
    image: ocean,
     price: '$380.16',
     name: "Ocean with full of Colors",
     location: "Maldives, Spain",
     rating: "4.1",
   },
  {
    id: "destination-5",
    image: mountainCook,
    price: '$150.99',
    name: "Mountain View, ",
    location: "New Zealand",
    rating: "4.0",
  },
  {
    id: "destination-6",
    image: dalLake,
    price: '$100',
    name: "Dal Lake",
    location: "India, Srinagar",
    rating: "4.5",
  },

 ];


export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About",
        link: "#",
      },
      {
        name: "Career",
        link: "#",
      },
      {
        name: "Mobile",
        link: "#",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Why Travlog",
        link: "#",
      },
      {
        name: "Partner with us",
        link: "#",
      },
      {
        name: "FAQ's",
        link: "#",
      },
      {
        name: "Blogs",
        link: "#",
      },
    ],
  },
  {
    title: "Meet Us",
    links: [
      {
        name: "(+91) 78344943294",
        link: "#",
      },
      {
        name: "info@travlog.com",
        link: "#",
      },
      {
        name: "205. R Street, India",
        link: "#",
      },
    ],
  },
];

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: instagram,
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: "social-media-2",
//     icon: facebook,
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
// ];

export const customers = [
  {
    id: "tripadvisor",
    logo: tripadvisor,
  },
  {
    id: "expedia",
    logo: expedia,
  },
  {
    id: "booking.com",
    logo: booking,
  },
  {
    id: "airbnb",
    logo: airbnb,
  },
  {
    id: "orbitz",
    logo: orbitz,
  },
];