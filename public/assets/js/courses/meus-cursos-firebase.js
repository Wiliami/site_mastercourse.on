firebase.auth().onAuthStateChanged(userAuthenticated => {
    if (userAuthenticated) {
        userAuthenticated.getIdToken().then(token => token); // Pegar o Token do usuário
        findCourses(userAuthenticated);
    }
});


function findCourses(query) {
    firebase.firestore()
    .collection('courses')
    .get()
    .then(snapshot => {
        const courses = snapshot.docs.map(doc => doc.data());

        const filteredCourses = courses.filter(course => {
            const courseName = course.nameCourse.toLowerCase();
            const courseDescription = course.description.toLowerCase();
            return courseName.includes(query) || courseDescription.includes(query);
        });

    
        
        // elemento pai
        // Limpar conteúdo atual
        const rowContainer = document.getElementById("data-course");
        rowContainer.innerHTML = "";

        filteredCourses.forEach(course => {
            // wrapper
            const card = document.createElement('div');
            card.className = 'col';
        
            card.innerHTML = `
            <div class="card d-flex flex-column h-100">
                <div class="card-img-top">
                    <img src="${course.bannerURL || '/assets/images/img-not-found.jpg'}" class="card-img-top" alt="Banner do curso">
                </div>
                <div class="card-body flex-grow-1">
                    <h5 class="card-title">${course.nameCourse}</h5>
                    <p class="card-text">${course.description}</p>
                    <a href="/home/area-membro/courses/course-details" class="btn btn-primary mt-auto">Ver detalhes</a>
                </div>
            </div>
            `;
            rowContainer.appendChild(card);
        });
    }); 
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value;
    findCourses(query);
});
