import React, { useState } from "react";
import useSetState from "../useSetState";

const initialState = {
  companyName: "",
  companyType: "",
  email: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
  companyNameBilling: "",
  emailBilling: "",
  vatNumber: "",
  phoneNumberBilling: "",
  province: "",
  postalAddress: "",
  postalCode: "",
  city: "",
};

const RecruiterSignUp = ({ showModal }) => {
  const [state, setState] = useSetState(initialState);
  const [showModalState, setShowModalState] = useState(showModal);

  console.log("What is showModal: ", showModalState);

  const handleClick = (event) => {
    event.preventDefault();

    setShowModalState(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    clear();
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <div className="RecruiterSignUp">
      <form>
        <fieldset>
          <legend>Sign Up</legend>
          <div className="title">
            {" "}
            <h3>Company Profile</h3>
          </div>
          <div className="RecruiterSignUp--container">
            <div className="field">
              {" "}
              <label htmlFor="companyName">Company Name </label>
              <input type="text" name="companyName" id="companyName" />
            </div>
            <div className="field">
              <label htmlFor="companyType">Company Type </label>
              <select name="companyType" id="companyType">
                <option value="Agency">Agency</option>
                <option value="Employer">Employer</option>
              </select>
            </div>
            <div className="field">
              {" "}
              <label htmlFor="email">Email Address </label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="phoneNumber">Phone Number </label>
              <input type="text" name="phoneNumber" id="phoneNumber" />
            </div>{" "}
            <div className="title">
              {" "}
              <h3>Billing Info</h3>
            </div>
            <div className="field">
              <label htmlFor="firstName">First Name </label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last Name </label>
              <input type="text" name="lastName" id="lastName" />
            </div>
            <div className="field">
              {" "}
              <label htmlFor="companyNameBilling">Company Name </label>
              <input
                type="text"
                name="companyNameBilling"
                id="companyNameBilling"
              />
            </div>
            <div className="field">
              <label htmlFor="vatNumber">VAT Number (if applicable) </label>
              <input type="text" name="vatNumber" id="vatNumber" />
            </div>
            <div className="field">
              {" "}
              <label htmlFor="emailBilling">Email Address </label>
              <input type="text" name="emailBilling" id="emailBilling" />
            </div>
            <div className="field">
              <label htmlFor="phoneNumberBilling">Phone Number </label>
              <input
                type="text"
                name="phoneNumberBilling"
                id="phoneNumberBilling"
              />
            </div>{" "}
          </div>
          <label htmlFor="postalAddress">Postal Address </label>
          <select name="province">
            <option value="Gauteng">Gauteng</option>
            <option value="Western Cape">Western Cape</option>
          </select>
          <input type="text" name="postalAddress" id="postalAddress" />
          <input type="text" name="city" />
          <input type="text" name="postalCode" />
          <h3>Order</h3>
          <p>Terms of Use</p>
          <label htmlFor="">
            {" "}
            I agree to the Terms of Use.
            <input type="checkbox" />
          </label>{" "}
          <div className="buttons">
            <button>Pay Later</button> <button>Checkout</button>{" "}
            <button className="sign-out" onClick={handleClick}>
              Close
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default RecruiterSignUp;
