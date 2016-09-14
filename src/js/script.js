// require("./listings");
// console.log(listings);

$("#lazyjson").lazyjson({
    effect: "slideDown",
    pagination: {
    	active: true,
    	pages: 1,
    	count: 10
    },
    api: {
        uri: "/api/listings.json"
    }
});

$(function(){
	var listings =[

	{
		"id": 0,
		"address1": "1217 E Maple St",
		"address2": "Glendale, CA 91205",
		"imageLocation": "/images/1217-e-maple-st/1217-e-maple-st.jpg",
		"listingLocation": "/listings/1217-e-maple-st",
		"shortDescription": "Beautiful single family home located in the highly desirable area of Glendale. This gorgeous homes features 5 bedrooms and 4 bathrooms. An open floor plan with a large living area of 2,037 sq ft. and a large lot of 6,424 sq. ft.",
		"description": "Beautiful single family home located in the highly desirable area of Glendale. This gorgeous homes features 5 bedrooms and 4 bathrooms. An open floor plan with a large living area of 2,037 sq ft. and a large lot of 6,424 sq. ft. The home was remodeled in 2015 to includes new central AC system, Electrical, and Plumbing. Also Features Spacious bedrooms, Large living room, hardwood floors, newer paint, and a gorgeous backyard with a that is great for entertaining. Excellent location and in move-in condition. Near to schools, freeway, transportation, and shopping centers. This one will go fast.",
		"bed": 5,
		"bath": 4,
		"sqft": "2,037",
		"lotSize": "6424.00",
		"price": "$725,000",
		"priceSqft": "$356",
		"garageSize": "2 spaces",
		"propertyType": "House",
		"yearBuilt": "1923",
		"taxes": "",
		"mls": "WS16193641",
		"externalLink": "",
		"zillow": "",
		"trulia": ""
	},
	{
		"id": 1,
		"address1": "2074 Vista Ave",
		"address2": "Arcadia, CA 91006",
		"imageLocation": "/images/2074-vista-ave/2074-vista.jpg",
		"listingLocation": "/listings/2074-vista-ave",
		"shortDescription": "Rare opportunity to own a home in the Highlands of Arcadia with a view overlooking the valley! Recently fully renovated, everything you can see and touch in this 3 bedroom 3 bath home is brand new waiting for a lucky someone to call it home.",
		"description": "Rare opportunity to own a home in the Highlands of Arcadia with a view overlooking the valley! Recently fully renovated, everything you can see and touch in this 3 bedroom 3 bath home is brand new waiting for a lucky someone to call it home. Featuring a single level open floor plan, the great room allows for maximum customization while overlooking a one of a kind view of the valley below at all times. Bright and open concept reign supreme as a modern kitchen, restrooms and new flooring finish off the interior of this home. Outside you are greeted with a concrete covered patio leading to your recently refinished private pool overlooking the panoramic view as well. Leased solar panels offer cheaper renewable energy for you and your loved ones. Located near the end of a quiet cul-de-sac, privacy and safety abundant to those who seek it. Too much to explain here, must be seen to be appreciated!",
		"bed": 3,
		"bath": 3,
		"sqft": "2,154",
		"lotSize": "",
		"price": "$1,588,000",
		"priceSqft": "",
		"garageSize": "",
		"propertyType": "House",
		"yearBuilt": "",
		"taxes": "",
		"mls": "",
		"externalLink": "",
		"zillow": "",
		"trulia": ""
	}
]

$("#lazyjson").on("click", "a", function(e){
	e.preventDefault();
	var listingLink = ($(this).data("id"));
	console.log(listings[listingLink]);
})




















})