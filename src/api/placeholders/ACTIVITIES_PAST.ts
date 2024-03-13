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
    endDate: 171217431,
    admin: {
      gid: 1,
      name: "John Doe",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
    },
    access: "public",
    name: "Partido de futbol",
    description: "This is a placeholder activity.",
    sport: {
      gid: 1,
      name: "Fútbol",
      icon: "https://cdn-icons-png.flaticon.com/512/4498/4498011.png",
      color: "#4DD67C",
    },
    type: "normal",
    chat: 1,
    status: "finished",
    teams: [
      {
        name: "A",
        numPlayers: 5,
        player: {
          gid: 1,
          name: "John Doe",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
        },
        userTeam: false,
      },
      {
        name: "B",
        numPlayers: 5,
        player: {
          gid: 3,
          name: "John Smith",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        userTeam: true,
      },
    ],
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
  },
  {
    gid: 2,
    place: {
      lat: 37.7749,
      lng: -122.4194,
      radius: 500,
    },
    creationDate: 1709492837,
    startDate: 1712164031,
    endDate: 171217431,
    admin: {
      gid: 1,
      name: "John Doe",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
    },
    access: "public",
    name: "Partido de tenis",
    description: "This is a placeholder activity.",
    sport: {
      gid: 2,
      name: "Ténis",
      icon: "https://cdn.icon-icons.com/icons2/2385/PNG/512/tennis_racket_icon_144086.png",
      color: "#EDFF54",
    },
    type: "normal",
    chat: 1,
    status: "finished",
    teams: [
      {
        name: "A",
        numPlayers: 2,
        player: {
          gid: 1,
          name: "John Doe",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
        },
        userTeam: false,
      },
      {
        name: "B",
        numPlayers: 2,
        player: {
          gid: 3,
          name: "John Smith",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        userTeam: true,
      },
    ],
    result: {
      result: "defeat",
      partialScores: [
        {
          slot: 1,
          winner: "B",
          scores: [
            { team: "A", points: 4 },
            { team: "B", points: 6 },
          ],
        },
        {
          slot: 2,
          winner: "A",
          scores: [
            { team: "A", points: 6 },
            { team: "B", points: 4 },
          ],
        },
        {
          slot: 3,
          winner: "A",
          scores: [
            { team: "A", points: 6 },
            { team: "B", points: 2 },
          ],
        },
      ],
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
  },
  {
    gid: 3,
    place: {
      lat: 37.7749,
      lng: -122.4194,
      radius: 500,
    },
    creationDate: 1709492837,
    startDate: 1712164031,
    endDate: 171217431,
    admin: {
      gid: 1,
      name: "John Doe",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
    },
    access: "public",
    name: "pachanguita de futbol",
    description: "This is a placeholder activity.",
    sport: {
      gid: 1,
      name: "Fútbol",
      icon: "https://cdn-icons-png.flaticon.com/512/4498/4498011.png",
      color: "#4DD67C",
    },
    type: "normal",
    chat: 1,
    status: "finished",
    teams: [
      {
        name: "A",
        numPlayers: 5,
        player: {
          gid: 1,
          name: "John Doe",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
        },
        userTeam: true,
      },
      {
        name: "B",
        numPlayers: 5,
        player: {
          gid: 3,
          name: "John Smith",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        userTeam: false,
      },
    ],
    result: {
      result: "victory",
      partialScores: [],
      finalScores: [
        {
          slot: 1,
          winner: "A",
          scores: [
            { team: "A", points: 4 },
            { team: "B", points: 1 },
          ],
        },
      ],
    },
  },
  {
    gid: 4,
    place: {
      lat: 37.7749,
      lng: -122.4194,
      radius: 500,
    },
    creationDate: 1709492837,
    startDate: 1712164031,
    endDate: 171217431,
    admin: {
      gid: 1,
      name: "John Doe",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
    },
    access: "public",
    name: "pachanguita de futbol",
    description: "This is a placeholder activity.",
    sport: {
      gid: 1,
      name: "Fútbol",
      icon: "https://cdn-icons-png.flaticon.com/512/4498/4498011.png",
      color: "#4DD67C",
    },
    type: "normal",
    chat: 1,
    status: "finished",
    teams: [
      {
        name: "A",
        numPlayers: 5,
        player: {
          gid: 1,
          name: "John Doe",
          image:
            "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
        },
        userTeam: true,
      },
      {
        name: "B",
        numPlayers: 5,
        player: {
          gid: 3,
          name: "John Smith",
          image: "https://acepro.es/wp-content/uploads/2016/01/tutor-8.jpg",
        },
        userTeam: false,
      },
    ],
    result: {
      result: "victory",
      partialScores: [],
      finalScores: [
        {
          slot: 1,
          winner: null,
          scores: [
            { team: "A", points: 1 },
            { team: "B", points: 1 },
          ],
        },
      ],
    },
  },
];
