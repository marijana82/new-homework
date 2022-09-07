import React from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Products from "./components/Products";
import Tiles from "./components/Tiles";
import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";



function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>

      <nav>

          <Buttons
              isDisabled={false}
              clickHandler={() => console.log("To the collection")}
          >To the collection
          </Buttons>

          <Buttons
              isDisabled={false}
              clickHandler={() => console.log("Shop all bags")}
          >Shop all bags
          </Buttons>

          <Buttons
              isDisabled={true}
              clickHandler={() => console.log("Pre-orders")}
          >Pre-orders
          </Buttons>

      </nav>

          <main>

            <Products
                commentLabel="Best seller"
                productImage={bagOne}
                alternativeText="The handy bag"
                nameProduct="The handy bag"
                priceProduct={400}

            />

              <Products
                  commentLabel="Best seller"
                  productImage={bagTwo}
                  alternativeText="The handy bag"
                  nameProduct="The handy bag"
                  priceProduct={250}

              />

              <Products
                  commentLabel="Best seller"
                  productImage={bagThree}
                  alternativeText="The handy bag"
                  nameProduct="The handy bag"
                  priceProduct={300}

              />

              <Products
                  commentLabel="Best seller"
                  productImage={bagFour}
                  alternativeText="The handy bag"
                  nameProduct="The handy bag"
                  priceProduct={150}

              />


          </main>


          <footer>

              <Tiles
                  title="Brand"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque cum delectus distinctio ipsam nesciunt, omnis praesentium quis vitae? Accusamus at beatae consequatur laborum magnam modi perspiciatis quidem repellat!"
              ></Tiles>

              <Tiles
                  visuals={brand}
              ></Tiles>


              <Tiles
                  visuals={ourStory}

              ></Tiles>

              <Tiles
                  title="Our Story"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam consequuntur cumque, doloremque dolores ducimus earum et eveniet, ipsam laboriosam natus perferendis perspiciatis quis recusandae reprehenderit! Dignissimos quae quo tenetur."
              ></Tiles>


          </footer>






      </>

  );
}

export default App;



