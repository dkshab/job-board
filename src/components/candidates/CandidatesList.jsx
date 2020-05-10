import React, { useEffect, useState } from "react";

import { firestore } from "../../firebase";
import { collectIdsAndDocs } from "../../utilities";

const CandidatesList = ({ jobId }) => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      const snapshot = await firestore
        .collection(`jobs/${jobId}/applications/`)
        .get();

      const applications = snapshot.docs.map(collectIdsAndDocs);
      setApplications(applications);
    };

    fetchApplications();
  }, [jobId]);

  return (
    <div className="CandidatesList">
      <main id="table">
        <article>
          <h1>Amazing Facts About Celestial Bodies</h1>
          <p>
            All of the key "planetary" data you wanted to know, but were afraid
            to ask! (OK, the Moon and Pluto aren't planets. But you get the
            idea.)
            <cite className="text-small">
              Courtesy of
              <a
                href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
                target="_blank"
                rel="author"
              >
                Dr. David R. Williams, NASA
              </a>
              .
            </cite>
          </p>
          <div
            className="tablescroll"
            role="region"
            aria-labelledby="factsheet"
            tabIndex="0"
          >
            <table id="planetdata">
              <caption id="factsheet">Planetary Fact Sheet - Metric</caption>
              <thead>
                <tr>
                  <th scope="col">Planet Name</th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#mass">
                      Mass (10<sup>24</sup>kg)
                    </a>
                  </th>

                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#diam">
                      Diameter (km)
                    </a>
                  </th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#rotp">
                      Rotation Period (hours)
                    </a>
                  </th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#leng">
                      Length of Day (hours)
                    </a>
                  </th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#dist">
                      Distance from Sun (10<sup>6</sup> km)
                    </a>
                  </th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#orbp">
                      Orbital Period (days)
                    </a>
                  </th>

                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#temp">
                      Mean Temp (C)
                    </a>
                  </th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#sats">
                      Number of Moons
                    </a>
                  </th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#ring">
                      Ring System?
                    </a>
                  </th>
                  <th scope="col">
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#magf">
                      Global Magnetic Field?
                    </a>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html">
                      Mercury
                    </a>
                  </td>
                  <td>0.33</td>
                  <td>4879</td>
                  <td>1407.6</td>
                  <td>4222.6</td>
                  <td>57.9</td>
                  <td>88.0</td>
                  <td>167</td>
                  <td>0</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html">
                      Venus
                    </a>
                  </td>
                  <td>4.87</td>
                  <td>12,104</td>
                  <td>-5832.5</td>
                  <td>2802</td>
                  <td>108.2</td>
                  <td>224.7</td>
                  <td>464</td>
                  <td>0</td>
                  <td>No</td>
                  <td>No</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html">
                      Earth
                    </a>
                  </td>
                  <td>5.97</td>
                  <td>12,756</td>
                  <td>23.9</td>
                  <td>24</td>
                  <td>149.6</td>
                  <td>365.2</td>
                  <td>15</td>
                  <td>1</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html">
                      Moon
                    </a>
                  </td>
                  <td>0.073</td>
                  <td>3475</td>
                  <td>655.7</td>
                  <td>708.7</td>
                  <td>0.384*</td>
                  <td>27.3</td>
                  <td>-20</td>
                  <td>0</td>
                  <td>No</td>
                  <td>No</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html">
                      Mars
                    </a>
                  </td>
                  <td>0.642</td>
                  <td>6792</td>
                  <td>24.6</td>
                  <td>24.7</td>
                  <td>227.9</td>
                  <td>687.0</td>
                  <td>-65</td>
                  <td>2</td>
                  <td>No</td>
                  <td>No</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html">
                      Jupiter
                    </a>
                  </td>
                  <td>1898</td>
                  <td>142,984</td>
                  <td>9.9</td>
                  <td>9.9</td>
                  <td>778.6</td>
                  <td>4331</td>
                  <td>-110</td>
                  <td>79</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/saturnfact.html">
                      Saturn
                    </a>
                  </td>
                  <td>568</td>
                  <td>120,536</td>
                  <td>10.7</td>
                  <td>10.7</td>
                  <td>1433.5</td>
                  <td>10,747</td>
                  <td>-140</td>
                  <td>62</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/uranusfact.html">
                      Uranus
                    </a>
                  </td>
                  <td>86.8</td>
                  <td>51,118</td>
                  <td>-17.2</td>
                  <td>17.2</td>
                  <td>2872.5</td>
                  <td>30,589</td>
                  <td>-195</td>
                  <td>27</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html">
                      Neptune
                    </a>
                  </td>
                  <td>102</td>
                  <td>49,528</td>
                  <td>16.1</td>
                  <td>16.1</td>
                  <td>4495.1</td>
                  <td>59,800</td>
                  <td>-200</td>
                  <td>14</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/plutofact.html">
                      Pluto
                    </a>
                  </td>
                  <td>0.0146</td>
                  <td>2370</td>
                  <td>-153.3</td>
                  <td>153.3</td>
                  <td>5906.4</td>
                  <td>90,560</td>
                  <td>-225</td>
                  <td>5</td>
                  <td>No</td>
                  <td>Unknown</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <aside>
          <h3>Footnotes</h3>
          <p>
            * - See the
            <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html">
              Fact Sheet Notes.
            </a>
          </p>

          <h3>Additional Resources</h3>
          <ul>
            <li>
              <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_british.html">
                Planetary Fact Sheet in U.S. Units
              </a>
            </li>
            <li>
              <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html">
                Planetary Fact Sheet - Values compared to Earth
              </a>
            </li>
            <li>
              <a href="https://nssdc.gsfc.nasa.gov/planetary/planetfact.html">
                Index of Planetary Fact Sheets
              </a>
              - More detailed fact sheets for each planet
            </li>
            <li>
              <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html">
                Notes on the Fact Sheets
              </a>
              - Explanations of the values and headings in the fact sheet
            </li>
            <li>
              <a href="https://nssdc.gsfc.nasa.gov/planetary/education/schoolyard_ss/">
                Schoolyard Solar System
              </a>
              - Demonstration scale model of the solar system for the classroom
            </li>
          </ul>
        </aside>
      </main>
      <hr />
      <h3>Candidates List</h3>
      <table className="CandidatesList--table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Current Role</td>
            <td>Current Employer</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {applications &&
            applications.map((applicant) => (
              <tr key={applicant.id}>
                <td>
                  {applicant.firstName} {applicant.surname}
                </td>
                <td>{applicant.jobTitle0}</td>
                <td>{applicant.companyName0}</td>
                <td>{applicant.currentCity}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(applications, null, 2)}</pre> */}
    </div>
  );
};

export default CandidatesList;
