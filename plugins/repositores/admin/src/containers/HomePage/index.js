import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import axios from "axios";

export const Wrapper = styled.div`
  padding: 18px 30px;
  p {
    margin-top: auto;
  }
`;

const headers = [
  {
    name: "Name",
    value: "name",
  },
  {
    name: "Description",
    value: "description",
  },
  {
    name: "Url",
    value: "html_url",
  },
];

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      await axios
        .get("https://api.github.com/users/perosa100/repos")
        .then((res) => setRows(res.data))
        .catch((e) =>
          strapi.notification.error(`Ops limite de git execido ${e}`)
        );
    }
    loadRepos();
  }, []);

  return (
    <Wrapper>
      <Header
        title={{ label: "Meus Repositorios" }}
        content="List de repositios do meu github"
      />

      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
