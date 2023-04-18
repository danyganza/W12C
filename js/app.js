function loginsucess(response){
    cookies.set(`token`,response[`data`][`token`])
    window[`location`]=`/pages/home.html`;
}

function loginfailure(error){
    let formexample = document.querySelector(`.form`);
    formexample.insertAdjacentHTML(`beforeend`, `<p>sorry, incorrect email or password</p>`);
};

function submit_click(details){
    let email_input= document.querySelector(`.submit`);
    let email_value= email_input[`value`];
    let password_input= document.querySelector(`.input`);
    let password_value= password_input[`value`];
    let login_button = document.querySelector(`.btn`);
    login_button.addEventListener(`click`, submit_click);

    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: password_value
        }
    }).then(loginsucess).catch(loginfailure);
}







