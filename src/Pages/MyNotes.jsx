import React, { useEffect, useRef, useState } from "react";
import Note from "../Components/Note.jsx";
import axios from "axios";
import { base } from "../base/url.jsx";
import Cookies from "universal-cookie";

let MyNotes = (props) => {
  //
  let cookie = new Cookies();
  let id = cookie.get("Notes-User").ID;
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get(base + "/notes/" + id).then((res) => {
      setNotes(res.data);
    });
  });

  return (
    <div className="notes">
      {notes.length !== 0 ? (
        notes?.map((m, i) => (
          <Note
            user={m.user}
            content={m.content}
            date={m.date}
            i={i}
            key={i}
            favId={m.idInFavorite}
            savId={m.idInSaved}
          ></Note>
        ))
      ) : (
        <div className="noNotes">
          <i className="fas fa-exclamation-triangle"></i>
          No Notes Founded
        </div>
      )}
    </div>
  );
};
export default MyNotes;
