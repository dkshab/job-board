import React from "react";
import { Link } from "react-router-dom";

const JobSort = ({ showContent }) => {
  if (showContent === "Jobs by Category") {
    return (
      <div className="JobSort">
        <ul>
          <li>
            <Link to="/">IT & Telecommunications</Link>
          </li>
          <li>
            <Link to="/">Banking, Finance, Insurance, Stockbroking</Link>
          </li>
          <li>
            <Link to="/">
              Engineering, Technical, Production & Manufacturing
            </Link>
          </li>
          <li>
            <Link to="/">Accounting, Auditing</Link>
          </li>
          <li>
            <Link to="/">Sales & Purchasing</Link>
          </li>
          <li>
            <Link to="/">FMCG, Retail, Wholesale & Supply Chain</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Education & Training</Link>
          </li>
          <li>
            <Link to="/">Human Resources & Recruitment</Link>
          </li>
          <li>
            <Link to="/">Agriculture, Forestry, Enviromental & Fishing</Link>
          </li>
          <li>
            <Link to="/">Construction, Design, Architecture & Property</Link>
          </li>
          <li>
            <Link to="/">Mining</Link>
          </li>
          <li>
            <Link to="/">Transport, Logistics & Freight</Link>
          </li>
          <li>
            <Link to="/">General Management</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Admin, Office Support & Services</Link>
          </li>
          <li>
            <Link to="/">Health, Fitness, Medical & Optometry</Link>
          </li>
        </ul>
      </div>
    );
  } else if (showContent === "Jobs by City") {
    return (
      <div className="JobSort">
        <ul>
          <li>
            <Link to="/">Jobs in Johannesburg</Link>
          </li>
          <li>
            <Link to="/">Jobs in Durban</Link>
          </li>
          <li>
            <Link to="/">Jobs in Johannesburg</Link>
          </li>
          <li>
            <Link to="/">Jobs in Cape Town</Link>
          </li>
          <li>
            <Link to="/">Jobs in East London</Link>
          </li>
          <li>
            <Link to="/">Jobs in Kimberley</Link>
          </li>
          <li>
            <Link to="/">Jobs in Bloemfontein</Link>
          </li>
          <li>
            <Link to="/">Jobs in Polokwane</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Jobs in Nelspruit</Link>
          </li>
          <li>
            <Link to="/">Jobs in Rustenburg</Link>
          </li>
        </ul>
      </div>
    );
  } else if (showContent === "Jobs by Title") {
    return (
      <div className="JobSort">
        <ul>
          <li>
            <Link to="/">IT Manager</Link>
          </li>
          <li>
            <Link to="/">Fund Accountant</Link>
          </li>
          <li>
            <Link to="/">Fleet Controller</Link>
          </li>
          <li>
            <Link to="/">Debtors Controller</Link>
          </li>
          <li>
            <Link to="/">Document Controller</Link>
          </li>
          <li>
            <Link to="/">Field Manager</Link>
          </li>
          <li>
            <Link to="/">Industrial Engineer</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">HR Administrator</Link>
          </li>
          <li>
            <Link to="/">Receptionist</Link>
          </li>
          <li>
            <Link to="/">Enviromental Officer</Link>
          </li>
          <li>
            <Link to="/">Project Administrator</Link>
          </li>
          <li>
            <Link to="/">Costing Clerk</Link>
          </li>
          <li>
            <Link to="/">Sales Assistant</Link>
          </li>
          <li>
            <Link to="/">Safety Officer</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Plant Operator</Link>
          </li>
          <li>
            <Link to="/">Sales Consultant</Link>
          </li>
          <li>
            <Link to="/">Credit Controller</Link>
          </li>
          <li>
            <Link to="/">Maintenance Electrician</Link>
          </li>
          <li>
            <Link to="/">Assistant</Link>
          </li>
          <li>
            <Link to="/">SQL Developer</Link>
          </li>
          <li>
            <Link to="/">Warehouse Assistant</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
        atque voluptates molestias perspiciatis sapiente recusandae ad fugiat
        nostrum odit incidunt rem quidem facilis! Ullam incidunt impedit quos
        dolores tempore reiciendis?
      </div>
    );
  }
};

export default JobSort;
