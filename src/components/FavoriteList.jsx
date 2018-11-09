import React from "react";
import Favorite from "./Favorite";

var masterFavoriteList = [
  {
    image: 'https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2017/10/bigwolflittlewolf00.jpg?zoom=2&fit=320%2C168&ssl=1',
    teaser: "The Best of Brain Pickings 2018",
    url: '#/RouteTest',
  },
  {
    image: 'https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/05/mayaangelou_jannalevin1.jpg?zoom=2&fit=320%2C168&ssl=1',
    teaser: "A Brave and Startling Truth: Astrophysicist Janna Levin Reads Maya Angelou’s Stunning Humanist Poem That Flew to Space, Inspired by Carl Sagan",
  },
  {
    image: 'https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2016/06/thinslicesofanxiety0.jpg?zoom=2&fit=320%2C168&ssl=1',
    teaser: "A Stoic’s Key to Peace of Mind: Seneca on the Antidote to Anxiety",
  },
  {
    image: 'https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2014/01/mindset.jpg?zoom=2&fit=300%2C157&ssl=1',
    teaser: "Fixed vs. Growth: The Two Basic Mindsets That Shape Our Lives",
  },
];

function FavoriteList(){

  return (
    <div>
      {masterFavoriteList.map((item, index) =>
        <Favorite image={item.image}
          teaser={item.teaser}
          url={item.url}
          key={index}
        />
      )}
    </div>
  );
}

export default FavoriteList;