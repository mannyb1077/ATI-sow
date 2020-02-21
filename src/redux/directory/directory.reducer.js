const INITIAL_STATE = {
  sections: [
    {
      title: "A/V",
      imageUrl:
        "https://openclipart.org/image/2400px/svg_to_png/293844/under-construction_geek_man_01.png",
      id: 1,
      linkUrl: "/addroom"
    },
    {
      title: "Shades",
      imageUrl: "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
      id: 2,
      linkUrl: "/shades"
    },
    {
      title: "Security",
      imageUrl: "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
      id: 3,
      linkUrl: "/security"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
