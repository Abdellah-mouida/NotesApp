import React, { useEffect, useState } from "react";

import NoReactionNote from "../Components/NoReactionNote.jsx";
import axios from "axios";
import { base } from "../base/url.jsx";
import Cookies from "universal-cookie";

let Saved = () => {
  //
  let cookie = new Cookies();
  let id = cookie.get("Notes-User").ID;
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get(base + "/notes/" + id + "/saved").then((res) => {
      setNotes(res.data);
    });
  }, []);

  return (
    <div className="notes">
      {notes.length !== 0 ? (
        notes?.map((m, i) => (
          <NoReactionNote
            user={m.user}
            content={m.content}
            date={m.date}
            i={i}
            show={false}
            key={i}
          ></NoReactionNote>
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
export default Saved;
