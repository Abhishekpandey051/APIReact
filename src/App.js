import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

export default function App() {
  const url = "https://api.tvmaze.com/search/shows?q=all";
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    getData().then((data) => setData(data));
  }, []);

  const [details, setDetails] = useState();
  function getDetails(i) {
    const seeDetails = data.find((element, index) => {
      return i === index;
    });
    setDetails(seeDetails);
  }
  return (
    <div className="App">
      <Router>
        {data.length > 0 ? (
          <div>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/details">Details</Link>
            <Routes>
              <Route
                path="/"
                exact={true}
                element={<Home data={data} getDetails={getDetails} />}
              />
              <Route path="/details" element={<Details details={details} />} />
            </Routes>
          </div>
        ) : null}
      </Router>
    </div>
  );
}
