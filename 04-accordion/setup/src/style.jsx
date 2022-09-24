import React from "react";
import styled from "styled-components";

export const Background = styled.body`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  border-radius: 5px;
  height: 80vh;
  width: 80vw;
  background: #eee;
`;

export const Title = styled.div`
  letter-spacing: 0.14rem;
  line-height: 2.1rem;
  font-size: 1.7rem;
  margin: 2rem;
`;

export const CardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  overflow-y: auto;
  height: 100%;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  background-color: #fff;
  border: 1px solid silver;
  .active {
  }
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 1rem;
  width: 28rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
export const Btn = styled.div`
  color: brown;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  background-color: #e9e9e9;
`;
export const CardContent = styled.div`
  overflow: hidden;
  /* height: auto; */
  height: ${(props) => (props.isClicked ? "0" : "auto")};
`;

export default Style;
