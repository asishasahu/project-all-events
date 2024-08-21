let allEvents = [
  {
    id : 1,
    name:"Birthday",
    seats:10,
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id : 2,
    name:"Buffet Breakfast",
    seats:6,
    image: "https://images.unsplash.com/photo-1622192309290-cad13f863bcf?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id : 3,
    name:"Movie",
    seats:3,
    image : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id : 4,
    name:"Buffet lunch",
    seats:0,
    image : "https://images.unsplash.com/photo-1522704483886-8a0eedc2b915?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id:5,
    name:"Buffet dinner",
    seats:20,
    image: "https://images.unsplash.com/photo-1645348464204-3bf2c44e7224?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

let content = "";
allEvents.forEach((event) => {
  event = `<div class="event" style="background-image:url(${event.image})">
        <h3>${event.name}</h3>
        <p>Seats left:${event.seats}</p>
        <h4>Availability</h4>
        <button id=${event.id}>Book now</button>
      </div>`;
      content +=event;
     
});

document.getElementById('allEvents').innerHTML = content;

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button)=> {
  button.addEventListener("click",()=>checkAvailability(button));
})

function checkAvailability(button) {
  let buttonID = button.id;
  let totalSeats = allEvents[buttonID-1].seats;

  let avilableAlert =  document.querySelectorAll("h4")[buttonID-1];
  avilableAlert.style.display = 'block';
  if(totalSeats==0) {
    avilableAlert.innerText = 'Not Available';
  } else {
    avilableAlert.innerText = 'Available';
  }
}

