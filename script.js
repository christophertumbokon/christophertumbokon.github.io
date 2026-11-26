// Hard-reset any old dark setting
try {
  localStorage.removeItem("prefers-dark");
} catch (e) {}

document.body.classList.remove("dark");

// AOS init
document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 600,
      offset: 60
    });
  }
});

// Copy LinkedIn
const copyLinkedInBtn = document.getElementById("copyLinkedIn");

const linkedInURL = "https://www.linkedin.com/in/ctumbokon/";

copyLinkedInBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(linkedInURL);
    alert("LinkedIn URL copied!");
  } catch {
    alert(`Could not copy. Link: ${linkedInURL}`);
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the symposium poster
const roboticsPdfDialog = document.getElementById("roboticsPdfDialog");
const openRoboticsPdf = document.getElementById("openRoboticsPdf");
const closeRoboticsPdf = document.getElementById("closeRoboticsPdf");

openRoboticsPdf?.addEventListener("click", () => {
  roboticsPdfDialog?.showModal();
});

closeRoboticsPdf?.addEventListener("click", () => {
  roboticsPdfDialog?.close();
});
