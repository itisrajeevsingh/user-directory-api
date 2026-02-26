const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let users = [];
let currentPage = 1;
const usersPerPage = 15;

/* =========================
   Fetch Indian Users
========================= */
async function fetchUsers() {
  try {
    loadingText.style.display = "block";
    errorText.textContent = "";

    const response = await fetch("https://randomuser.me/api/?results=100&nat=in");

    if (!response.ok) {
      throw new Error("Failed to fetch users.");
    }

    const data = await response.json();
    users = data.results;

    renderUsers();

  } catch (error) {
    errorText.textContent = "Error fetching users.";
  } finally {
    loadingText.style.display = "none";
  }
}

/* =========================
   Render Users (With Pagination)
========================= */
function renderUsers(filteredUsers = users) {
  userContainer.innerHTML = "";

  const start = (currentPage - 1) * usersPerPage;
  const end = start + usersPerPage;
  const paginatedUsers = filteredUsers.slice(start, end);

  paginatedUsers.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <img src="${user.picture.medium}" class="avatar" />
      <h3>${user.name.first} ${user.name.last}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>City:</strong> ${user.location.city}</p>
      <p><strong>State:</strong> ${user.location.state}</p>
    `;

    userContainer.appendChild(card);
  });

  updatePagination(filteredUsers.length);
}

/* =========================
   Pagination Controls
========================= */
function updatePagination(totalUsers) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderUsers();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(users.length / usersPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderUsers();
  }
});

/* =========================
   Search (Resets Page)
========================= */
searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  currentPage = 1;

  const filtered = users.filter(user =>
    user.name.first.toLowerCase().includes(searchTerm) ||
    user.name.last.toLowerCase().includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm)
  );

  renderUsers(filtered);
});

/* =========================
   Init
========================= */
fetchUsers();