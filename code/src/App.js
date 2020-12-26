import React from 'react';
import logo from './logo.svg';
import './App.css';

var imageList = 
 {
  womenHalf: [
   {
       id: 'B08NHBQFC8',
       url: 'https://images-na.ssl-images-amazon.com/images/I/61djMnWqsrL._UY879_.jpg',
       affLink: "https://www.amazon.in/dp/B08R9ZKY7F?ref=myi_title_dp",
    },

     {
         id: 'B08NHD1HPT',
         url: 'https://m.media-amazon.com/images/I/71YaZWymrdL._SY879._SX._UX._SY._UY_.jpg',
         affLink: "https://www.amazon.in/dp/B08RB2FZM3?ref=myi_title_dp&th=1",
    },

     {
         id: 'B08NHB9DY7',
         url: 'https://m.media-amazon.com/images/I/61Q--Pk4ICL._SY879._SX._UX._SY._UY_.jpg',
         affLink: "https://www.amazon.in/dp/B08RB1QXCL?ref=myi_title_dp&th=1",
    },

     {
         id: 'B08NHBR7GF',
         url: 'https://m.media-amazon.com/images/I/61LNiBMR8RL._SY879._SX._UX._SY._UY_.jpg',
         affLink: "https://www.amazon.in/dp/B08RB1VJRL?ref=myi_title_dp&th=1",
    },

     {
         id: 'B08LVDWCCW',
         url: 'https://images-na.ssl-images-amazon.com/images/I/51I802zO2RL._UY879_.jpg',
         affLink: "https://www.amazon.in/dp/B08NHCR8CR?ref=myi_title_dp"
    },


    {
        id: 'B08LVL6DMM',
        url: 'https://m.media-amazon.com/images/I/61nZsa1YZML._SY879._SX._UX._SY._UY_.jpg',
        affLink: "https://www.amazon.in/dp/B08NHDMVQK?ref=myi_title_dp&th=1"
    },
    {
        id: 'B08LVK1XK3',
        url: 'https://m.media-amazon.com/images/I/613AI7RpNkL._SY879._SX._UX._SY._UY_.jpg',
        affLink: "https://www.amazon.in/dp/B08RB2BKZH?ref=myi_title_dp&th=1"
    },

      {
          id: 'B08LVK1XK3',
          url: 'https://m.media-amazon.com/images/I/81YStgxrj9L._SY879._SX._UX._SY._UY_.jpg',
          affLink: "https://www.amazon.in/dp/B08RB1YKF5?ref=myi_title_dp&th=1"
      }

  ],

  womenFull: [
   // {
   //    id: 'B083JK5CJL',
   //    url: 'https://images-na.ssl-images-amazon.com/images/I/514HkJdQBeL._SY879._SX._UX._SY._UY_.jpg',
   //    affLink: "https://amzn.to/2uZJN7m"
   //  },
   //  {
   //    id: 'B083JKJ3GT',
   //    url: 'https://images-na.ssl-images-amazon.com/images/I/410meNkrvJL.jpg',
   //    affLink: "https://amzn.to/37REt4f"
   //  },

   //  {
   //    id: 'B083JJVYCK',
   //    url: 'https://images-na.ssl-images-amazon.com/images/I/61WJeoQ-beL._SY879._SX._UX._SY._UY_.jpg',
   //    affLink: "https://amzn.to/2GNeMGe"
   //  },

   //  {
   //    id: 'B083JKNJ37',
   //    url: 'https://images-na.ssl-images-amazon.com/images/I/51XPqJN7EfL._SY879._SX._UX._SY._UY_.jpg',
   //    affLink: "https://amzn.to/36JEQww"
   //   },

   

  ],

  menHalf : [
    // {
    //   id: 'B083JJNL6M',
    //   url: 'https://images-na.ssl-images-amazon.com/images/I/615%2BqGtcNnL._UY879_.jpg',
    //   affLink: "https://amzn.to/2OkXDI8"
    // },

    // {
    //   id: 'B083JJYB4T',
    //   url: 'https://images-na.ssl-images-amazon.com/images/I/514DiF8t4gL._SY879._SX._UX._SY._UY_.jpg',
    //   affLink: "https://amzn.to/2UtXsyf"
    // }

  ]
  ,

  kids: [
    // {
    //     id: 'B08LCKN2Z6',
    //     url: 'https://images-na.ssl-images-amazon.com/images/I/61MKdDoXCHL._SY879_.jpg',
    //     affLink: "https://www.amazon.in/dp/B08LCKN2Z6?ref=myi_title_dp"
    // },

    // {
    //   id: 'B083J3299R',
    //   url: 'https://images-na.ssl-images-amazon.com/images/I/510qeOdeaQL._SY879_.jpg',
    //   affLink: "https://amzn.to/2udWICj"
    // } ,
    //   {
    //       id: 'B08LCJK7PV',
    //       url: 'https://images-na.ssl-images-amazon.com/images/I/61Ehd1lmqRL._SY879_.jpg',
    //       affLink: "https://www.amazon.in/dp/B08LCJK7PV?ref=myi_title_dp"
    //   }

  ]

}


function openAmazon(image) {
    var url = "https://www.amazon.in/dp/" + image.id;

    if (image.affLink)
        window.open(image.affLink);
    else
        window.gtag_report_conversion (url);
}

function renderImage(image, price) {
  return (<div 
    className="list-item"
    onClick = {function( ) { openAmazon(image) }} >
      <img src={image.url}/>

      <div className="list-item--bottom"> 
          Buy now
      </div>
  </div>)
//    Rs.{price}  + Shipping Charges 
}

function renderList(list, title, price) {
  var elements = list.map(function(image) {
    return renderImage(image, price)
  });

    title = list.length ? title: null;

  var root = (<div className="list">  
    <div className="list-header">{title}</div>
    {elements} 
  </div>)

  return root;

}

function getHero() {
  return (
    <div className="Hero">
          <div className = "Hero-text">
          </div>

    </div>
  )
}

function getHeader() {
   return (
    <div className="Header-container"> 
      <div className="Header"> 
        <div className="pic"><img src="/pic.png"/></div>
        <div className="desc">
          <div> Kalkhuria </div>
          <div>Readymade</div>
           <div> 9760847258</div>
        </div>
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

        <div style={{height:"0px"}}/>
        {renderList(imageList.menHalf, "Men Half Sweater", 649)}   

        <div style={{height:"0px"}}/>
        {renderList(imageList.womenFull, "Women Full Sweater", 849)}  

        <div style={{height:"0px"}}/>
        {renderList(imageList.kids, "Kids", 399)}

      </div>

          <div class="footer">
          Kalkhuria Readymade  @2020
      </div>
    </div>
  );
}

export default App;
