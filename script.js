let data = [
    {
      "id": 1,
      "name": "Sunset Villa",
      "description": "A luxurious villa with ocean views and modern amenities.",
      "imageUrl": "./assets/house1.jpg",
      "price": 950000,
      "location": "Malibu, CA",
      "bedrooms": 4,
      "bathrooms": 3,
      "kitchen": 1,
      "area": 3200,
      "garage": true,
      "yearBuilt": 2018,
      "type": "Villa"
    },
    {
      "id": 2,
      "name": "Downtown Apartment",
      "description": "Compact apartment perfect for young professionals.",
      "imageUrl": "./assets/house2.jpg",
      "price": 320000,
      "location": "New York, NY",
      "bedrooms": 1,
      "bathrooms": 1,
      "kitchen": 1,
      "area": 700,
      "garage": false,
      "yearBuilt": 2015,
      "type": "Apartment"
    },
    {
      "id": 3,
      "name": "Maplewood Family Home",
      "description": "Spacious family house in a quiet suburb with a large backyard.",
      "imageUrl": "./assets/house3.jpg",
      "price": 570000,
      "location": "Austin, TX",
      "bedrooms": 3,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 2100,
      "garage": true,
      "yearBuilt": 2010,
      "type": "House"
    },
    {
      "id": 4,
      "name": "Lakeside Retreat",
      "description": "Peaceful lakeside property ideal for vacations and rentals.",
      "imageUrl": "./assets/house4.jpg",
      "price": 740000,
      "location": "Lake Tahoe, NV",
      "bedrooms": 3,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 1800,
      "garage": false,
      "yearBuilt": 2005,
      "type": "Cabin"
    },
    {
      "id": 5,
      "name": "Urban Loft",
      "description": "Stylish loft with industrial design in the heart of the city.",
      "imageUrl": "./assets/house5.avif",
      "price": 420000,
      "location": "Chicago, IL",
      "bedrooms": 2,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 1300,
      "garage": true,
      "yearBuilt": 2017,
      "type": "Loft"
    },
    {
      "id": 6,
      "name": "Coastal Bungalow",
      "description": "Charming bungalow just steps away from the beach.",
      "imageUrl": "./assets/house6.avif",
      "price": 630000,
      "location": "Santa Barbara, CA",
      "bedrooms": 2,
      "bathrooms": 1,
      "kitchen": 1,
      "area": 1100,
      "garage": false,
      "yearBuilt": 1995,
      "type": "Bungalow"
    },
    {
      "id": 7,
      "name": "Mountain Chalet",
      "description": "Rustic chalet with stunning mountain views and ski access.",
      "imageUrl": "./assets/house7.avif",
      "price": 880000,
      "location": "Aspen, CO",
      "bedrooms": 4,
      "bathrooms": 3,
      "kitchen": 1,
      "area": 2500,
      "garage": true,
      "yearBuilt": 2008,
      "type": "Chalet"
    },
    {
      "id": 8,
      "name": "Country Estate",
      "description": "Expansive estate with private stables and rolling pastures.",
      "imageUrl": "./assets/house1.jpg",
      "price": 1250000,
      "location": "Nashville, TN",
      "bedrooms": 5,
      "bathrooms": 4,
      "kitchen": 2,
      "area": 5200,
      "garage": true,
      "yearBuilt": 2001,
      "type": "Estate"
    },
    {
      "id": 9,
      "name": "Eco-Friendly Smart Home",
      "description": "Modern home with smart technology and sustainable features.",
      "imageUrl": "./assets/house1.jpg",
      "price": 690000,
      "location": "Portland, OR",
      "bedrooms": 3,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 1900,
      "garage": true,
      "yearBuilt": 2020,
      "type": "Smart Home"
    },
    {
      "id": 10,
      "name": "Penthouse Suite",
      "description": "Top-floor penthouse with panoramic city views and luxury amenities.",
      "imageUrl": "./assets/house1.jpg",
      "price": 1500000,
      "location": "Miami, FL",
      "bedrooms": 3,
      "bathrooms": 3,
      "kitchen": 1,
      "area": 2700,
      "garage": true,
      "yearBuilt": 2019,
      "type": "Penthouse"
    },
    {
      "id": 11,
      "name": "Riverside Cottage",
      "description": "Quaint cottage by the river, perfect for weekend getaways.",
      "imageUrl": "./assets/house1.jpg",
      "price": 360000,
      "location": "Bend, OR",
      "bedrooms": 2,
      "bathrooms": 1,
      "kitchen": 1,
      "area": 950,
      "garage": false,
      "yearBuilt": 1990,
      "type": "Cottage"
    },
    {
      "id": 12,
      "name": "Skyline Towers",
      "description": "Modern high-rise apartment with amazing city skyline views.",
      "imageUrl": "./assets/house1.jpg",
      "price": 780000,
      "location": "Seattle, WA",
      "bedrooms": 2,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 1200,
      "garage": true,
      "yearBuilt": 2016,
      "type": "Condo"
    },
    {
      "id": 13,
      "name": "Greenfield Ranch",
      "description": "Large ranch property with open fields and modern farmhouse.",
      "imageUrl": "./assets/house1.jpg",
      "price": 990000,
      "location": "Bozeman, MT",
      "bedrooms": 4,
      "bathrooms": 3,
      "kitchen": 1,
      "area": 3500,
      "garage": true,
      "yearBuilt": 2012,
      "type": "Ranch"
    },
    {
      "id": 14,
      "name": "Oceanview Condo",
      "description": "Condo unit with beautiful ocean views and resort-style living.",
      "imageUrl": "./assets/house1.jpg",
      "price": 850000,
      "location": "Honolulu, HI",
      "bedrooms": 2,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 1400,
      "garage": true,
      "yearBuilt": 2011,
      "type": "Condo"
    },
    {
      "id": 15,
      "name": "Hilltop Mansion",
      "description": "Massive luxury mansion on a private hilltop with a view.",
      "imageUrl": "./assets/house1.jpg",
      "price": 2500000,
      "location": "Beverly Hills, CA",
      "bedrooms": 6,
      "bathrooms": 7,
      "kitchen": 2,
      "area": 8000,
      "garage": true,
      "yearBuilt": 2021,
      "type": "Mansion"
    },
    {
      "id": 16,
      "name": "Historic Brownstone",
      "description": "Classic brownstone with historical charm and updated features.",
      "imageUrl": "./assets/house1.jpg",
      "price": 710000,
      "location": "Boston, MA",
      "bedrooms": 3,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 1800,
      "garage": false,
      "yearBuilt": 1890,
      "type": "Townhouse"
    },
    {
      "id": 17,
      "name": "Forest Cabin",
      "description": "Remote forest cabin with serene surroundings and off-grid options.",
      "imageUrl": "./assets/house1.jpg",
      "price": 480000,
      "location": "Flagstaff, AZ",
      "bedrooms": 2,
      "bathrooms": 1,
      "kitchen": 1,
      "area": 1000,
      "garage": false,
      "yearBuilt": 2002,
      "type": "Cabin"
    },
    {
      "id": 18,
      "name": "Luxury Duplex",
      "description": "High-end duplex perfect for families or investment.",
      "imageUrl": "./assets/house1.jpg",
      "price": 660000,
      "location": "Charlotte, NC",
      "bedrooms": 4,
      "bathrooms": 3,
      "kitchen": 2,
      "area": 2400,
      "garage": true,
      "yearBuilt": 2018,
      "type": "Duplex"
    },
    {
      "id": 19,
      "name": "Tiny Home",
      "description": "Efficient tiny home with smart layout and eco design.",
      "imageUrl": "./assets/house1.jpg",
      "price": 150000,
      "location": "Sedona, AZ",
      "bedrooms": 1,
      "bathrooms": 1,
      "kitchen": 1,
      "area": 400,
      "garage": false,
      "yearBuilt": 2022,
      "type": "Tiny Home"
    },
    {
      "id": 20,
      "name": "Farmhouse Revival",
      "description": "Newly renovated farmhouse with classic details and modern touches.",
      "imageUrl": "./assets/house1.jpg",
      "price": 540000,
      "location": "Des Moines, IA",
      "bedrooms": 3,
      "bathrooms": 2,
      "kitchen": 1,
      "area": 2100,
      "garage": true,
      "yearBuilt": 1965,
      "type": "Farmhouse"
    }
  ]
