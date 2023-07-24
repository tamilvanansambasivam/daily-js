import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return <h1>Think like Programmer !</h1>;
};

const Card = (props) => {
  const { name="Omniscient", age ="Infinite" } = props;

  const defaultImg = "data:image/jpeg;base64,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";

  return (
    
   <div className="body-class">
      

      <div className="data">
        <b>User : {name}</b>
        <br />
        <b>Age : {age}</b>
        <br />
        <img src={defaultImg}></img>
      </div>
    </div>



 
  );
};

const cardData = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 28 },
  { name: "Alice", age: 22 },
  { name: "Michael", age: 35 },
  { name: "Emily", age: 29 },
  { name: "William", age: 31 },
  { name: "Olivia", age: 26 },
  { name: "James", age: 27 },
  { name: "Sophia", age: 24 },
  { name: "Benjamin", age: 33 },
  { name: "Ava", age: 28 },
  { name: "Daniel", age: 32 },
  { name: "Mia", age: 23 },
  { name: "Ethan", age: 29 },
  { name: "Isabella", age: 27 },
  { name: "Alexander", age: 34 },
  { name: "Camila", age: 31 },
  { name: "Matthew", age: 26 },
  { name: "Luna", age: 25 },
  // Add more data items as needed
];

const Body = () => {
  return (
   <div className="container">
     {cardData.map((data, index) => (
        <Card key={index} name={data.name} age={data.age} />
      ))}

   </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p> Crafted passionately by an ambitious mind - tamilvanan.</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
