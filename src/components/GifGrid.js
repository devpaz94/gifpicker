import React, { Component } from "react";
import "../Styles.css";

class GifGrid extends Component {
  state = {
    selectedGif: null
  };

  toggleClass = id => {
    this.setState({ selectedGif: id });
  };

  render() {
    return (
      <div className="grid-container">
        <div className="grid">
          {this.props.gifs.map((gif, index) => (
            <div
              id="itemid"
              className="image-item"
              key={index}
              onClick={() => this.toggleClass(gif.images.downsized.url)}
              className={
                this.state.selectedGif == gif.images.downsized.url
                  ? "selected-gif"
                  : null
              }
            >
              <img src={gif.images.downsized.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GifGrid;
