import { useState } from "react";

function Home({ data, getDetails }) {
  return (
    <>
      <h1>Home</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {data.map((element, i) => {
          return (
            <div
              style={{
                width: "200px",
                height: "350px",
                backgroundColor: "grey",
                marginBottom: "0.6rem",
                padding: "0.8rem"
              }}
            >
              <img
                src={element.show.image.medium}
                style={{ width: "100%", height: "70%" }}
              />
              <div>{element.show.name}</div>
              <div>
                <a href={element.show.officialSite}>See Movies</a>
              </div>
              <button onClick={() => getDetails(i)}>See Details</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
