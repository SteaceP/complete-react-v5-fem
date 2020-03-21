import React from "react";

const Details = props => {
  //Show the props that Reach Router is sending
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
