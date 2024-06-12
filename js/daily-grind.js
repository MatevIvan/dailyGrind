// alert("js file connected")

/*Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates 
unique colors and content for each weekday (Sunday to Saturday) into the page.  The 
content must include:

One unique image, with appropriate and matching content in the alt tag.
A paragraph or two of content that describes the daily item (paragraph must include 
  the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for 
each day of the week.  All of the above must occur within one page.

pic - the src of the coffee
alt - the alt tage for the coffee pic 
desc - a description of the coffee
color - the color associated with the coffee 
day - the day of the week for the coffee
name - the name of the coffee
*/

function coffeeTemplate(coffee) {
  return `
      <p>
        <img
          src="${coffee.pic}"
          alt="${coffee.alt}"
          id="coffee"
        />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is
        <strong class="feature">${coffee.name}</strong>. ${coffee.desc}
      </p>
  `;
}

let myDate = new Date();
let myDay = myDate.getDay();

// Manually change the day for testing
// myDay = 0;

let today;
let coffee;

//use location object to access querystring (address bar)
const queryString = window.location.search;

//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("day")) {
  //from querystring
  myDay = parseInt(urlParams.get("day"));
}

switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: "Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a bubble tea",
      color: "#BC8F8F", //light caramel brown
      day: today,
      desc: `Bubble tea, also known as boba tea, is a 
      tea-based drink typically made with tea, milk or fruit 
      flavorings, and chewy tapioca pearls (boba), served 
      cold with a wide straw to accommodate the tapioca pearls.`,
    };
    break;
  case 1:
    today = "Monday";
    coffee = {
      name: "Caramel Latte",
      pic: "images/caramel-latte.jpg",
      alt: "a picture of a caramel latte",
      color: "#A0522D", //warm golden brown
      day: today,
      desc: `A caramel latte is a coffee drink made with espresso, 
      steamed milk, and caramel syrup, topped with a layer of 
      foam and an additional drizzle of caramel sauce for extra sweetness.`,
    };
    break;
  case 2:
    today = "Tuesday";
    coffee = {
      name: "Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "a picture of a cold brew coffee",
      color: "#4F2B1D", //dark amber
      day: today,
      desc: `Cold brew is a coffee brewing method where 
      coarsely ground coffee beans are steeped in cold 
      water for an extended period, usually 12-24 hours, 
      resulting in a smooth, less acidic coffee concentrate 
      that is typically served over ice.`,
    };
    break;
  case 3:
    today = "Wednesday";
    coffee = {
      name: "Drip",
      pic: "images/drip.jpg",
      alt: "a picture of drip coffee",
      color: "#3B2F17", //dark brown
      day: today,
      desc: `Drip coffee is a brewing method where hot water 
      is poured over medium-ground coffee beans, allowing it 
      to drip through a filter into a carafe, resulting in a 
      clean, well-balanced cup.`,
    };
    break;
  case 4:
    today = "Thursday";
    coffee = {
      name: "Frappaccino",
      pic: "images/frappaccino.jpg",
      alt: "a picture of a frappaccino coffee",
      color: "#D2B48C", //creamy beige
      day: today,
      desc: `A Frappuccino is a blended iced coffee beverage, 
      topped with whipped cream and flavored syrups, 
      combining coffee, milk, ice, and various flavorings 
      such as caramel or mocha.`,
    };
    break;
  case 5:
    today = "Friday";
    coffee = {
      name: "Mocha",
      pic: "images/mocha.jpg",
      alt: "a picture of a mocha",
      color: "#654321", //rich brown
      day: today,
      desc: `A mocha, or café mocha, is a coffee beverage that 
      combines espresso, steamed milk, and chocolate syrup or 
      cocoa powder, topped with whipped cream and 
      chocolate shavings, offering a rich, chocolatey flavor.`,
    };
    break;
  case 6:
    today = "Saturday";
    coffee = {
      name: "Pumpkin Spice Latte",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "a picture of a pumpkin spice latte",
      color: "#D2691E", //warm orange brown
      day: today,
      desc: `A pumpkin spice latte is a seasonal coffee drink 
      made with espresso, steamed milk, pumpkin pie spices 
      (such as cinnamon, nutmeg, and cloves), and pumpkin 
      puree, topped with whipped cream and a sprinkle 
      of pumpkin pie spice.`,
    };
    break;
  default:
    today = "invalid day";
}

// places our coffee object on the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

const features = document.querySelectorAll(".feature");
features.forEach((feature) => {
  feature.style.color = coffee.color;
});
