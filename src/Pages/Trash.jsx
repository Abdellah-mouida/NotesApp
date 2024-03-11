import axios from "axios";
import { useEffect, useState } from "react";
import { base } from "../base/url";
import NoReactionNote from "../Components/NoReactionNote";
import Cookies from "universal-cookie";

let Trash = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(base + `/trash/${new Cookies().get("Notes-User").ID}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="notes">
      {data.length !== 0 ? (
        data?.map((m, i) => (
          <NoReactionNote
            user={m.user}
            content={m.content}
            date={m.date}
            i={i}
            show={true}
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
export default Trash;
