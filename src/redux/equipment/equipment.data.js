const EQUIPMENT_DATA = {
  tv: {
    id: 1,
    title: "TV",
    routeName: "equipment/tv",
    items: [
      {
        id: 1,
        itemName: "New TV",
        type: "New",
        imageUrl:
          "https://static.toiimg.com/photo/54163919/Toshiba-32PT200ZE-32-inch-LED-Full-HD-TV.jpg",
      },
      {
        id: 2,
        itemName: "Customer Provided TV",
        type: "Customer Provided",
        imageUrl:
          "https://static.toiimg.com/photo/54163919/Toshiba-32PT200ZE-32-inch-LED-Full-HD-TV.jpg",
      },
      {
        id: 3,
        itemName: "Pocket",
        type: "",
        imageUrl: "",
      },
      {
        id: 4,
        itemName: "TV",
        type: "No TV",
        imageUrl: " ",
      },
    ],
  },

  mount: {
    id: 2,
    title: "TV Mount",
    routeName: "equipment/mount",
    items: [
      {
        id: 10,
        itemName: "Tilt Mount",
        type: "Tilt",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71fiFyQfvxL._AC_SX466_.jpg",
      },
      {
        id: 11,
        itemName: "Flat Mount",
        type: "Flat Mount",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71fiFyQfvxL._AC_SX466_.jpg",
      },
      {
        id: 12,
        itemName: "Articulating Mount",
        type: "Articulating",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71S%2Bsq6ZRFL._AC_SL1500_.jpg",
      },
      {
        id: 13,
        itemName: "TV Stand",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81Xx2tH8bpL._AC_SX425_.jpg",
      },
    ],
  },

  speakers: {
    id: 3,
    title: "Speakers",
    routeName: "equipment/speakers",
    items: [
      {
        id: 18,

        itemName: "In-Ceiling-Speakers",
        type: "In-Ceiling",
        imageUrl:
          "https://audioengineusa.com/wp-content/uploads/2019/01/Untitled-design-11-400x400.png",
      },
      {
        id: 19,
        itemName: "In-Wall Speakers",
        type: "In-Wall",
        imageUrl:
          "https://audioengineusa.com/wp-content/uploads/2019/01/Untitled-design-11-400x400.png",
      },
      {
        id: 20,
        itemName: "Tower Speakers",
        type: "Tower",
        imageUrl:
          "https://audioengineusa.com/wp-content/uploads/2019/01/Untitled-design-11-400x400.png",
      },
      {
        id: 21,
        itemName: "Tower Speakers",
        type: "Tower",
        imageUrl:
          "https://audioengineusa.com/wp-content/uploads/2019/01/Untitled-design-11-400x400.png",
      },
      {
        id: 22,
        itemName: "BookShelf Speakers",
        type: "BookShelf",
        imageUrl:
          "https://audioengineusa.com/wp-content/uploads/2019/01/Untitled-design-11-400x400.png",
      },
      {
        id: 23,
        itemName: "Other Speakers",
        type: "Other",
        imageUrl:
          "https://audioengineusa.com/wp-content/uploads/2019/01/Untitled-design-11-400x400.png",
        SpeakerType: "",
      },
    ],
  },

  controls: {
    id: 4,
    title: "Controls",
    routeName: "equipment/controls",
    items: [
      {
        id: 31,
        itemName: "Control System Remote",
        type: "remote",
        imageUrl:
          "https://hinchlys.co.uk/wp-content/uploads/2015/06/control4-sr-250.jpg",
      },
      {
        id: 32,
        itemName: "Touch Panel",
        type: "Touch Panel",
        imageUrl: "https://imgres.tailbase.com/rzdimg/prods/800/253351_1.jpg",
      },
      {
        id: 33,
        itemName: "iPhone/iPad App",
        type: "iPhone/iPad App",
        imageUrl:
          "https://lh3.googleusercontent.com/BtOEVCz4hf17gv_kNhXg38FLqPJFoK8Y5wLX4eYilgdZIrBsw1YP8P_PHhVnxFWhAA=w412-h220-rw",
      },
      {
        id: 34,
        itemName: "Factory Remotes",
        type: "Factory Remotes",
        imageUrl:
          "https://uk.toluna.com/dpolls_images/2017/01/19/83a120cc-f73e-4615-998d-d5f8846ee4f4_x365.jpg",
      },
    ],
  },

  system: {
    id: 5,
    title: "Control System",
    routeName: "equipment/system",
    items: [
      {
        id: 41,
        name: "Control 4",
        imageUrl: "",
      },
      {
        id: 42,
        name: "Savant",
        imageUrl: "",
      },
      {
        id: 43,
        name: "Crestron",
        imageUrl: "",
      },
      {
        id: 44,
        name: "Sonos",
        imageUrl: " ",
        price: "",
      },
    ],
  },
};

export default EQUIPMENT_DATA;
