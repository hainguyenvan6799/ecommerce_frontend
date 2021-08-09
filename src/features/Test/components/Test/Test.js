import React from "react";
import Button from "shareComponent/Button/Button";

function Test(props) {
  return (
    <div>
      <Button
        backgroundColor="success"
        size="small"
        icon="fas fa-car"
        animate={true}
      >
        Test Now
      </Button>
    </div>
  );
}

Test.propTypes = {};

export default Test;
