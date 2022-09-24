import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const Question = ({ info, title }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <Container>
      <Card>
        <div>
          <h4 style={{ margin: "0" }}>{title}</h4>
          {isShow && <br />}
          {isShow ? info : null}
        </div>
        <div>
          <button onClick={() => setIsShow(!isShow)} className="btn">
            {isShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  height: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
