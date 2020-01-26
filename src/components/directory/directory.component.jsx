import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "A/V",
          imageUrl:
            "https://clevelandhabitat.org/wp-content/uploads/2016/05/Website-Under-Construction-Image-1024x989.jpg",
          id: 1,
          linkUrl: "AV"
        },
        {
          title: "Shades",
          imageUrl:
            "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
          id: 2,
          linkUrl: "Shades"
        },
        {
          title: "Security",
          imageUrl:
            "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
          id: 3,
          linkUrl: "Security"
        }
      ]
    };
  }

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
