

var start_button = document.querySelector('#start-game-btn');
var current_bet = document.querySelector('#current-bet').textContent;
const place_bet = document.querySelector('#add-to-bet-btn');
localStorage.getItem('current_bet', current_bet);
if(start_button.getAttribute('value') == 'off'){
    start_button.style.display = 'none';
}

localStorage.setItem('current_bet', current_bet);
place_bet.addEventListener('click', function() {
    if (document.querySelector('#bet-number').value >= 100) {
        var money = document.querySelector('#money-amount').textContent;
        var bet_value = document.querySelector('#current-bet').textContent;
        var final_pool = parseInt(bet_value) + parseInt(document.querySelector('#bet-number').value);
        
        document.querySelector('#current-bet').textContent = final_pool;
        start_button.style.display = '';
        money = parseInt(money) - parseInt(document.querySelector('#bet-number').value);
        
        document.querySelector('#money-amount').textContent = money;
        localStorage.setItem('current_money', money);
        localStorage.setItem('current_bet', final_pool);
} else {
    alert('You must bet at least 100!');
}});
