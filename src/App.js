import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  //HERE I AM DECLARING A CONSTRUCTOR
  constructor() {
    super();
    //HERE I AM DECLARING AN OBJECT WHICH HAS solution and array history
    this.state = {
      solution: "",
      history: []
    };
  }
  //HERE I AM ADDING EVENT LISTNER TO ALL BUTTONS
  onClick = (button) => {
    if (button === "CE") {
      this.backspace();
    } //NOW IF I CLICK CE BUTTON IT WILL DELETE VERY LAST DIGIT NUMBER
    else if (button === "C") {
      this.reset();
    } //NOW IF I CLICK C BUTTON IT WILL RESET EVERYTHING
    else if (button === "=") {
      this.calculate();
    } //NOW IF I CLICK = BUTTON THE RESULT WILL BE DISPLAYED
    else {
      this.setState({
        solution: this.state.solution + button
      });
    } //THIS IS EVENT LISTNER FOR EVERYOTHER BUTTON e.g 1, 2, 3, 4, 5,... etc
  };

  //THIS ARROW FUNCTION WILL BE INVOLVE IN CALCULATING CORRECT RESULTS
  calculate = () => {
    var vr = "";
    //IF WE ENCOUNTER -+ DURING CALCULATION IT WILL AUTOMATICALLY CONVERT IT TO -
    if (this.state.solution.includes("-+")) {
      vr = this.state.solution.replace("-+", "-");
    } //IF WE ENCOUNTER -- DURING CALCULATION IT WILL AUTOMATICALLY CONVERT IT TO +
    else if (this.state.solution.includes("--")) {
      vr = this.state.solution.replace("--", "+");
    } else if (this.state.solution.includes("-*")) {
      vr = this.state.solution.replace("-*", "*");
    } else if (this.state.solution.includes("-/")) {
      vr = this.state.solution.replace("-/", "/");
    } else if (this.state.solution.includes("+/")) {
      vr = this.state.solution.replace("+/", "/");
    } else if (this.state.solution.includes("+*")) {
      vr = this.state.solution.replace("+*", "*");
    } else if (this.state.solution.includes("+-")) {
      vr = this.state.solution.replace("+-", "-");
    } else if (this.state.solution.includes("*/")) {
      vr = this.state.solution.replace("*/", "/");
    } else if (this.state.solution.includes("/-")) {
      vr = this.state.solution.replace("/-", "-");
    } else if (this.state.solution.includes("*-")) {
      vr = this.state.solution.replace("*-", "-");
    } else if (this.state.solution.includes("/+")) {
      vr = this.state.solution.replace("/+", "+");
    }
    //ELSE IT WILL CALCULATE CORRECTLY
    else {
      vr = this.state.solution;
    }

    // THIS TRY CATHC IS FOR THE ANY OTHER UNNECESSARY BUTTON CLICK
    try {
      this.setState({
        solution: eval(vr)
      });
      this.state.history.push(eval(vr) + " | ");
    } catch (error) {
      this.setState({
        solution: "Syntax Error"
      });
    }
  };
  //THIS WILL SET THE STATE OF THE INPUT TEXT TO EMPTY STRING
  reset = () => {
    this.setState({
      solution: ""
    });
  };
  //THIS IS DELETE THE VERY LAST DIGIT, OPERATION, or DECIMAL POINT
  backspace = () => {
    this.setState({
      solution: this.state.solution.slice(0, -1)
    });
  };
  //THIS IS FOR TRACKING HISTORY
  historyfunc = (solution) => {
    this.state.history.push(this.state.solution);
  };

  render() {
    return (
      //THE FOLLOWING CODE INCLUDES ALL HTML CODE THAT IS FRONT END OF CALCULATOR
      <div>
        <div class="row">
          <h1>Calculator</h1>
        </div>

        <div className="cbody">
          <p class="solution">{this.state.solution}</p>
          <p class="solution">{this.state.history}</p>

          <button
            name="%"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            %
          </button>
          <button
            name="CE"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            CE
          </button>
          <button
            class="btn1"
            name="C"
            onClick={(e) => this.onClick(e.target.name)}
          >
            C
          </button>
          <br />

          <button
            name="1"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            1
          </button>
          <button
            name="2"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            2
          </button>
          <button
            name="3"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            3
          </button>
          <button
            class="btn2"
            name="+"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            +
          </button>
          <br />

          <button
            name="4"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            4
          </button>
          <button
            name="5"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            5
          </button>
          <button
            name="6"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            6
          </button>
          <button
            class="btn2"
            name="-"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            -
          </button>
          <br />

          <button
            name="7"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            7
          </button>
          <button
            name="8"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            8
          </button>
          <button
            name="9"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            9
          </button>
          <button
            class="btn2"
            name="*"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            x
          </button>
          <br />

          <button
            class="btn2"
            name="."
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            .
          </button>
          <button
            class="btn2"
            name="0"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            0
          </button>
          <button
            class="btn2"
            name="="
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            =
          </button>
          <button
            class="btn2"
            name="/"
            onClick={(clikcHandel) => this.onClick(clikcHandel.target.name)}
          >
            ÷
          </button>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
