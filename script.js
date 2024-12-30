// Function to toggle sidebar visibility
function toggleSidebar() {
     const sidebar = document.getElementById('sidebar');
     const isHidden = sidebar.style.transform === 'translateX(-250px)';
     sidebar.style.transform = isHidden ? 'translateX(0)' : 'translateX(-250px)';
 }
 
 // Attach the toggle function to the button
 document.getElementById('toggle-btn').addEventListener('click', toggleSidebar);
 