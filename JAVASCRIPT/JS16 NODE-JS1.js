//console.log("HEllo world")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World this is Ankit Sinha');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Css grid + Media Queries</title>
  </head>
  <style>
      .tin {
          display: grid;
          grid-gap: 0.9rem;
          grid-template-areas: 
          'navbar navbar navbar navbar' 
          'section section section aside'
          'footer footer footer footer';
      }
  
      body {
          background-color: rgb(139, 58, 129);
      }
      span{
          text-align: center;
          padding: 4px;
      }
  
      @media (max-width:550px) {
          body {
              background-color: tomato;
          }
          .tin{
              grid-template-areas: 
          'navbar navbar navbar navbar' 
          'section section section section'
          'aside aside aside aside'
          'footer footer footer footer';
      }
      aside{
          display: none;
      }
          span{
          display: block;
          text-align: center;
          padding: 4px;
      }
      }
  
      @media (min-width: 330px) and (max-width:550px) {
          body {
              background-color: yellow;
          }
          .tin {
          grid-template-areas: 
          'navbar navbar navbar navbar' 
          'section section section section'
          'aside aside aside aside'
          'footer footer footer footer';
      }
      aside{
          display: none;
      }
      span{
          display: block;
          text-align: center;
          padding: 4px;
      }
      }
  
      @media (min-width: 550px) and (max-width:860px) {
          body {
              background-color: purple;
          }
          span{
          display: block;
          text-align: center;
          padding: 4px;
      }
      }
  
      @media (min-width: 570px) and (max-width:890px) {
          body {
              background-color: gold;
          }
          .tin {
          grid-template-areas: 
          'navbar navbar navbar navbar' 
          'section section section section'
          'aside aside aside aside'
          'footer footer footer footer';
      }
      aside{
          display: none;
      }
      span{
          display: block;
          text-align: center;
          padding: 4px;
      }
  }
      @media (min-width: 800px) and (max-width:1200px) {
          body {
              background-color: orangered;
          }
          span{
          text-align: center;
          padding: 4px;
      }
      }
  
      .Breed1{
          border: 6px solid black;
          padding: 52px;
          background-color: cornflowerblue;
          border-radius: 29px;
          box-shadow: 8px 4px 9px black;
      }
  
      .Breed2{
          border: 6px solid black;
          padding: 52px;
          background-color: cornflowerblue;
          border-radius: 29px;
          box-shadow: 8px 4px 9px black;
      }
  
      nav{
          grid-area: navbar;
          font-size: 29px;
          text-shadow: -3px 0px 5px black;
      }
  
      section{
          grid-area: section;
          font-size: 29px;
          text-shadow: -3px 0px 5px black;
      }
  
      aside{
          grid-area: aside;
          font-size: 29px;
          text-shadow: -3px 0px 5px black;
      }
  
      footer {
          grid-area: footer;
          text-align: center;
          font-size: 29px;
          text-shadow: -3px 0px 5px black;
      }
      img{
          height: 30rem; 
          width: 25rem;
          border-radius: 12px;
          box-shadow: 11px 2px 19px black;
  }
  
  </style>
  
  <body>
      <div class="tin">
          <nav class="Breed1">
             <span>Home</span>
             <span>Contact</span>
             <span>About us</span>
          </nav>
  
          <Section class="Breed1">
              <h2>Important points of CSS</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim obcaecati officia quo rerum possimus vel, ea accusantium suscipit beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae maxime doloribus nam, nemo, officiis sapiente accusantium accusamus corrupti tempora provident quis illum magnam! Impedit reiciendis praesentium sed fuga officiis voluptatibus minima, dolores ad eligendi, sequi laudantium possimus est ex, earum animi ipsum temporibus.</p>
          </Section>
  
          <aside class="Breed1">
              <p>Know about us HEHEHE..</p>
          </aside>
          
      </div>
      <footer class="Breed2">
          copyright
      </footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

