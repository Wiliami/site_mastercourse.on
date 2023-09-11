$(document).ready(() => {
    const searchInput = $('#searchInput');
    const rowContainer = document.getElementById("data-course");
    // let searchTimeout;
    // firebase.auth().onAuthStateChanged(userAuthenticated => {
    //     if (userAuthenticated) {
    //         console.log('Está autenticado!'); // Pegar o Token do usuário
    //     }; 
    // });

    displayAllCourses();
    


    function searchCourses(query) {
        // clearTimeout(searchTimeout);

        // searchTimeout = setTimeout(() => {
            $.ajax({
                url: '/home/area-membro/courses/meus-cursos',
                method: 'POST',
                data: { query: query },
                success: (data) => {

                    rowContainer.innerHTML = ""; // Limpe o conteúdo atual
    
                    data.forEach((course) => {
                        const card = createCourseCard(course);
                        rowContainer.appendChild(card);
                    });
                },
                error: (error) => {
                    console.log('Erro na pesquisa', error);
                }
            });
        // }, 100);
    }



    function displayAllCourses() {
        // rowContainer.innerHTML = "";
       
        
        firebase.firestore()
        .collection('courses')
        .get()
        .then(snapshot => {
            
            const courses = snapshot.docs.map(doc => doc.data());
    
            if(courses.length === 0) {
                showError('Nenhum curso foi econtrado!');
            } else {    
                courses.forEach(course => {
                    const card = createCourseCard(course);
                    rowContainer.appendChild(card);
                });
            }
        });
    }
    
    searchInput.on('input', () => {
        const query = searchInput.val().trim().toLowerCase();
        console.log(query)
    
        if (query !== "") { 
            searchCourses(query);
        } else {
            displayAllCourses();
        }   
    });


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
        $('#error-message').text(message);
    }

});