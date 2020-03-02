import React from 'react';
import logo from './logo.svg';
import './App.css';

var imageList = 
 {
  womenHalf: [
   {
      id: 'B083NFP3G6',
      url: 'https://images-na.ssl-images-amazon.com/images/I/518gYcq%2Bg5L.jpg',
      affLink: "https://amzn.to/37QGJZN",
    },

     {
      id: 'B07ZVZ9W82',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51LwUkXYnWL.._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2RQSDgI",
    },

     {
      id: 'B07ZVY2YV6',
      url: 'https://images-na.ssl-images-amazon.com/images/I/510FPyMSEjL.._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2GNeaAq",
    },

     {
      id: 'B07ZVYTH12',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51qauZZscsL.._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2GLm9xI",
    },

     {
      id: 'B07ZVTXPXP',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51%2B8Zj4y%2BlL.._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/37Q3VHj"
    },


    {
      id: 'B0847351SK',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61H7r7ZylPL._UY879_.jpg',
      affLink: "https://amzn.to/38WNE3q"
    },
    {
      id: 'B08473125W',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51wIx1RG%2BbL._UY879_.jpg',
      affLink: "https://amzn.to/2RRl2TR"
    },

    {
      id: 'B08472P2Y5',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51EnYDqPI3L._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2RRl2TR",
    },

    {
      id: 'B084728DSX',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61sNQLOHU5L._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2Sbgdn1",
    },

    {
      id: 'B08472NG8D',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61RTwJXr1WL._UY879_.jpg',
      affLink: "https://amzn.to/2GM6DSj"
    },

    {
      id: 'B08472LN5Q',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51klx0H2uxL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2GOZKQ8"
    },

   {
      id: 'B08472M57M',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51W2XWaNzEL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2ROMMIE"
    },

     {
      id: 'B08472P6QK',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61AjhMZg3eL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2RRlfX9"
    },

     {
      id: 'B08472GT8J',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51xFYXhvFkL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2GKernG"
    },

     {
      id: 'B08472JM1M',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61UJmi95mvL._UY879_.jpg',
      affLink: "https://amzn.to/36NW6Rm",
    },

    

     {
      id: 'B08472R7N5',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61rWXPcho8L._UY879_.jpg',
      affLink: "https://amzn.to/2Ui7rGA"
    },

     {
      id: 'B08471XKBF',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61t39N0RoWL._UY879_.jpg',
      affLink: "https://amzn.to/2RP30Bm"
    },

    
    // 'B08473125W',
    // 'B084728DSX',
    // 'B08472P2Y5',
    // 'B08472P2Y5'
  ],

  womenFull: [
   {
      id: 'B083JK5CJL',
      url: 'https://images-na.ssl-images-amazon.com/images/I/514HkJdQBeL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2uZJN7m"
    },
    {
      id: 'B083JKJ3GT',
      url: 'https://images-na.ssl-images-amazon.com/images/I/410meNkrvJL.jpg',
      affLink: "https://amzn.to/37REt4f"
    },

    {
      id: 'B083JJVYCK',
      url: 'https://images-na.ssl-images-amazon.com/images/I/61WJeoQ-beL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2GNeMGe"
    },

    {
      id: 'B083JKNJ37',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51XPqJN7EfL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/36JEQww"
     },

   

  ],

  menHalf : [
    {
      id: 'B083JJNL6M',
      url: 'https://images-na.ssl-images-amazon.com/images/I/615%2BqGtcNnL._UY879_.jpg',
      affLink: "https://amzn.to/2OkXDI8"
    },

    {
      id: 'B083JJYB4T',
      url: 'https://images-na.ssl-images-amazon.com/images/I/514DiF8t4gL._SY879._SX._UX._SY._UY_.jpg',
      affLink: "https://amzn.to/2UtXsyf"
    }

  ]
  ,

  kids: [
    {
      id: 'B083J3BMFB',
      url: 'https://images-na.ssl-images-amazon.com/images/I/51qY0BvhALL._SY879_.jpg',
      affLink: "https://amzn.to/37Q4CQV"
    },

    {
      id: 'B083J3299R',
      url: 'https://images-na.ssl-images-amazon.com/images/I/510qeOdeaQL._SY879_.jpg',
      affLink: "https://amzn.to/2udWICj"
    }

  ]

}


function openAmazon(image) {
  if (image.affLink)
  window.open(image.affLink);
  else  
  window.open("https://www.amazon.in/dp/" + image.id);
  // console.log(image);
}

function renderImage(image, price) {
  return (<div 
    className="list-item"
    onClick = {function( ) { openAmazon(image) }} >
      <img src={image.url}/>

      <div className="list-item--bottom"> 
        Rs.{price}  + Shipping Charges 
      </div>
  </div>)
}

function renderList(list, title, price) {
  var elements = list.map(function(image) {
    return renderImage(image, price)
  });

  var root = (<div className="list">  
    <div className="list-header">{title}</div>
    {elements} 
  </div>)

  return root;

}

function getHero() {
  return (
    <div className="Hero">

    </div>
  )
}

function getHeader() {
   return (
      <div className="Header"> 
        <div className="pic"><img src="/pic.png"/></div>
        <div className="desc">
          <div> Kalkhuria </div>
          <div>Readymade</div>
        </div>
        
      </div>
  )
}

function App() {
  return (
    <div className="App">
      {getHeader()}
      {getHero()}
      <div className="App-container">
        {renderList(imageList.womenHalf, "Women Half Sweater", 649)}

        <div style={{height:"100px"}}/>
        {renderList(imageList.menHalf, "Men Half Sweater", 649)}   

        <div style={{height:"100px"}}/>
        {renderList(imageList.womenFull, "Women Full Sweater", 849)}  

        <div style={{height:"100px"}}/>
        {renderList(imageList.kids, "Kids", 399)}
      </div>
    </div>
  );
}

export default App;
