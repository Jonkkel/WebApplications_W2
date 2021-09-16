import "./styles.css";

document.getElementById("app").innerHTML = `
`;

const addCommentButton = document.getElementById("add-comment");

addCommentButton.addEventListener("click", function () {
  const textArea = document.getElementById("comment");
  const list = document.getElementById("list");
  let li = document.createElement("li");

  var rating = document.getElementById("rating");
  var text = rating.options[rating.selectedIndex].text;

  let comment = document.createElement("div");
  let comment_rating = document.createElement("div");
  let comment_text = document.createElement("div");
  const button = document.createElement("button");
  button.innerHTML = "remove";
  button.classList.add("remove-comment");
  button.style.visibility = "hidden";
  button.onclick = function () {
    this.closest("li").remove();
  };

  comment_rating.classList.add("comment-rating");
  comment_text.classList.add("comment_text");

  comment_rating.innerHTML = text;
  comment_text.innerHTML = textArea.value;

  comment.appendChild(comment_rating);
  comment.appendChild(comment_text);
  comment.appendChild(button);

  li.appendChild(comment);
  textArea.value = "";
  list.appendChild(li);
});

const deleteCommentButton = document.getElementById("delete-comment");
deleteCommentButton.addEventListener("click", function () {
  const elems = document.getElementsByClassName("remove-comment");
  let i = 0;
  while (elems[i]) {
    elems[i].style.visibility = "visible";
    i++;
  }
});
