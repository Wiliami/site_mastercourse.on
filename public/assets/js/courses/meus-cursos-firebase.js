firebase.auth().onAuthStateChanged(userAuthenticated => {
    if (userAuthenticated) {
        displayAllCourses(); // Pegar o Token do usuário
    }; 
});


function displayAllCourses() {
    firebase.firestore()
    .collection('courses')
    .get()
    .then(snapshot => {
        const courses = snapshot.docs.map(doc => doc.data());

        const rowContainer = document.getElementById("data-course");
        rowContainer.innerHTML = "";

        courses.forEach(course => {
            const card = createCourseCard(course);
            rowContainer.appendChild(card);
        });
    });
}


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
        
        // Elemento pai
        // Limpar conteúdo atual
        const rowContainer = document.getElementById("data-course");
        rowContainer.innerHTML = "";

        showSpinner();
        if(filteredCourses.length === 0) {
            hideSpinner();
            rowContainer.innerHTML = "";
            showError('Nenhum curso foi encontrado!');
        } else {
            hideSpinner();
            rowContainer.innerHTML = "";
            hideError();
            filteredCourses.forEach(course => {
                const card = createCourseCard(course);
                rowContainer.appendChild(card);
            });
            hideSpinner();
        }
    }); 
}


function createCourseCard(course) {
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
    return card;
}


const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim().toLowerCase();
    if(query !== "") {
        findCourses(query);
    } else {
        displayAllCourses();
    }
});


function showError(message) {
    $('#error-message').show();
    $('#error-message').text(message);
}

function hideError() {
    $('#error-message').hide();
}

function showSpinner() {
    $('#spinner').show();
}

function hideSpinner() {
    $('#spinner').hide();
}