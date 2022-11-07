function Details({ details }) {
  return (
    <>
      <h1>Details</h1>
      {details ? (
        <div
          style={{
            width: "100%",
            height: "350px",
            backgroundColor: "grey",
            marginBottom: "0.6rem",
            padding: "0.8rem",
            display: "flex"
          }}
        >
          <img
            src={details.show.image.medium}
            style={{ width: "40%", height: "100%" }}
          />
          <div>
            <h3>{details.show.name}</h3>
            <div>
              <a href={details.show.officialSite}>
                See Movies{details.show.name}
              </a>
            </div>
            <div>Summary: {details.show.summary}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Details;
