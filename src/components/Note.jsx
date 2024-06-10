import React from "react";
import DeleteIcon from "../assets/svg/DeleteIcon";

const Note = ({ note: { id, noteText }, getNotes }) => {
  // delete notes
  const deleteNotes = async () => {
    try {
      if (confirm("Do u want to delete this note")) {
        const response = await fetch(
          `https://firenote-k-default-rtdb.firebaseio.com/notes/${id}.json`,
          { method: "DELETE" }
        );
        if (!response.ok) {
          throw new Error("Failed to delete this note");
        }
        getNotes();
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="bg-yellow-400 px-6 py-4 rounded-md mb-4 flex justify-between items-center">
      <h1 className="flex gap-3 items-center text-xl">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 fill-slate-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </span>
        {noteText}
      </h1>
      <div onClick={deleteNotes}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Note;
