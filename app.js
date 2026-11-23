
const events = [
    {
        name: "Nairobi Music Festival",
        category: "Music",
        date: "12 December 2026",
        location: "Nairobi",
        price: 1200
    },
    {
        name: "Comedy Night",
        category: "Comedy",
        date: "5 December 2026",
        location: "Westlands",
        price: 800
    },
    {
        name: "Rooftop Party",
        category: "Party",
        date: "19 December 2026",
        location: "Kilimani",
        price: 1500
    },
    {
        name: "Culture & Food Festival",
        category: "Festival",
        date: "10 January 2027",
        location: "Nairobi",
        price: 500
    }
];

const eventList = document.getElementById("event-list");

events.forEach((event, index) => {
    const card = document.createElement("div");

    card.style.background = "white";
    card.style.padding = "25px";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 4px 15px #00000010";

    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Category: ${event.category}</p>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <h3 style="color:#6941c6">
            KSh ${event.price.toLocaleString()}
        </h3>
        <button onclick="bookEvent(${index})"
        style="background:#6941c6;color:white;
        padding:12px;border:0;border-radius:6px;
        cursor:pointer;margin-top:15px">
            Book Now
        </button>
    `;

    eventList.appendChild(card);
});

function bookEvent(index) {
    const event = events[index];

    const name = prompt("Enter your full name:");

    if (!name || !name.trim()) return;

    const phone = prompt("Enter your M-Pesa phone number:");

    if (!phone || !phone.trim()) return;

    const quantity = Number(
        prompt("How many tickets would you like?")
    );

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        alert("Please enter between 1 and 10 tickets.");
        return;
    }

    const total = event.price * quantity;

    alert(
        "BOOKING DETAILS\n\n" +
        "Event: " + event.name + "\n" +
        "Customer: " + name + "\n" +
        "Tickets: " + quantity + "\n" +
        "Total: KSh " + total.toLocaleString() +
        "\n\nYour booking is ready for payment integration."
        const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;

    const customer = {
        name: name,
        email: email
    };

    localStorage.setItem(
        "twendezetuCustomer",
        JSON.stringify(customer)
    );

    document.getElementById("accountMessage").textContent =
        "Welcome to TwendeZetu, " + name + "!";

    registerForm.reset();
});
    );
}