function genImage(src,flag,housename,price,description,area,kitchen,bathrooms,bedrooms,garage,yearBuilt){
  let img = document.createElement("div")
  let imgtag = document.createElement("img")
  let name = document.createElement("h3")
  let houseprice = document.createElement("h3")
  let housedesc = document.createElement("h3")
  let housearea = document.createElement("h3")
  let housebathroom = document.createElement("h3")
  let housekitchen = document.createElement("h3")
  let housebedroom = document.createElement("h3")
  let housegarage = document.createElement("h3")
  let houseyear = document.createElement("h3")
   name.innerText = housename 
   houseprice.innerText = price 
   housedesc.innerText = description 
   housearea.innerText = `Area : ${area} sqft` 
   housebathroom.innerHTML = `${bathrooms}  <i class="material-icons">bathtub</i>` 
   housebedroom.innerHTML = `${bedrooms}  <i class="material-icons">bed</i>` 
   housekitchen.innerHTML = `${kitchen}  <i class="material-icons">kitchen</i>`  
   housegarage.innerHTML = garage ? `1 <i class="material-icons">directions_car</i>  ` :null
   houseyear.innerText = `House Build In ${yearBuilt} By Wellick Estate` 
   name.classList.add("housename") 
   houseprice .classList.add("houseprice")
   housedesc .classList.add("housedesc")
   housearea .classList.add("housearea")
   housebathroom .classList.add("housebathroom")
   housebedroom .classList.add("housebedroom")
   housekitchen .classList.add("housekitchen")
   housegarage .classList.add("housegarage")
   houseyear .classList.add("houseyear")
  let nameparent = document.createElement("div")
  nameparent.classList.add("nameparent")
  nameparent.append(name,housedesc)
  let utils = document.createElement("div")
  utils.classList.add("utils")
  if(housegarage.innerHTML ==""){

    utils.append(housebathroom,housebedroom,housekitchen)
  }else{

    utils.append(housebathroom,housebedroom,housekitchen,housegarage)
  }
  let otherdetails = document.createElement("div")
  otherdetails.classList.add("otherdetails")
  otherdetails.append(housearea,houseyear)
let fulldetails = document.createElement("div")
fulldetails.classList.add("carouse_data")
fulldetails.append(nameparent,utils,otherdetails)

  imgtag.setAttribute("src",src)
  imgtag.style.borderRadius  = 20
  if(flag){
    img.setAttribute("class","carousel__photo initial")
  }else{
    img.setAttribute("class","carousel__photo")

  }
  img.append(fulldetails,imgtag)
  return img
}

