
const typeOfDelivery = (deliveries) => {
    deliveries.forEach(delivery => {
        switch (delivery) {
            case 'mon':
                console.log("food delivery");


                break;
            case 'tue':
                console.log("cereal delivery");
                break;
            case 'wed':
                console.log('clothes delivery');
                break;
            case 'thur':
                console.log('spicies delivery');
                break;

            default:
                console.log('Deliveries Not Available');
                break;
        }
    });
}
const deliveries = ['mon', 'tue', 'wed'];
typeOfDelivery(deliveries);

// Number two
const bookStatus = (statuses) => {
    statuses.forEach(status => {
        switch (status) {
            case 'available':
                console.log('Ready to lend');


                break;
            case 'borrowed':
                console.log('Checked out');
                break;

            default:
                console.log('Books Not Available!');

                break;
        }
    })
}
const statuses = ['available', 'borrowed']
bookStatus(statuses);


// number three
function checkAges(ages) {
    const results = [];
  
    for (const age of ages) {
      if (age >= 18) {
        results.push("adult");
      } else {
        results.push("minor");
      }
    }
    return results
  }
  
  
  const ages = [20, 15, 30, 10];
  const ageResults = checkAges(ages);
  console.log(ageResults); 

// number four
function lives(live) {
    let count = live;
  
    while (count >= 0) {
        console.log(`you have ${count} lives left`);
      count--;
      
    
    }
  
    
  }
  
  lives(5);

// number five
function processFeedback(feedbackArray) {
    do {
      if (feedbackArray.length > 0) {
        const comment = feedbackArray.shift();
        console.log(comment);
      }
    } while (feedbackArray.length > 0);
  }
  
  const userFeedback = [
    "Great product!",
    "Could be better.",
    "Excellent service.",
    "Needs improvement.",
    "Love it!"
  ];
  
  processFeedback(userFeedback);


// number six
const loginStatuses = (loginStatus)=>{
    for(let i=0; i<loginStatus.length; i++){
        if (loginStatus[i]=="logged in" ){
            console.log("Welcome back!");
        }else{
            console.log("Please log in")
        }
    }
}
const loginStatus = ['logged in', 'not logged in','logged in']
loginStatuses(loginStatus)

// number seven
const supportTicketPriorities = (ticketPriorities)=>{
    ticketPriorities.forEach(ticketPriority =>{
        switch (ticketPriority) {
            case 'high':
                console.log('immediate!');
                
                break;
            case 'medium':
                console.log('relatively quickly!');
                break;
            case 'low' :
                console.log("addressed later!");
                break;   
        
            default:
                console.log('relatively quickly')
                break;
        }
    })
}
const ticketPriorities =['high','medium','low']
supportTicketPriorities(ticketPriorities)

// number 10
function countdown(seconds) {
    let count = seconds;
  
    while (count >= 0) {
      console.log(count);
      count--;
      
    
    }
  
    console.log("Time's up!");
  }
  
  countdown(10);