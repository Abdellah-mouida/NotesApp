import axios from "axios";
import React, { useState } from "react";
import { base } from "../base/url";
// interface NoteProps {
//   picture?: string;
//   name: string;
//   date: string;
//   favorite: boolean;
//   saved: boolean;
//   content: string;
// }
let NoReactionNote = (props) => {
  // let Notes = useState(JSON.parse(localStorage.getItem("Notes")));

  // let [content, setContent] = useState(Notes[props.i].content);
  // let [date, setDate] = useState(Notes[props.i].date);

  return (
    <div className="note">
      <header>
        {props.show && (
          <i
            title="This item will be Permanently DELETED"
            className="fas fa-trash delete"
            onClick={async () => {
              await axios
                .delete(base + `/trash/${props.i}`)
                .catch((err) => console.log(err));
            }}
          ></i>
        )}
        <div className="note-info">
          <div
            className="profile-img"
            style={{
              backgroundImage: `url(${props.picture})`,
            }}
          ></div>
          <div>
            <p>{props.user} </p>
            <p>{props.date} </p>
          </div>
        </div>
      </header>
      <section>
        <p>
          {props.content.split("\n").map((m, i) => (
            <>
              <span>{m} </span>
              <br />
            </>
          ))}
        </p>
      </section>
      <hr />
    </div>
  );
};
export default NoReactionNote;
