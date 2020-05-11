import React from "react";

const About = () => {
  return (
    <div className="About">
      <h3>Testing ground for now</h3>
      <table className="rwd-table">
        <thead>
          <tr className="header-row">
            <th scope="col">Supplier Code</th>
            <th scope="col">Supplier Name</th>
            <th scope="col">Invoice Number</th>
            <th scope="col">Invoice Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Net Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="Supplier Code">UPS5005</td>
            <td data-th="Supplier Name">UPS</td>
            <td data-th="Invoice Number">ASDF19218</td>
            <td data-th="Invoice Date">06/25/2016</td>
            <td data-th="Due Date">12/25/2016</td>
            <td data-th="Net Amount">$8,322.12</td>
          </tr>
          <tr>
            <td data-th="Supplier Code">UPS3449</td>
            <td data-th="Supplier Name">UPS South Inc.</td>
            <td data-th="Invoice Number">ASDF29301</td>
            <td data-th="Invoice Date">6/24/2016</td>
            <td data-th="Due Date">12/25/2016</td>
            <td data-th="Net Amount">$3,255.49</td>
          </tr>
          <tr>
            <td data-th="Supplier Code">BOX5599</td>
            <td data-th="Supplier Name">BOX Pro West</td>
            <td data-th="Invoice Number">ASDF43000</td>
            <td data-th="Invoice Date">6/27/2016</td>
            <td data-th="Due Date">12/25/2016</td>
            <td data-th="Net Amount">$45,255.49</td>
          </tr>
          <tr>
            <td data-th="Supplier Code">PAN9999</td>
            <td data-th="Supplier Name">Pan Providers and Co.</td>
            <td data-th="Invoice Number">ASDF33433</td>
            <td data-th="Invoice Date">6/29/2016</td>
            <td data-th="Due Date">12/25/2016</td>
            <td data-th="Net Amount">$12,335.69</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
