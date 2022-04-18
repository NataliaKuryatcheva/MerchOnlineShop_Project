import img1 from './img/maid-dress.jpg'
import img2 from './img/todoroki-shoto.jpg'
import img3 from './img/kaneki-ken.jpg'
import img4 from './img/mha-bag.jpg'
import img5 from './img/naruto-purse.jpg'
import img6 from './img/aot-necklace.jpg'
import img7 from './img/akatsuki-robe.jpg'
import img8 from './img/game-of-life-figurine.jpg'
export default {
  users: [
    { username: "regular", accessLevel: 1, password: "password" },
    { username: "admin", accessLevel: 0, password: "password" }
  ],
  initProducts: [
    {
      name: "Maid Dress",
      stock: 16,
      price: 59.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img1,
      type: "clothes"
    },
    {
      name: "Todoroki Shoto Figurine",
      stock: 50,
      price: 15.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img2,
      type: "figurine"
    },
    {
      name: "Kaneki Ken figurine",
      stock: 15,
      price: 32.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img3,
      type: "figurine"
    },
    {
      name: "My Hero Academia bag",
      stock: 7,
      price: 49.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img4,
      type: "accessories"
    },
    {
      name: "Naruto's wallet, Frog",
      stock: 250,
      price: 30,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
          "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img5,
      type: "accessories"
    },
    {
      name: "Attack on titan necklace",
      stock: 5,
      price: 49.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
          "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img6,
      type: "accessories"
    },
    {
      name: "Akatsuki robe",
      stock: 150,
      price: 29.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
          "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img7,
      type: "clothes"
    },
    {
      name: "Game of Life figurine",
      stock: 70,
      price: 69.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
          "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
      img: img8,
      type: "figurine"
    }
  ]
};
