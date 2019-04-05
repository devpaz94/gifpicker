import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { GifGrid, SearchBar } from ".";
import InfiniteScroll from "react-infinite-scroll-component";
import "../Styles.css";

class PopupWindow extends React.Component {
  state = {
    gifs: [],
    offset: 0,
    currentGif: "",
    searchInput: "",
    timeout: 0
  };

  fetchData = (keyWord, limit, offset) => {
    this.setState({ currentGif: keyWord });
    const url = `http://api.giphy.com/v1/gifs/search?api_key=smFg8BlXGx3Fv1uibDi6kK0MiFnLr1xx&q=${keyWord}&offset=${offset}&limit=${limit}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: this.state.gifs.concat(data.data),
          offset: offset + limit
        });
      });
  };

  handleInputChange = event => {
    var searchText = event.target.value;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ gifs: [] });
      this.fetchData(searchText, 9, 0);
    }, 500);
  };

  handleClick = () => {
    this.setState({ gifs: [] });
    this.props.hideModal();
  };

  render() {
    return (
      <Modal show={this.props.modalState} onHide={this.handleClick}>
        <Modal.Header closeButton>
          <SearchBar inputHandler={this.handleInputChange} />
        </Modal.Header>
        <Modal.Body
          id="scrollableDiv"
          style={{
            "max-height": "calc(100vh - 210px)",
            "overflow-y": "auto"
          }}
        >
          <InfiniteScroll
            dataLength={this.state.gifs.length}
            next={() => {
              const { offset, currentGif } = this.state;
              this.fetchData(currentGif, 6, offset);
            }}
            hasMore={true}
            scrollThreashold={0.5}
            scrollableTarget="scrollableDiv"
          >
            <GifGrid gifs={this.state.gifs} selectGif={this.selectGif} />
          </InfiniteScroll>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClick}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClick}>
            Select GIF
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default PopupWindow;
