import React from "react";
import styled from "styled-components";
const ToggleCard = () => {
  return (
    <Card>
      <CardTitle>
        {data[0].title}
        <Btn onClick={() => setIsClicked(!isClicked)}>
          {!isClicked && <AiOutlineMinus></AiOutlineMinus>}
          {!!isClicked && <AiOutlinePlus></AiOutlinePlus>}
        </Btn>
      </CardTitle>
      <CardContent isClicked={isClicked}>{data[0].info}</CardContent>
    </Card>
  );
};

export default ToggleCard;
