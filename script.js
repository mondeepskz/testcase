
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
   
    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex";
    } else {
        sidebar.style.display = "none";
    }

};