import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

// 3 Icons to choose what project you want to start (AV, Shades or Security)
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "A/V",
          imageUrl:
            "https://openclipart.org/image/2400px/svg_to_png/293844/under-construction_geek_man_01.png",
          id: 1,
          linkUrl: "/room"
        },
        {
          title: "Shades",
          imageUrl:
            "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
          id: 2,
          linkUrl: "/shades"
        },
        {
          title: "Security",
          imageUrl:
            "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
          id: 3,
          linkUrl: "/security"
        }
      ]
    };
  }

  // Display on home page
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
