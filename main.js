function buyTicket() {
    const checkOut = document.getElementById('buyTickets')
    checkOut.classList.remove('overlay-none')
    checkOut.innerHTML = `
    <div class="overlay">
        <div class="form-tickets">
            <div class="form-tickets-header"><i class="fas fa-suitcase"></i>Tickets</div>
            <div class="form-tickets-pay">
                <div class="form-tickets-pay-lable-1"><i class="fas fa-shopping-cart"></i>Tickets, &15 per person</div>
                <input type="text" placeholder="How many?">
                <div class="form-tickets-pay-lable-1"><i class="fas fa-user-friends"></i>Send to</div>
                <input type="text" placeholder="Enter email">
                <button class="form-tickets-pay-btn" >PAY<i class="fas fa-check"></i></button>
                <div class="form-tickets-pay-footer">
                    <button onclick="closePay()">Close<i class="close-icon fas fa-times"></i></button>
                    <div>
                        Need <a href="#">help?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
function closePay() {
    const unCheckOut = document.getElementById('buyTickets')
    unCheckOut.classList.add('overlay-none')
}

function senData() {
    alert("Can't send message")
}