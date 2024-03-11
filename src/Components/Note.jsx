import axios from "axios";
import React, { useEffect, useState } from "react";
import { base } from "../base/url";
import Cookies from "universal-cookie";
import useSyncState from "../Hook/useSyncState";
// interface NoteProps {
//   picture?: string;
//   name: string;
//   date: string;
//   favorite: boolean;
//   saved: boolean;
//   content: string;
// }
// let rmMiliSecond = (d) => {
//   let time = d.split(" ")[1].slice(0, -3);
//   let splited = d.split(" ");
//   splited[1] = time;
//   return splited.join(" ");
// };
let Note = (props) => {
  let cookie = new Cookies();
  let id = cookie.get("Notes-User").ID;
  let [favorite, setFavorite] = useSyncState(props.favId !== -1);
  let [saved, setSaved] = useSyncState(props.savId !== -1);

  return (
    <div className="note">
      <header>
        <i
          title="Move to Recycle Bin"
          className="fas fa-trash delete"
          onClick={async () => {
            await axios
              .delete(base + `/notes/${id}/delete/${props.i}`)
              .catch((err) => console.log(err));
          }}
        ></i>
        <div className="state">
          <div className="point"></div>
        </div>
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
        <div className="tags">
          <p
            style={{
              backgroundColor: favorite ? "#ff2020" : "var(--light)",
              color: favorite ? "var(--white)" : "var(--black)",
            }}
            onClick={async () => {
              setFavorite(!favorite);
              if (favorite) {
                await axios
                  .delete(base + `/notes/${id}/favorite/${props.i}`)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              } else {
                await axios
                  .put(base + `/notes/${id}/favorite/${props.i}`)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              }
            }}
          >
            Favorite
          </p>
          <p
            style={{
              backgroundColor: saved ? "#ff9900" : "var(--light)",
              color: saved ? "var(--white)" : "var(--black)",
            }}
            onClick={async () => {
              setSaved(!saved);
              if (saved) {
                await axios
                  .delete(base + `/notes/${id}/saved/${props.i}`)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              } else {
                await axios
                  .put(base + `/notes/${id}/saved/${props.i}`)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              }
            }}
          >
            Saved
          </p>
        </div>
      </header>
      <section>
        <p>
          {/* {props.content.split("\n").map((m, i) => (
            <>
              <span>{m} </span>
              <br />
            </>
          // ))} //=> There is another way to do that by setting "    white-space-collapse: break-spaces;  " to the paragraphe <p></p> 
          // //=> Or jsut replace the p tag with <pre></pre> tag  */}
          {props.content}
        </p>
      </section>
      <hr />
    </div>
  );
};
export default Note;
