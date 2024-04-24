import Activity from "../../store/types/activity/Activity";
const data: Activity[] = [
  {
    gid: 4,
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    price: 200,
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    admin: {
      gid: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    visibility: "public",
    access: "open",
    name: "Activity 4",
    description: "This is a placeholder activity.",
    sport: {
      gid: 1,
      name: "Fútbol",
      icon: "https://cdn-icons-png.flaticon.com/512/4498/4498011.png",
      color: "#4DD67C",
    },
    type: "normal",
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
            name: "John Smith",
            image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
          },
        ],
      },
    ],
    playersPerTeam: 5,
    status: "pending",
    chat: 4,
  },
  {
    gid: 5,
    location: {
      latitude: 37.7742,
      longitude: -122.4194,
    },
    price: 400,
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    admin: {
      gid: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    visibility: "public",
    access: "open",
    name: "Activity 5",
    description: "This is a placeholder activity.",
    sport: {
      gid: 2,
      name: "Ténis",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
      color: "#EDFF54",
    },
    type: "competitive",
    teams: [
      {
        name: "A",
        players: [
          {
            gid: 2,
            name: "John Doe",
            image:
              "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
          },
        ],
      },
      {
        name: "B",
        players: [],
      },
    ],
    playersPerTeam: 1,
    status: "pending",
    chat: 5,
  },
  {
    gid: 6,
    location: {
      latitude: 0,
      longitude: 0,
    },
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    price: 1000,
    admin: {
      gid: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    visibility: "public",
    access: "open",
    name: "Activity 5",
    description: "This is a placeholder activity.",
    sport: {
      gid: 2,
      name: "Ténis",
      color: "#EDFF54",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
    },
    type: "competitive",
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
        ],
      },
      {
        name: "B",
        players: [],
      },
    ],
    playersPerTeam: 1,
    status: "pending",
    chat: 6,
  },
  {
    gid: 7,
    location: {
      latitude: 37.7742,
      longitude: -122.4194,
    },
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    price: 1400,
    admin: {
      gid: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    visibility: "public",
    access: "open",
    name: "Activity 5",
    description: "This is a placeholder activity.",
    sport: {
      gid: 2,
      name: "Ténis",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
      color: "#EDFF54",
    },
    type: "competitive",
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
        ],
      },
      {
        name: "B",
        players: [],
      },
    ],
    playersPerTeam: 1,
    status: "pending",
    chat: 6,
  },
  {
    gid: 8,
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    price: 2500,
    admin: {
      gid: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    visibility: "public",
    access: "open",
    name: "Activity 5",
    description: "This is a placeholder activity.",
    sport: {
      gid: 1,
      name: "Fútbol",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
      color: "#EDFF54",
    },
    type: "competitive",
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
        ],
      },
      {
        name: "B",
        players: [],
      },
    ],
    playersPerTeam: 6,
    status: "pending",
    chat: 6,
  },
  {
    gid: 9,
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    price: 0,
    admin: {
      gid: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    visibility: "public",
    access: "open",
    name: "Activity 5",
    description: "This is a placeholder activity.",
    sport: {
      gid: 2,
      name: "Ténis",
      color: "#EDFF54",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
    },
    type: "normal",
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
        ],
      },
      {
        name: "B",
        players: [],
      },
    ],
    playersPerTeam: 1,
    status: "pending",
    chat: 6,
  },
];

export default data;
