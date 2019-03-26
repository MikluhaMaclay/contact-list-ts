import React, { Component } from "react";
import styled from "styled-components";


const Container = styled.div`
margin-right: auto; /* 1 */
  margin-left:  auto; /* 1 */

  max-width: 960px; /* 2 */
  margin-top: 20px;
  padding-right: 10px; /* 3 */
  padding-left:  10px; /* 3 */
  background-color: palegoldenrod;
`;

const App = () => {
  return (
    <Container>
      <header><h2>Contacts</h2></header>
      <div>Contact item</div>
    </Container>
  );
};

export default App;
