import express from "express";
import cors from "cors";
let app = express();

// USE
app.use(express.json());
app.use(cors());

// VARIABLE , DATABASE
let Users = [];
let AllNotes = [];
// Id
let ID = 0;
let NoteId = 0;
let FavNotId = 0;
let SavNotId = 0;
//-------------------- USER -------------------------//

// Sign the User
app.post("/user", (req, res) => {
  let user = req.body;
  Users.push({ ID: ID, ...user });
  res.send({ ID: ID, ...user });

  ID++;
});

// Change User Profile
app.post("/user/profile/:userId", (req, res) => {
  let profile = req.body;
  let { userId } = req.params;
  Users[userId].profile = profile;
  res.send(Users[req.params.userId]);
});

//-------------------- NOTES -------------------------//

// Send User's Notes
app.get("/notes/:userId", (req, res) => {
  let { userId } = req.params;
  if (Users[userId].Notes) {
    res.send(Users[userId].Notes);
  }
});

// Add or Create a Note
app.post("/notes/:userId", (req, res) => {
  let { userId } = req.params;
  Users[userId].Notes.push(req.body);

  res.send("Note created succssefully");
});

// Delete a Note and Send it to Trash
app.delete("/notes/:userId/delete/:noteId", (req, res) => {
  let { userId } = req.params;
  let { noteId } = req.params;
  Users[userId].Trash.push(Users[userId].Notes[noteId]);
  if (Users[userId].Notes[noteId].idInFavorite !== -1) {
    Users[userId].Favorite.splice(Users[userId].Notes[noteId].idInFavorite, 1);
  }
  if (Users[userId].Notes[noteId].idInSaved !== -1) {
    Users[userId].Saved.splice(Users[userId].Notes[noteId].idInSaved, 1);
  }
  Users[userId].Notes.splice(noteId, 1);

  res.send("Note Deleted Succssfully");
});

//-------------------- FAVORITE -------------------------//

// Send Favorites's User
app.get("/notes/:userId/favorite", (req, res) => {
  let { userId } = req.params;
  res.send(Users[userId].Favorite);
});
// Add a Note to Favorite
app.put("/notes/:userId/favorite/:noteId", (req, res) => {
  let { userId } = req.params;
  let { noteId } = req.params;
  Users[userId].Notes[noteId].idInFavorite = FavNotId;
  Users[userId].Favorite.push(Users[userId].Notes[noteId]);
  FavNotId++;
  console.log(Users[userId].Favorite);
  res.send("Note Added to Favorite Succssfully");
});
// Delete a Note fom Favorite
app.delete("/notes/:userId/favorite/:noteId", (req, res) => {
  let { userId } = req.params;
  let { noteId } = req.params;
  Users[userId].Favorite.splice(Users[userId].Notes[noteId].idInFavorite, 1);
  Users[userId].Notes[noteId].idInFavorite = -1;
  FavNotId--;
  res.send("Note Removed from Favorite Succssfully");
});

//-------------------- SAVED -------------------------//

// Send Saveds's User
app.get("/notes/:userId/saved", (req, res) => {
  let { userId } = req.params;
  res.send(Users[userId].Saved);
});

// Add a Note to Saved
app.put("/notes/:userId/saved/:noteId", (req, res) => {
  let { userId } = req.params;
  let { noteId } = req.params;
  Users[userId].Notes[noteId].idInSaved = SavNotId;
  Users[userId].Saved.push(Users[userId].Notes[noteId]);
  SavNotId++;
  console.log(Users[userId].Saved);
  res.send("Note Added to Saved Succssfully");
});
// Delete a Note fom Saved
app.delete("/notes/:userId/Saved/:noteId", (req, res) => {
  let { userId } = req.params;
  let { noteId } = req.params;
  Users[userId].Saved.splice(Users[userId].Notes[noteId].idInSaved, 1);
  Users[userId].Notes[noteId].idInSaved = -1;
  SavNotId--;
  res.send("Note Removed from Saved Succssfully");
});

//-------------------- TRASH -------------------------//

// Send Tarsh of the User
app.get("/trash/:userId", (req, res) => {
  let { userId } = req.params;
  res.send(Users[userId].Trash);
});

// Delete Note Form Trash (permenaly)
app.delete("/trash/:userId/:noteId", (req, res) => {
  let { userId } = req.params;
  let { noteId } = req.params;
  Users[userId].Trash.splice(noteId, 1);
  res.send("Note Deleted");
});
// Log Out

// LISTEN
app.listen(3030);
