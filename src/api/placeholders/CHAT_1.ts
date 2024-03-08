// chat los dates tienen que venir en unix *1000
export default {
  _id: 1,
  name: "Chat actividad1",
  dateStart: 1712164031000,
  dateEnd: 171217431000,
  players: [
    {
      _id: 1,
      name: "John Doe",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
    },
    {
      _id: 2,
      name: "Mary Pond",
      image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
    },
    {
      _id: 3,
      name: "John Smith",
      image:
        "https://selectedinspiration.com/storage/profiles/2019/08/49136920190802113028966/Manuel-Bano-Hernandez-thumb.jpg",
    },
    {
      _id: 4,
      name: "Rory Williams",
      image:
        "https://s7g10.scene7.com/is/image/ktm/Mani-Lettenbichler-rider-profile:Orig?wid=909&hei=650&dpr=off",
    },
    {
      _id: 5,
      name: "Clara Oswald",
      image:
        "https://www.wsb.com/wp-content/uploads/2021/06/Manuel_Anja_ORIGINAL-682x830.jpg?bust=1bb5bf9eefa2528ac319885e27be2865",
    },
  ],
  messages: [
    {
      _id: 1,
      createdAt: 1712164041000,
      text: "¡Hola! ¿Cómo estáis?",
      user: {
        _id: 2,
        name: "Mary Pond",
        avatar: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
      },
    },
    {
      _id: 2,
      user: {
        _id: 2,
        name: "Mary Pond",
        avatar: "https://www.conpaas.org/wp-content/uploads/2016/06/team-2.jpg",
      },
      createdAt: 1712164051000,
      text: "Hola, estoy bien. ¿Y tú?",
    },
    {
      _id: 3,
      user: {
        _id: 1,
        name: "John Doe",
        image: "https://www.conpaas.org/wp-content/uploads/2016/06/team-1.jpg",
      },
      createdAt: 1712164061000,
      text: "Estoy bien también, gracias por preguntar.",
    },
    {
      _id: 4,
      user: {
        _id: 3,
        name: "John Smith",
        image:
          "https://selectedinspiration.com/storage/profiles/2019/08/49136920190802113028966/Manuel-Bano-Hernandez-thumb.jpg",
      },
      createdAt: 1712164071000,
      text: "Cuando queráis yo tengo pelota",
    },
    {
      _id: 5,
      user: {
        _id: 4,
        name: "Rory Williams",
        image:
          "https://s7g10.scene7.com/is/image/ktm/Mani-Lettenbichler-rider-profile:Orig?wid=909&hei=650&dpr=off",
      },
      createdAt: 1712164081000,
      text: "Álguien tiene un amigo que se pueda unir?",
    },
  ],
};
