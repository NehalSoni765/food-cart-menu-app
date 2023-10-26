import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-auto my-auto w-9/12 p-10 ">
        <div className="bg-gray-100 p-6">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-4">About Us</h1>
                <p className="text-gray-700">
                  Welcome to <span className="font-bold">{loggedInUser}</span>{" "}
                  on Swiggy! We're delighted to have you here, and we'd like to
                  tell you a little bit about us.
                </p>
                <p className="text-gray-700 mt-4">
                  We are passionate about food and quality service. Our journey
                  began with a simple yet powerful idea: to bring the flavors of
                  your favorite dishes right to your doorstep.
                </p>
                <h1 className="text-xl font-semibold my-4">Our Mission</h1>
                <p className="text-gray-700 mt-4">
                  Our mission is to redefine your dining experience. We aim to
                  serve you the best culinary delights in town, prepared with
                  love, care, and the finest ingredients. We take pride in our
                  commitment to quality, taste, and customer satisfaction.
                </p>
              </div>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
