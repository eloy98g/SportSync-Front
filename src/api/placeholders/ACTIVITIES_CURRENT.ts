export default [
  {
    gid: 1,
    place: {
      lat: 37.7749,
      lng: -122.4194,
      radius: 500,
    },
    creationDate: 1709492837,
    startDate: 1712164031,
    duration: 90,
    admin: {
      gid: 1,
      name: "John Doe",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
    },
    access: "public",
    name: "Partido en el parque",
    description: "This is a placeholder activity.",
    sport: {
      gid: 1,
      name: "Fútbol",
      icon: "https://cdn-icons-png.flaticon.com/512/4498/4498011.png",
      color: "#4DD67C",
    },
    type: "normal",
    teams: 2,
    playersPerTeam: 5,
    currentPlayers: 7,
    status: "pending",
    chat: 1,
  },
  {
    gid: 2,
    place: {
      lat: 37.7749,
      lng: -122.4194,
      radius: 500,
    },
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    admin: {
      gid: 1,
      name: "John Doe",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
    },
    access: "public",
    name: "Torneo guallaba",
    description: "This is a placeholder activity.",
    sport: {
      gid: 2,
      name: "Ténis",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
      color: "#EDFF54",
    },
    type: "normal",
    playersPerTeam: 1,
    userTeam: "B",
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
            gid: 5,
            name: "Clara Oswald",
            image:
              "https://www.conpaas.org/wp-content/uploads/2016/06/team-5.jpg",
          },
        ],
      },
    ],
    status: "pending",
    chat: 2,
  },
  {
    gid: 3,
    place: {
      lat: 37.7749,
      lng: -122.4194,
      radius: 500,
    },
    creationDate: 1708492837,
    startDate: 1712164031,
    duration: 90,
    admin: {
      gid: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    access: "public",
    name: "Tenis Open Arena",
    description: "This is a placeholder activity.",
    sport: {
      gid: 2,
      name: "Ténis",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
      color: "#EDFF54",
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

          {
            gid: 7,
            name: "Lola Gomez",
            image:
              "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
          },
          {
            gid: 8,
            name: "Eloy Gomez",
            image:
              "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
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
            name: "Rory Williams",
            image:
              "https://www.conpaas.org/wp-content/uploads/2016/06/team-4.jpg",
          },
          {
            gid: 5,
            name: "Clara Oswald",
            image:
              "https://www.conpaas.org/wp-content/uploads/2016/06/team-5.jpg",
          },
        ],
      },
    ],
    playersPerTeam: 1,
    status: "pending",
    chat: 3,
  },
];
