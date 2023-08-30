firebase.auth().onAuthStateChanged(userAuthenticated => {
    if (userAuthenticated) {
        displayAllCourses(); // Pegar o Token do usuário
    }; 
});


function displayAllCourses() {
    const rowContainer = document.getElementById("data-course");
    rowContainer.innerHTML = "";

    showSpinner();

    firebase.firestore()
    .collection('courses')
    .get()
    .then(snapshot => {
        hideSpinner();
        
        const courses = snapshot.docs.map(doc => doc.data());


        if(courses.length === 0) {
            showError('Nenhum curso foi econtrado!');
        } else {
            hideError();
            courses.forEach(course => {
                const card = createCourseCard(course);
                rowContainer.appendChild(card);
            });
        }
    });
}


function searchCourses(query) {
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
        hideError();
        showSpinner();
        if(filteredCourses.length === 0) {
            hideSpinner();
            rowContainer.innerHTML = "";
            showError('Nenhum resultado correspondente encontrado!');
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
        searchCourses(query);
    } else {
        displayAllCourses();
    }
});


function showError(message) {
    setTimeout(() => {
        $('#error-message').show();
        $('#error-message').text(message);
    }, 2000)
}

function hideError() {
    $('#error-message').hide();
}

function showSpinner() {
    $('#spinner').show();
}

function hideSpinner() {
    setTimeout(() => {
        $('#spinner').hide();
    }, 2000);
}

$('#searchInput').attr('placeholder', 'Pesquisar cursos...');
$('#searchInput').attr('required');