export default defineEventHandler(async (event) => {

	// //handle query params
	// const query = getQuery(event);


	// //handle post data (age in this case)
	// const body = await readBody(event); 


	//api call with private key - you can put this into an environment variable
	const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_pSxcyXHHuLXDZAbb7icrrdcnGnQMkGdSVDrsvYoK')


	return data;
	// {
	// 	message: `Hello, ${query.name}! You are ${body.age} years old.`
	// }
})

//important updates above to getting query parameters!
//use getQuery(); use ${query.name} to specify parameter