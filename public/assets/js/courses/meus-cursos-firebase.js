$(document).ready(() => {
    firebase.auth().onAuthStateChanged(userAuthenticated => {
        if (userAuthenticated) {
            displayAllCourses();
        } else {
            showError('Usuário não autenticado!');
        }
    });


    const rowContainer = document.getElementById("data-course");
    const searchInput = $('#searchInput');
    searchInput.attr('placeholder', 'Digite o nome do curso...');
    searchInput.attr('title', 'Pesquisar cursos...');

   
    searchInput.on('input', () => { 
        const query = searchInput.val().trim().toLowerCase();
        // console.log(query)

        if(query !== "") {
            searchCourses(query);
        } else {
            displayAllCourses();
        }
    });


    function renderCourses(courses, searchQuery) {
        const uniqueCourses = {};  // Usaremos um objeto para garantir a unicidade dos cursos

        rowContainer.innerHTML = ""; // Limpe o conteúdo atual

        if(courses.length === 0) {
            showError(`Nenhum curso correspondente foi encontrado para a pesquisa: <strong>${searchQuery}<strong>`);
        } else {
            hideError();
            courses.forEach((course) => {
                if(!uniqueCourses[course.nameCourseLowerCase]) {
                    uniqueCourses[course.nameCourseLowerCase] = true;
                    const card = createCourseCard(course);
                    rowContainer.appendChild(card);
                }
            })
        }
        
    }


    function searchCourses(query) {
        if (query !== "") { 
            $.ajax({
                url: '/home/area-membro/courses/meus-cursos',
                method: 'POST',
                data: { query: query },
                success: (data) => {
                    renderCourses(data, query)                 
                },
                error: (error) => {
                    console.error('Erro ao pesquisar os cursos: ', error);  // Adicione este log para verificar os erros
                    showError('Erro ao pesquisar cursos. Por favor, tente novamente mais tarde.');
                }
            });
        } else {
            displayAllCourses();
        }   
    }   


    function displayAllCourses() {
        rowContainer.innerHTML = ""; // Limpe o conteúdo atual

        firebase.firestore()
        .collection('courses')
        .get()
        .then(snapshot => {
            const courses = snapshot.docs.map(doc => doc.data());

            if(courses.length === 0) {
                showError('Nenhum curso foi econtrado!');   
            } else {  
                hideError();  
                renderCourses(courses);
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
        `
        return card;
    }
    

    function showError(message) {
        $('#error-message').show();
        $('#error-message').html(message);
    }


    function hideError() {
        $('#error-message').hide();
    }
    
});