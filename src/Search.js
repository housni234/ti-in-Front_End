import React, { Component } from "react";
import "./index.css";


class Search extends Component {
  state = {
    searchValue: "",
    services: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `http://localhost:5000/services?text=u:ward`;
    fetch(searchUrl)
      .then(response => {

        console.log(response);
        return response.json();

      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({ services : jsonData });

      });

  };

  render() {
    return (
      <div className="searchBar base">
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button className="search-btn" onClick={this.handleSearch}>Search</button>
        
        {this.state.services ? (
          <div id="services-container">
            {this.state.services.map((service, index) => (
              <div className="single-service" key={index}>
                <h2>{service.content}</h2>

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
