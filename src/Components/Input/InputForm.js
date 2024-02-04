import React, { useEffect, useState } from "react";
import "./InputForm.css";
const InputForm = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiSlab, setBmiSlab] = useState("");

  useEffect(() => {
    document.title = "BMI Calculator";
  }, []);

  // function to calculate bmi

  const bmiCalculation = () => {
    const heightInMeters = height / 100;

    if (!isNaN(weight) && !isNaN(height)) {
      const bmicalculations = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmi(bmicalculations);
      if (bmicalculations < 18.5) {
        setBmiSlab("You Are UnderWeight");
      } else if (bmicalculations >= 18.5 && bmicalculations <= 24.9) {
        setBmiSlab("You Have Normal Weight");
      } else if (bmicalculations >= 25 && bmicalculations <= 29.9) {
        setBmiSlab("You Are OverWeight");
      } else if (bmicalculations >= 30 && bmicalculations <= 34.9) {
        setBmiSlab("You Are Obese Class I");
      } else if (bmicalculations >= 35 && bmicalculations <= 39.9) {
        setBmiSlab("You Are Obese Class II");
      } else if (bmicalculations > 40) {
        setBmiSlab("You Are Obese Class III");
      }
    } else {
      setBmi(null);
    }
  };
  //Reset function
  const resetFunc = () => {
    // window.location.reload();

    setWeight("");
    setHeight("");
    setBmi(null);
    setBmiSlab("");
  };

  return (
    <div className="inputform-main">
      <div className="inputform-title">
        <h1 className="title">BMI Calculator</h1>
      </div>
      <form>
        <div className="inputform-input">
          <label htmlFor="weight" className="weightlable">
            Weight in Kg
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Your Weight In Kg"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <hr />
          <label htmlFor="height" className="weightlable">
            Height in Cm
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Your Height In Centimeter"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </form>

      <div className="bmi-result">
        <p>
          {bmi !== null && <p>Your BMI is: {bmi}</p>}
          <p>
            <span>{bmiSlab}</span>
          </p>
        </p>
      </div>
      <div className="inputform-buttons">
        <input
          type="button"
          value="Calculate BMI"
          className="calculate"
          onClick={bmiCalculation}
        />
        <input
          type="button"
          value="Reset"
          className="reset"
          onClick={resetFunc}
        />
      </div>
    </div>
  );
};

export default InputForm;
