const SECTIONS = (navigation: any) => [
  {
    title: "Acciones rápidas",
    data: [
      {
        size: "large-y",
        title: "Subir resultado",
        filter: false,
        image: require("../../assets/images/actionButtons/score.jpg"),
      },
    ],
  },
  {
    title: "Encuentra a otros jugadores",
    data: [
      {
        size: "normal",
        title: "Crear",
        filter: false,
        marginBottom: 20,
        image: require("../../assets/images/actionButtons/create.jpg"),
      },
      {
        size: "large-x",
        title: "Únete a otros jugadores",
        filter: false,
        image: require("../../assets/images/actionButtons/addFriend.jpg"),
      },
      {
        size: "normal",
        title: "Escanear Código",
        filter: false,
        image: require("../../assets/images/actionButtons/code.png"),
        onPress: () => navigation.navigate("CodeScanScreen"),
      },
    ],
  },
  {
    title: "Otras acciones",
    data: [
      {
        size: "large-y",
        title: "Tutorial",
        filter: false,
        image: require("../../assets/images/actionButtons/tutorial.png"),
      },
    ],
  },
];

export default SECTIONS;
