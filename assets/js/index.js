__main = `
    <h4>Welcome to Mr.Dev !</h4>
`;

__article__e = '';

__manager = `
<p class="footer-text hover bold-text">
Manager
</p>
<div id="manager-section">  
<form action="https://formspree.io/f/xnqlzgwd" method="POST" id="manager-wizard-id">
    <div class="form-group box-button check-button"> 
        <input type="radio" name="@cateogory__front-end" class="radio-button" id="front-end__category" /> 
        <label for="@cateogory__front-end">Front-end (html&css&js)</label> 
    </div>  
    <div class="form-group">
        <label for="e-mail">Your e-mail :</label>
        <br /> 
        <input autocomplete="off" type="email" name="e-mail" id="e-mail" /> 
    </div>
    <div class="form-group"> 
        <input type="button" class="box-button hover button small-button" name="check" id="chc" onclick="check_form()" value="Check" /> 
        <br /> 
        <input onclick="submit()" type="submit" class="box-button hover button sbm-bg small-button" name="sbm" id="sbm" value="Finish" /> 
    </div>  
</form>
</div>
`;

__rate = `
    
`;

function main_load() {
    $('main').html(__main);
    $('article').html(__article__e);
}

function rate_open() {
    if ($('main').html() === __main) {
        $('main').html(__rate);
    } else {
        $('main').html(__main);
    }
}

// function change_mode() {
//     if ($('article').html() === __article__e) {
//         $('article').html('__article__e__close');
//         document.getElementById('mode-changer-button').style.color = "white";
//         document.querySelector('.sbm-bg').style.color = "black";
//         document.querySelector('.sbm-bg').style.background = "white";
//         document.querySelector('.box-button').style.color = "black";
//         document.querySelector('.box-button').style.background = "white";
//         document.querySelector('button').style.color = "white";
//         document.querySelector('.link').style.color = "white";
//         document.body.style.color = "white";
//         document.body.style.background = "black";
//     } else {
//         $('article').html(__article__e);
//         document.getElementById('mode-changer-button').style.color = "black";
//         document.querySelector('.sbm-bg').style.color = "white";
//         document.querySelector('.sbm-bg').style.background = "black";
//         document.querySelector('.box-button').style.color = "white";
//         document.querySelector('.box-button').style.background = "black";
//         document.querySelector('button').style.color = "black";
//         document.querySelector('a').style.color = "black";
//         document.body.style.color = "black";
//         document.body.style.background = "white";
//     }
// }   

var manager_sound = new Audio('./app/sounds/manager.mp3');

function open_manager() {
    manager_sound.play();
    $('main').html(__manager)
}

function check_form() {
    if(document.getElementById('e-mail').value === '') {
        alert("Please fill the email section. We will send the lesson pack to your e-mail.")
    } else {
        var user_mail = document.getElementById('e-mail').value;
        var selected_pack = 'Undefinied';
        if(document.getElementById('front-end__category').checked === true) {
            selected_pack = 'Front-end (html&css&js)';
            alert(`You selected '${ selected_pack }'. Your pack will send to '${ user_mail }' in 24 hours. !!! NOTE : If you don't fill email box correctly we can't send files to you. Please click to finish.`)
        } else {
            alert('Please select lesson pack.');
        }
    }
}

function submit() {
    if(confirm('You want to give this lesson ?')) {
        // ...
    } else {
        location.href = "./index.html";
    }
}

// let star = document.querySelectorAll('input');
// let showValue = document.querySelector('#rating-value');

// for (let i = 0; i < star.length; i++) {
// 	star[i].addEventListener('click', function() {
// 		i = this.value;

// 		showValue.innerHTML = i + " out of 5";
// 	});
// }