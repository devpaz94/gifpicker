import React from "react";
import "./Styles.css";
import { PopupWindow, Header } from "./components";
import { Button } from "react-bootstrap";

class App extends React.Component {
  state = {
    showModal: false
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <PopupWindow
          showModal={this.showModal}
          hideModal={this.hideModal}
          modalState={this.state.showModal}
        />
        <Header title="GIF Picker" />
        <Button onClick={this.showModal} style={{ margin: "30px" }}>
          GIF
        </Button>
        <div className="selected_gif" />
      </div>
    );
  }
}

export default App;
