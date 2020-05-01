import React, { useContext } from "react";

import { UserContext } from "../providers/UserProvider";
import { Link } from "react-router-dom";

const Services = () => {
  const user = useContext(UserContext);

  console.log(user.roles);
  return (
    <div className="Services">
      <h3>Our Services</h3>{" "}
      <p className="lead">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis officia
        earum expedita adipisci delectus, ut accusamus dolores fugiat libero
        consectetur
      </p>
      <div className="Services--grid">
        <div className="service service1">
          <span className="fas fa-chart-bar"></span>
          <h4>Wealth Management</h4>
          <p>
            quae, assumenda doloribus obcaecati unde minus ducimus accusamus!
          </p>
          <Link to="/recruiters" className="CTA">
            Read More<span className="fas fa-angle-right"></span>
          </Link>
        </div>
        <div className="service service2">
          <span className="far fa-lightbulb"></span>
          <h4>Financial Planning</h4>
          <p>
            quae, assumenda doloribus obcaecati unde minus ducimus accusamus!
          </p>
          <Link to="/recruiters" className="CTA">
            Read More<span className="fas fa-angle-right"></span>
          </Link>
        </div>
        <div className="service service3">
          <span className="fas fa-dollar-sign"></span>
          <h4>Investment Banking</h4>
          <p>
            quae, assumenda doloribus obcaecati unde minus ducimus accusamus!
          </p>
          <Link to="/recruiters" className="CTA">
            Read More<span className="fas fa-angle-right"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
