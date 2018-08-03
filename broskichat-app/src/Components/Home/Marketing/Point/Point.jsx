import React from 'react';

const Point = (props) => {
  console.log(props);
  const defaults = {
    img: 'https://bulma.io/images/placeholders/1280x960.png',
    title: 'Title Goes Here',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, fugiat!'
  }
  const { img, title, text } = props.point;

  return (
    <div className="card has-background-light">
      <div className="card-image">
        <figure className="image">
          <img src={img || defaults.img} alt={title || defaults.title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title has-text-grey-dark has-text-weight-light is-size-4">{title || defaults.title}</p>
        <div className="content has-text-grey">
          {text || defaults.text}
        </div>
      </div>
    </div>
  );
}

export default Point;