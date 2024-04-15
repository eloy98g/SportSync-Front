import Activity from "../../store/types/activity/Activity";

const data: Activity = {
  gid: 1,
  location: {
    latitude: 37.7749,
    longitude: -122.4194,
    radius: 500,
    address: "Palacio Vistalegre",
  },
  creationDate: 1709492837,
  startDate: 1712164031,
  duration: 90,
  admin: {
    gid: 1,
    name: "John Doe",
    image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
  },
  price: 200,
  access: "public",
  name: "Partidazo de ternis",
  description: "This is a placeholder activity.",
  sport: {
    gid: 1,
    name: "Fútbol",
    icon: "https://cdn-icons-png.flaticon.com/512/4498/4498011.png",
    color: "",
  },
  type: "normal",
  playersPerTeam: 5,
  userTeam: "A",
  chat: 1,
  result: {
    result: "defeat",
    partialScores: [],
    finalScores: [
      {
        slot: 1,
        winner: "A",
        scores: [
          { team: "A", points: 2 },
          { team: "B", points: 1 },
        ],
      },
    ],
  },
  status: "pending",
  teams: [
    {
      name: "A",
      players: [
        {
          gid: 1,
          name: "John Doe",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
        },
        {
          gid: 2,
          name: "Mary Pond",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
        },
        // {
        //   gid: 6,
        //   name: "David Tennant",
        //   image:
        //     "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
        // },
        // {
        //   gid: 7,
        //   name: "Lola Gomez",
        //   image:
        //     "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
        // },
        // {
        //   gid: 8,
        //   name: "Eloy Gomez",
        //   image:
        //     "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
        // },
      ],
    },
    {
      name: "B",
      players: [
        {
          gid: 3,
          name: "John Smith",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        {
          gid: 4,
          name: "Rory Williams",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        {
          gid: 5,
          name: "Clara Oswald",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        {
          gid: 9,
          name: "Rory Williams",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        {
          gid: 10,
          name: "Clara Oswald",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
      ],
    },
  ],
};

export default data;
