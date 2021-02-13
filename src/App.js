import React from "react";
import Header from "./components/header/header.component";
import NavTabs from "./components/tab/tab.component";
import InputField from "./components/input/input.component";
import OutputDisplay from "./components/output/output.component";

import Cards from "./components/cards/cards.component";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: String.raw`$$\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$`,
      expression: "",
      userCursorPosition: 0,
      manualCursor: false,
      highlightStart: 0,
      highlightEnd: 0,
    };

    this.textArea = React.createRef();
    this.timeout = null;
  }

  clickhandler = (encoding) => {
    let beforeCursor;
    let afterCursor;
    let newExpression;

    clearTimeout(this.timeout);
    this.changeHandler();
    console.log("highlight start: " + this.state.highlightStart);
    console.log("highlight end: " + this.state.highlightEnd);

    if (this.state.highlightEnd - this.state.highlightStart > 0) {
      beforeCursor = this.state.expression.slice(0, this.state.highlightStart);
      afterCursor = this.state.expression.slice(this.state.highlightEnd);
    } else if (this.state.highlightEnd - this.state.highlightStart < 0) {
      beforeCursor = this.state.expression.slice(0, this.state.highlightStart);
      afterCursor = this.state.expression.slice(this.state.highlightEnd);
    } else {
      beforeCursor = this.state.expression.slice(
        0,
        this.state.userCursorPosition
      );
      afterCursor = this.state.expression.slice(this.state.userCursorPosition);
    }
    newExpression = beforeCursor + encoding + afterCursor;
    console.log(beforeCursor);
    console.log(afterCursor);

    this.setState(
      {
        userCursorPosition: beforeCursor.length + encoding.length,
        expression: newExpression,
      },
      (state) => {
        console.log(this.state.expression);
        this.timout = setTimeout(() => {
          this.textArea.current.focus();

          this.textArea.current.selectionStart = this.textArea.current.selectionEnd = this.state.expression.length;
          if (this.state.manualCursor)
            this.textArea.current.selectionStart = this.textArea.current.selectionEnd = this.state.userCursorPosition;
          console.log("encoding length:" + encoding.length);
          console.log(
            "current cursor position:" + this.state.userCursorPosition
          );
        }, 200);
      }
    );
    this.setState({ highlightStart: 0, highlightEnd: 0 });
  };

  changeHandler = (event) => {
    if (event) {
      this.setState({
        expression: event.target.value,
        /*userCursorPosition: this.textArea.current.selectionEnd,*/
      });
    }
  };

  setCustomCursorPosition = () => {
    if (
      this.textArea.current.selectionStart ===
      this.textArea.current.selectionEnd
    ) {
      this.setState({
        userCursorPosition: this.textArea.current.selectionEnd,
        manualCursor: true,
      });
    } else {
      this.setState({
        highlightStart: this.textArea.current.selectionStart,
        highlightEnd: this.textArea.current.selectionEnd,
        manualCursor: true,
      });
    }
  };

  setDefaultCursorPosition = () => {
    this.textArea.current.selectionStart = this.textArea.current.selectionEnd = 10000000000000;
  };

  handleKeyboardCursorPosiition = (event) => {
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
      case "Up": // IE/Edge specific value
      case "ArrowUp":
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
      case "Backspace":
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        console.log("DownKey");
        console.log(this.textArea.current.selectionStart);
        this.setState(
          {
            userCursorPosition: this.textArea.current.selectionStart,
            highlightStart: this.textArea.current.selectionStart,
            highlightEnd: this.textArea.current.selectionEnd,
            manualCursor: true,
          },
          () => {
            console.log(this.textArea.current.selectionStart);
          }
        );
        break;
      case "Enter":
        console.log("EnterKey");
        console.log(this.textArea.current.selectionStart);
        this.setState({
          userCursorPosition: 1000000000000,
          manualCursor: false,
        });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NavTabs handleClick={this.clickhandler} />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <InputField
              handleClick={this.setCustomCursorPosition}
              handleBlur={this.setDefaultCursorPosition}
              handleKeyCursor={this.handleKeyboardCursorPosiition}
              handleChange={this.changeHandler}
              expression={this.state.expression}
              ref={this.textArea}
            />
            <OutputDisplay expression={this.state.expression} />
          </div>
        </div>
        <Cards expression={this.state.expression} />
      </div>
    );
  }
}

export default App;
