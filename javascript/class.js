fetch("../data/data.json")
.then(response => response.json())
.then(data => {
  const courseContainer = document.getElementById("courses");
  courseContainer.innerHTML = "";
  
  if (!data.cours || data.cours.length === 0) {
    courseContainer.innerHTML = "<p class='text-gray-500'>Aucun cours disponible.</p>";
    return;
  }
  
  data.cours.forEach(course => {
    const courseElement = `
      <div class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">${course.name}</h3>
        <p class="text-gray-600">Professeur : ${course.teacher}</p>
        <p class="text-gray-500">Classe : ${course.class}</p>
        <p class="text-gray-500">Horaire : ${course.schedule}</p>
        <p class="text-gray-500">Salle : ${course.room}</p>
      </div>
    `;
    courseContainer.innerHTML += courseElement;
  });
})
.catch(error => console.error("Erreur lors du chargement des données :", error));