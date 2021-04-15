import React, { useState } from "react";

import Search from "../Search";
import Content from "../container/Content";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <Content query={query} />
    </>
  );
};

export default Home;
