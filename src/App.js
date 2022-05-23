import "./styles.css";
import React, { useState } from "react";
import UsersList from "./components/UsersList";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const pageBackward = () => {
    setPage(page - 1);
  };

  const pageForward = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="container">
        <header className="border-shadow">
          <h1 className="heading">welcome</h1>
        </header>
        <section className="main-section">
          <UsersList page={page} setMaxPages={setMaxPages} />
          <Pagination
            page={page}
            pageBackward={pageBackward}
            pageForward={pageForward}
            maxPages={maxPages}
          />
        </section>
      </div>
      <footer>
        <p>Created by HillaryWebb</p>
      </footer>
    </>
  );
}

export default App;
