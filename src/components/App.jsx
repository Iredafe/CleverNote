import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(eachnote => (
        <Note
          key={eachnote.key}
          title={eachnote.title}
          content={eachnote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
