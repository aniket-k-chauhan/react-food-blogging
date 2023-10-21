import "./App.css";
import Card from "./components/Card/Card";
import SocialMediaIcon from "./components/SocialMediaIcon/SocialMediaIcon";

function App() {
  return (
    <>
      <div className="redCurve">
        <div className="inTouchCtn">
          <div>Get In Touch</div>
        </div>
      </div>
      <div className="pizzaImage"></div>

      <div className="contentWrapper">
        <section className="pizzaTextCtn">
          <div className="tagline">
            Discover The <span className="textRed">Best</span> Food and Drinks
          </div>
          <div className="tagSubline">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </div>
          <div className="exploreNowBtnCtn">
            <span className="exploreNowBtn">Explore Now!</span>
          </div>
        </section>
        <section className="aboutUsCtn">
          <div className="aboutUsTitle">About Us</div>
          <div className="aboutUsDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </div>
          <div className="readMoreBtn">Read More</div>
        </section>
        <section className="articlesCtn">
          <div className="articleCtnTitle">Latest Article</div>
          <div className="cardGridCtn">
            <div className="cardGrid">
              <Card
                image="/assets/grilled-tomatoes.jpg"
                title="Grilled Tomatoes at Home"
                content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...."
              />
              <Card
                image="/assets/snacks-for-travel.jpg"
                title="Snacks for Travel"
                content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...."
              />
              <Card
                image="/assets/post-workout-recipes.jpg"
                title="Post-workout Recipes"
                content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...."
              />
              <Card
                image="/assets/grill-corn.jpg"
                title="How To Grill Corn"
                content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...."
              />
              <Card
                image="/assets/crunchwrap-supreme.jpg"
                title="Crunchwrap Supreme"
                content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...."
              />
              <Card
                image="/assets/broccoli-cheeses-soup.jpg"
                title="Broccoli Cheese Soup"
                content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...."
              />
            </div>
          </div>
          {/* <div>Pagination</div> */}
        </section>
        <section className="bottomInfoCtn">
          <img
            className="bottomFoodTruck"
            src="/assets/food_truck.png"
            alt="food_truck_image"
          />
          <div>
            <div className="bottomInfoTitle">Contact Us</div>
            <div className="bottomInfoText">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div className="bottomInfoText">example2020@gmail.com</div>
            <div className="bottomInfoText">(904) 443-0343</div>
          </div>
          <div>
            <div className="bottomInfoTitle">More</div>
            <div className="bottomInfoText">About Us</div>
            <div className="bottomInfoText">Products</div>
            <div className="bottomInfoText">Career</div>
            <div className="bottomInfoText">Contact Us</div>
          </div>
          <div className="bottomInfoCopyights">© 2022 Food Truck Example</div>
          <div className="socialMedialIcons">
            <SocialMediaIcon iconUrl="/assets/insta_icon.svg" />
            <SocialMediaIcon iconUrl="/assets/twitter_icon.svg" />
            <SocialMediaIcon iconUrl="/assets/facebook_icon.svg" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
