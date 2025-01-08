// 로그인 기능
const loginButton = document.querySelector("#login-button");
const logoutButton = document.querySelector("#logout-button");
const welcomeMessage = document.querySelector("#welcome-message");
const blogTitle = document.querySelector("#blog-title")
let currentUser = null; // 현재 로그인한 사용자 이름

loginButton.addEventListener("click", () => {
    const username = prompt("사용자 이름을 입력하세요:");
    if (username && username.trim() !== "") {
        currentUser = username.trim();
        blogTitle.textContent = `${currentUser}의 블로그`
        welcomeMessage.textContent = `다시 오신 걸 환영합니다, ${currentUser}님!`;
        loginButton.style.display = "none";
        logoutButton.style.display = "inline";
    } else {
        alert("유효한 이름을 입력하세요.");
    }
});

logoutButton.addEventListener("click", () => {
    currentUser = null;
    blogTitle.textContent = "-"
    welcomeMessage.textContent = "로그인하지 않았습니다.";
    loginButton.style.display = "inline";
    logoutButton.style.display = "none";
});

        // 댓글 작성 기능
const commentInput = document.querySelector("#comment-input");
const commentButton = document.querySelector("#comment-button");
const commentList = document.querySelector("#comment-list");

commentButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const li = document.createElement("li");
        li.textContent = commentText;
        commentList.appendChild(li);
        commentInput.value = ""; // 입력 필드 초기화
    } else {
        alert("댓글을 입력하세요.");
    }
});
