document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector('.login-form');


    const users = [
    { username: 'Alexandria', password: 'Alexandria@123**' ,  governorate: 'Alexandria' },
    { username: 'Aswan', password: 'Aswan88#@@'  ,  governorate: 'Aswan' },
    { username: 'Asyut', password: 'Asyut99&65'   ,  governorate: 'Asyut'},
    { username: 'Beheira', password: 'Beheira%4$$'   ,  governorate: 'Beheira'},
    { username: 'Dakahlia', password: 'Dakahlia@!%$7'  ,  governorate: 'Dakahlia' },
    { username: 'Damietta ', password: 'Damietta @!6*&7'   ,  governorate: 'Damietta'},
    { username: 'Faiyum ', password: 'Faiyum @!66^&^7'  ,  governorate: 'Faiyum' },
    { username: 'Gharbia ', password: 'Gharbia @!66^+_('  ,  governorate: 'Gharbia' },
    { username: 'Giza', password: 'Giza@!66%$#7'  ,  governorate: 'Giza' },
    { username: 'Ismailia', password: 'Ismailia@!66**'   ,  governorate: 'Ismailia'},
    { username: 'Kafr El Sheikh ', password: 'Kafr El Sheikh @!6&^%'  ,  governorate: 'Kafr El Sheikh' },
    { username: 'Luxor', password: 'Luxor@!6%$#'  ,  governorate: 'Luxor'},
    { username: 'Matrouh', password: 'Matrouh@!6&^'  ,  governorate: 'Matrouh' },
    { username: 'Minya', password: 'Minya@!()8&'  ,  governorate: 'Minya' },
    { username: 'Monufia ', password: 'Monufia @!#@!7'  ,  governorate: 'Monufia' },
    { username: 'New Valley ', password: 'New Valley @!6%%'  ,  governorate: 'New Valley ' },
    { username: 'North Sinai', password: 'North Sinai((&*%^'   ,  governorate: 'North Sinai'},
    { username: 'Port Said', password: 'Port Said@!()*'  ,  governorate: 'Port Said' },
    { username: 'Qalyubia', password: 'Qalyubia@!6$#@'   ,  governorate: 'Qalyubia'},
    { username: 'Qena ', password: 'Qena @!66^&*'  ,  governorate: 'Qena' },
    { username: 'Red Sea', password: 'Red Sea@!_(7'  ,  governorate: 'Red Sea' },
    { username: 'Sharqia', password: 'Sharqia@#@!^7'  ,  governorate: 'Sharqia' },
    { username: 'Sohag', password: 'Sohag@!66^^4'   ,  governorate: 'Sohag'},
    { username: 'South Sinai', password: 'South Sinai@!**6^7'  ,  governorate: 'South Sinai' },
    { username: 'Suez', password: 'Suez@!6+^7'  ,  governorate: 'Suez' }

    ];

    if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
    }


    form.addEventListener('submit', function(e) {
    e.preventDefault(); 


    const username = document.getElementById('admin-name').value;
    const password = document.getElementById('password').value;
    const governorate = document.getElementById('governorate').value;


    const storedUsers = JSON.parse(localStorage.getItem('users'));

    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {

        alert('Login Successful!');

        localStorage.setItem('loggedInUser', JSON.stringify({ username, governorate }));


        window.location.href = "dashboard.html";
    } else {

        document.getElementById('error-message').style.display = 'block';
    }
    });
});
