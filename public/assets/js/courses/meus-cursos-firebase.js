$(document).ready(() => {
    
    $('#search-form').on('submit', (e) => {
        e.preventDefault();
        
        firebase.auth().onAuthStateChanged(userAuthenticated => {
            if (userAuthenticated) {
                console.log('Está autenticado!'); // Pegar o Token do usuário
            }; 
        });

        const query = $('#searchInput').val();


    
        // function displayAllCourses() {
        //     rowContainer.innerHTML = "";
        
        //     showLoading();
            
        //     firebase.firestore()
        //     .collection('courses')
        //     .get()
        //     .then(snapshot => {
                
        //         const courses = snapshot.docs.map(doc => doc.data());
        
        //         if(courses.length === 0) {
        //             showError('Nenhum curso foi econtrado!');
        //         } else {    
        //             hideLoading();
        //             hideError();
        //             courses.forEach(course => {
        //                 const card = createCourseCard(course);
        //                 rowContainer.appendChild(card);
        //             });
        //         }
        //     });
        // }
        // displayAllCourses();
    

    
       
 
        $.ajax({
            url: '/home/area-membro/courses/meus-cursos',
            method: 'POST',
            data: { query: query },
            success: (data) => {
                const searchResults = $('#data-course');
                searchResults.html('');

                data.forEach((course) => {

                    const resultElement = `
                    <div class="col">
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
                    </div>
                    `

                    searchResults.append(resultElement);

                });
            } 
        });
    });
});
    
    
 

    // function showError(message) {
    //     $('#error-message').show();
    //     $('#error-message').text(message);
    // }
    
    // function hideError() {
    //     $('#error-message').hide();
    // }
    
    // function showLoading() {
    //     $('#spinner').show();
    // }
    
    // function hideLoading() {
    //     $('#spinner').hide();
    // }