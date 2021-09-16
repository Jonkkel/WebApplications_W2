import "./styles.css";

document.getElementById("app").innerHTML = `
`;

const addCommentButton = document.getElementById("add-comment");

addCommentButton.addEventListener("click", function () {
  const textArea = document.getElementById("comment");
  const list = document.getElementById("list");
  let li = document.createElement("li");
  li.innerHTML = textArea.value;
  list.appendChild(li);
});

const deleteCommentButton = document.getElementById("delete-comment");
deleteCommentButton.addEventListener("click", function () {
  const list = document.getElementById("list");
  var r = window.confirm("Delete all comments?");
  if (r === true) {
    while (list.firstChild) {
      list.removeChild(list.lastChild);
    }
  } else {
  }
});
