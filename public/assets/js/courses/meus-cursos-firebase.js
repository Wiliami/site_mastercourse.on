





document.addEventListener('DOMContentLoaded', () => {
    firebase.auth().onAuthStateChanged(userAuthenticated => {
        if (userAuthenticated) {
            displayAllCourses(); // Pegar o Token do usuário
        }; 
    });

    const rowContainer = document.getElementById("data-course");

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

    function showError(message) {
        setTimeout(() => {
            $('#error-message').show();
            $('#error-message').text(message);
        }, 2000);
    }
    
    function hideError() {
        $('#error-message').hide();
    }
    
    function showLoading() {
        $('#spinner').show();
    }
    
    function hideLoading() {
        setTimeout(() => {
            $('#spinner').hide();
        }, 2000);
    }
    
    $('#searchInput').attr('placeholder', 'Pesquisar cursos...');
    $('#searchInput').attr('required');


    function displayAllCourses() {
   
        rowContainer.innerHTML = "";
    
        showLoading();
        
        firebase.firestore()
        .collection('courses')
        .get()
        .then(snapshot => {
            
            const courses = snapshot.docs.map(doc => doc.data());
    
            if(courses.length === 0) {
                showError('Nenhum curso foi econtrado!');
            } else {    
                hideLoading();
                hideError();
                courses.forEach(course => {
                    const card = createCourseCard(course);
                    rowContainer.appendChild(card);
                });
            }
        });
    }
    displayAllCourses();

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

});

// function searchCourses(query) {
//     showLoading();
//     firebase.firestore()
//     .collection('courses')
//     .get()
//     .then(snapshot => {
//         const courses = snapshot.docs.map(doc => doc.data());

//         const filteredCourses = courses.filter(course => {
//             const courseName = course.nameCourse.toLowerCase();
//             const courseDescription = course.description.toLowerCase();
//             return courseName.includes(query) || courseDescription.includes(query);
//         });
        
//         // Elemento pai
//         // Limpar conteúdo atual
//         const rowContainer = document.getElementById("data-course");
//         rowContainer.innerHTML = "";
//         hideError();
//         hideLoading();
//         if(filteredCourses.length === 0) {
//             rowContainer.innerHTML = "";
//             showError('Nenhum resultado correspondente encontrado!');
//         } else {
//             hideLoading();
//             rowContainer.innerHTML = "";
//             hideError();
//             filteredCourses.forEach(course => {
//                 const card = createCourseCard(course);
//                 rowContainer.appendChild(card);
//             });
//             hideLoading();
//         }
//     }); 
// }


