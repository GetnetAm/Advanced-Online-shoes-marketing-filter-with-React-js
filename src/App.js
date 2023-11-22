import Navigation from "./pages/Navigations/Navigation";
import Recomanded from "./pages/Recomanded/Recomanded";
import Sidebar from "./pages/Sidebar/Sidebar";
import Products from "./pages/products/Products";
import products from "./Db/Data"
import { useState } from "react";
import Card from "./Components/Card";

function App() {

  const [selectedcategory, setSelectedCategory] =useState(null)
  const [query, setQuery] = useState("")
  

  // input Filter




  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

   const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // radio filter

  const handleChange =event =>{
    setSelectedCategory(event.target.value)
  }

  // buttons filters

  const handleClick =event =>{
    setSelectedCategory(event.target.value)
  }


  function filteredData(products, selected, query){
    let filteredProducts=products
    
    if(query){
      filteredProducts=filteredItems
    }

    if(selected){
      filteredProducts=filteredProducts.filter(
        ({category, color, company, newPrice, title})=>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
      );
    }


    return filteredProducts.map(
      ({img, title, star, reviews, prevPrice, newPrice}) =>(
      <Card
      Key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
     
      
      />
    ));


  }


 const result= filteredData(products, selectedcategory, query);





  // const [selectedCategory, setSelectedCategory] = useState(null);

  // // ----------- Input Filter -----------
  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const filteredItems = products.filter(
  //   (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  // // ----------- Radio Filtering -----------
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // // ------------ Button Filtering -----------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };
  

  // function filteredData(products, selected, query) {
  //   let filteredProducts = products;

  //   // Filtering Input Items
  //   if (query) {
  //     filteredProducts = filteredItems;
  //   }

  //   // Applying selected filter
  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, color, company, newPrice, title }) =>
  //         category === selected ||
  //         color === selected ||
  //         company === selected ||
  //         newPrice === selected ||
  //         title === selected
  //     );
  //   }

  //   return filteredProducts.map(
  //     ({ img, title, star, reviews, prevPrice, newPrice }) => (
  //       <Card
  //         key={Math.random()}
  //         img={img}
  //         title={title}
  //         star={star}
  //         reviews={reviews}
  //         prevPrice={prevPrice}
  //         newPrice={newPrice}
  //       />
  //     )
  //   );
  // }

  // const result = filteredData(products, selectedCategory, query);


  return (
    <div className="app">
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recomanded handleClick={handleClick} />
      <Products result={result} />
    
      {/* <Sidebar handleChange={handleChange} />
      <Navigation query ={query} handleChange={handleChange} />
      <Recomanded handleClick={handleClick} />
      <Products result={result}/> */}
    </div>
  );
}

export default App;
