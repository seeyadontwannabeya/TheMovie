import React, { Component } from "react";

import MovieSearch from "./Components/MovieSearch";
import Booking from "./Components/Booking";
import TestLista from "./Components/TestLista";
import Login from "./Components/Login";
import Reg from "./Components/Registration";
import Dashboard from "./Components/Dashboard";
class App extends Component {
  constructor() {
    super();
    this.state = { movieIdToBook: 0, showSearchMovie: true };
  }
  showBooking = id => {
    this.setState({ movieIdToBook: id, showSearchMovie: false });
  };

  render() {
    return (
      <>
        <div>
          <Reg />
          <Login />
          <Dashboard />
        </div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td width="8" />
              <td>
                <h2>Filmsökning</h2>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.showSearchMovie ? (
          <MovieSearch
            onMovieSelect={movieId => {
              this.setState({ movieIdToBook: movieId, showSearchMovie: false });
            }}
          />
        ) : (
          <Booking movieID={this.state.movieIdToBook} />
        )}
      </>
    );
  }
}

export default App;
