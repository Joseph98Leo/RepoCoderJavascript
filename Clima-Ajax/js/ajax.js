(function(){

	const latitude = -12.0653;
	const longitude = -77.0311;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon=' + longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'json'
	})
	.done(function( data ){
		
		// console.log("Correcto!");
		// console.log( data ); // Se imprime en consola la api

		mostrar_data( data );

	})
	
	function mostrar_data( data ){

		// Imagen
		
		let url = `img/${data.weather[0].icon}.png`
		$(".imgClima").attr('src', url);

		let temperatura = Math.round(data.main.temp);
		$(".lblTemperatura").html( temperatura + "&#176;" );


		$(".divLoading").fadeOut(200,function(){
			$(".divInfo").fadeIn(200);
		});
	}
})();