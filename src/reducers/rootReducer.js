
const initState = {
  projects :[{id:1 , img:'memgame' , title : 'Memory Game', desc :'project built using HTML/CSS and JavaScript(DOM) .' , link:'https://github.com/Eltantawye/memory-game'},
            {id:2 , img:'arcade-game' , title : 'Arcade Game', desc :'project implemented using JavaScript OOP , HTML5 Canvas .' , link:'https://github.com/Eltantawye/arcade-game'},
            {id:3 , img:'testing' , title : 'Feed Reader Testing', desc :'given a web-based application that reads RSS feeds , Using Jasmine to test our project and JQuery .' , link:'https://github.com/Eltantawye/frontend-nanodegree-feedreader'},
            {id:4 , img:'todo-app-react' , title : 'Simple Todo-app', desc :'Todos App implemented using React JS library .' , link:'https://github.com/Eltantawye/simple-react-todoapp'},
            {id:5 , img:'resturant-review' , title : 'Restaurant Reviews', desc :'project implemented using Map API , responsive design , accessibility features and adding a Service Worker script' , link:'https://github.com/Eltantawye/restaurant-reviews'},
            {id:6 , img:'portfolio-react' , title : 'Portfolio React.js', desc :'project built using React.JS and Redux.JS ' , link:'https://github.com/Eltantawye/portfolio'},




  ],
  contact:[],

}
const rootReducer = (state=initState,action) => {
  return state;
}
export default rootReducer;
