import React, { Component } from "react";
import "./Search_bar.css";

class Search extends Component {
  state = {
    searchValue: "",
    meals: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };
 
  makeApiCall = searchInput => {
   var searchUrl = `http://localhost:5000/hashtags`;
    fetch(searchUrl)
      .then(response => {

        console.log(response);
        return response.json();
    
      })
      .then(jsonData => {
        this.setState({ meals: jsonData.meals });
      });
      
  };

  render() {
    return (
      <div id="main">
        <h1>TIE_IN </h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.meals ? (
          <div id="meals-container">
            {this.state.meals.map((meal, index) => (
              <div className="single-meal" key={index}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="meal-thumbnail" />
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a Username</p>
        )}
      </div>
    );
  }
}

export default Search;
