import React from "react";
import Labors from "./Labors";

var masterLaborsList = [
  {
    image: 'https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2013/11/sleepproductivitywriters_500_1.jpg?zoom=2&w=200&ssl=1',
    teaser: "Famous Writers' Sleep Habits vs. Literary Productivity, Visualized",
  },
  {
    image: 'https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2014/02/sontaglove_unlimited.jpg?zoom=2&w=200&ssl=1',
    teaser: "Susan Sontag on Love: Illustrated Diary Excerpts",
  },
  {
    image: 'https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2014/06/wendycamus.jpg?zoom=2&w=200&ssl=1',
    teaser: "Albert Camus on Happiness and Love, Illustrated by Wendy MacNaughton",
  },
  {
    image: 'https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2015/08/oliversacks_debbiemillman.jpg?zoom=2&w=200&ssl=1',
    teaser: "The Silent Music of the Mind: Remembering Oliver Sacks",
  },
];

function LaborsList(){
  return (
    <div>
      {masterLaborsList.map((item, index) =>
        <Labors image={item.image}
          teaser={item.teaser}
          key={index}
        />
      )}
    </div>
  );
}

export default LaborsList;