function createEstateElement(data) {
  const estate = document.createElement('div');
  estate.className = 'estate_child';

  estate.innerHTML = `
    <div class="estate_child_img">
      <img src="${data.imageUrl}" alt="${data.alt}">
    </div>
    <div class="estate_child_data">
      <div class="estate_child_name">${data.name}</div>
      <div class="estate_child_price">$${data.price}</div>
      <div class="estate_child_desc">${data.description}</div>
      <div class="estate_child_util">
         <div class="estate_child_utils_child">${data.bedrooms}<i class="material-icons">bed</i></div>
         <div class="estate_child_utils_child">${data.bathrooms}<i class="material-icons">bathtub</i></div>
         <div class="estate_child_utils_child">${data.kitchen}<i class="material-icons">kitchen</i></div>
         ${
          data.garage ?  `<div class="estate_child_utils_child"> 1 <i class="material-icons">directions_car</i></div>`:""
         }
        
      </div>
      <div class="estate_child_area">Area : ${data.area} SQFT</div>
      <div class="estate_child_location">${data.location}</div>
    </div>
  `;

  return estate;
}

data.map((item,id)=>{
  document.getElementsByClassName("estate_body")[0].append(createEstateElement(item))
  if(id==0){
    document.getElementsByClassName("carousel")[0].append(    genImage(item.imageUrl,true,item.name,item.price,item.description,item.area,item.kitchen,item.bathrooms,item.bedrooms,item.garage,item.yearBuilt))

  }else{
    document.getElementsByClassName("carousel")[0].append(     genImage(item.imageUrl,false,item.name,item.price,item.description,item.area,item.kitchen,item.bathrooms,item.bedrooms,item.garage,item.yearBuilt ))



  }
})


  // <img class="carousel__photo initial" src="http://placekitten.com/1600/900">
  