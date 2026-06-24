
document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    // store the HTML form as JS const form
    // where form is just default for first form in DOM tree in browser

    form?.addEventListener('submit', event => {

        event.preventDefault();
        // preventDefault(); prevents re-loading page on submission

        console.log('Form have been submitted')
    });
});