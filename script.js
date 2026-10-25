// 1. Like counter
let likes = 0;
const likesText = document.querySelector("#likes");

document.querySelector("#likeBtn").addEventListener("click", () => {
  likes = likes + 1;
  likesText.textContent = "Likes: " + likes;
});

// 2. New photo from a free API
document.querySelector("#photoBtn").addEventListener("click", async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  document.querySelector("#photo").src = data.message;
});

// 3. Dark mode toggle
const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

// 4. Update name from the input box
const nameInput = document.querySelector("#nameInput");
const userName = document.querySelector("#userName");

document.querySelector("#saveBtn").addEventListener("click", () => {
  const newName = nameInput.value.trim();

  if (newName === "") {
    alert("Please type a name first!");
    return;
  }

  userName.textContent = newName;
  localStorage.setItem("savedName", newName);
  nameInput.value = "";
});

// 5. Load the saved name when the page opens
const savedName = localStorage.getItem("savedName");
if (savedName) {
  userName.textContent = savedName;
}

// 6. Show skills using a loop
const mySkills = ["HTML", "CSS", "JavaScript", "Java", "Git"];
const skillList = document.querySelector("#skillList");

mySkills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillList.appendChild(li);
});
