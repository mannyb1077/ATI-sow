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
          image:
            "https://www.lakewoodranchdental.com/wp-content/uploads/2012/10/Coming-Soon.jpg",
          id: 1
        },
        {
          title: "Shades",
          image:
            "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
          id: 2
        },
        {
          title: "Security",
          image:
            "http://www.okcs.us/wp-content/uploads/2016/04/coming-soon.jpg",
          id: 3
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, image, id }) => (
          <MenuItem imageUrl={image} title={title} key={id} />
        ))}
      </div>
    );
  }
}

export default Directory;
