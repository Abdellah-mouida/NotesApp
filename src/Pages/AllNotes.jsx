import React, { useEffect, useRef, useState } from "react";
import Note from "../Components/Note.jsx";
import axios from "axios";
import { base } from "../base/url.jsx";
import Cookies from "universal-cookie";

let AllNotes = (props) => {
  //
  let cookie = new Cookies();
  let i = cookie.get("Notes-User").ID;

  let [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get(base + "/notes/" + i).then((res) => {
      setNotes(res.data);
      console.log(res);
    });
  }, [notes]);
  console.log(notes);
  return (
    <div className="notes">
      {notes.length !== 0 ? (
        notes?.map((x, id) => (
          <Note
            user={x.user}
            content={x.content}
            date={x.date}
            idInAll={x.id}
            i={id}
            favId={x.idInFavorite}
            savId={x.idInSaved}
            userId={i}
            note={x}
            key={id}
            // favorite={x.favorite}
            // saved={x.saved}
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
export default AllNotes;
