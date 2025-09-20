function toggleSection(section) {
  const projectsContent = document.getElementById("projectsContent");
  const certificationsContent = document.getElementById("certificationsContent");
  const projectsLabel = document.getElementById("projectsLabel");
  const certificationsLabel = document.getElementById("certificationsLabel");

  if (!projectsContent || !certificationsContent) return;

  if (section === "projects") {
    projectsContent.classList.add("active");
    certificationsContent.classList.remove("active");
    projectsLabel.classList.add("active");
    certificationsLabel.classList.remove("active");
  } else {
    certificationsContent.classList.add("active");
    projectsContent.classList.remove("active");
    certificationsLabel.classList.add("active");
    projectsLabel.classList.remove("active");
  }
}