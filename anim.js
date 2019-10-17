function o() {
	var x = 0;
	white (x <= 99){
		x = x + 1;
			if(x % 4== 0 && x % 10 == 0){
				console.log("fourten");
			}else if(x % 10 == 0){
				console.log("ten");
			}else if(x % 4 == 0){
				console.log("four");
			}else{
				console.log(x);
			}
		}
	}

function c(){
	var x = promt("Enter Any Year.")
	var y =(x/100)
	var z =(y+1)
		alert("This Year Is In the" + " " + Math.floor(z) + "Th Century")
}

function angle(){
	var x = prompt("Enter One Angle Of A Triangle)")
	var y = prompt("Enter Another Angle Of The Triangle")
		alert(180 - x - y + " " + "Degrees Is The Other Angle Of The Triangle")
}