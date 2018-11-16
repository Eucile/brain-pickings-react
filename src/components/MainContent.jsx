import React from "react";
import image from "../assets/images/yellowquotes.png";

function MainContent(){
  var mainContentStyles = {
    padding: '0 2em',
    marginLeft: '1em',
  }
  var titleStyles = {
    margin: 0,
    fontFamily: "'Fira Sans', sans-serif",
  }
  var quoteStyles = {
    borderBottom: '1px solid #d9d9d9',
    padding: '0 1.5em 1em',
    fontSize: '1.25em',
    lineHeight: '1.4em',
  }
  var authorStyles = {
    color: '#b3b3b3',
  }
  return (
    <div style={mainContentStyles}>
    <style jsx>{`
      img {
        max-width: 100%;
        /* width: 100%; */
        margin: 0 auto;
      }
      .book-link {
        width: 200px;
        float: right;
        margin: .7em 0 .7em 40px;
      }
      p {
        font-weight: 400;
        font-size: 1.125em;
        line-height: 1.825em;
        margin: 0 0 1em 0;
      }
      figure {
        background: #e6e6e6;
        padding: 20px 20px 5px;
        margin: .8em 0 1.5em 0;
      }
      figcaption {
        font-size: .9em;
        line-height: 1.7em;
        padding: 10px 0 5px 0;
        font-weight: 300;
        color: #1a1a1a; 
      }
      .flex-quotes {
        display: flex;
      }
      .yellowquotes {
        max-height: 80px;
        margin-right: 2em;
      }
    `}</style>
        <h1 style={titleStyles}><a href="">Georgia O’Keeffe on the Art of Seeing</a></h1>
        <h2 style={quoteStyles}>"To see takes time, like to have a friend takes time."</h2>
        <p style={authorStyles}>BY MARIA POPOVA</p>  
        <img className="book-link" src="https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/11/okeeffe_thepoetryofthings.jpg?w=254&ssl=1"/> 
        <p>In her stunning autobiographical reflection on the moment she understood what it means to be an artist, Virginia Woolf beheld the cosmos of connections in a single flower. Decades later, the Nobel-winning physicist Richard Feynman offered a different, complementary lens on the art of seeing through his now-famous monologue known as “Ode to a Flower.”
        Before Feynman, before Woolf, another titan of the creative spirit found a powerful metaphor for how we experience the world — how we see it, and how we don’t — in a flower.</p>
        <figure><img src ="https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/11/GeorgiaOkeeffe_RedCanna_1924.jpg?w=1164&ssl=1"/>
        <figcaption>Georgia O’Keeffe, <em>Red Canna</em>, 1924 (Georgia O’Keeffe Museum)</figcaption>
        </figure>
        <p><em>“I found that I could say things with colour and shapes that I couldn’t say in any other way things that I had no words for,” </em>Georgia O’Keeffe (November 15, 1887–March 6, 1986) wrote in the foreword to a catalog for an exhibition of her work two decades before she became the first female artist honored with a retrospective at the Museum of Modern Art — a triumph largely predicated on her arresting large-scale paintings of flowers, magnified and abstracted to radiate uncommon emotional intensity haloed by awe. Although art critics consistently insisted that O’Keeffe’s depictions of flowers were her commentary on women’s sexuality, the artist herself resolutely denied these interpretations. For her, they were her commentary on seeing — a magnifying lens for the attention. Painting these close-ups was a way of learning to look, a way of removing the blinders with with we gallop through the world, slowing down, shedding our notions and concepts of things, and taking things in as they really are.</p>
        <figure><img src ="https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2018/11/GeorgiaOkeeffe_RufusHolsinger.jpg?w=1360&ssl=1"/>
        <figcaption>Georgia O’Keeffe by Rufus Holsinger, 1915 (Albert & Shirley Small Special Collections Library)</figcaption>
        </figure>
        <p>In a passage originally published in the exhibition catalog An American Place — which also gave us O’Keeffe’s <a href="#">serenade to blue</a> — and later cited in Georgia O’Keeffe: <em><strong><a href="#">The Poetry of Things</a></strong></em> (public library), she writes:</p>
        <div className="flex-quotes">
          <img className="yellowquotes" src={image}/>
          <div><p>A flower is relatively small. Everyone has many associations with a flower — the idea of flowers. You put out your hand to touch the flower — lean forward to smell it — maybe touch it with your lips almost without thinking — or give it to someone to please them. Still — in a way — nobody sees a flower — really — it is so small — we haven’t time — and to see takes time, like to have a friend takes time. If I could paint the flower exactly as I see it no one would see what I see because I would paint it small like the flower is small.

          So I said to myself — I’ll paint what I see — what the flower is to me but I’ll paint it big and they will be surprised into taking time to look at it — I will make even busy New-Yorkers take time to see what I see of flowers.

          Well — I made you take time to look at what I saw and when you took time to really notice my flower, you hung all your own associations with flowers on my flower and you write about my flower as if I think and see what you think and see of the flower — and I don’t.</p></div>
        </div>
        <figure><img src ="https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2018/11/GeorgiaOkeeffe1925.jpg?w=800&ssl=1"/>
        <figcaption>Georgia O’Keeffe, Grey Lines with Black, Blue and Yellow, 1923 (Georgia O’Keeffe Museum))</figcaption>
        </figure>
    </div>  
  );
}

export default MainContent;
