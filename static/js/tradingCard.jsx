'use strict';


const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Seedpy",
    skill: "baking",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 4,
  },
  {
    name: "Merge",
    skill: "Making Bread",
    imgUrl: "/static/img/merge.png",
    cardId: 5,
  },

];

// const tradingCardData = [
//   {
//     name: 'Balloonicorn',
//     skill: 'video games',
//     imgUrl: '/static/img/balloonicorn.jpg',
//   },
// ];


function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

// function TradingCardContainer() {
//   return (
//     <div>
//       success
//     </div> 
//   );
//  }

// ReactDOM.render(<TradingCardContainer/>, document.querySelector('#all-cards'))

function TradingCardContainer() {
  const tradingCards = [];
  
  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }
  
return (
  tradingCards
  );
}