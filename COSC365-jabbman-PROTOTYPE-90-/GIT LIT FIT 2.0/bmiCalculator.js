 function computeBMI() {
            // user inputs
            var height = Number(document.getElementById("height").value);
            var weight = Number(document.getElementById("weight").value);

            //Convert all units to metric
            height /= 39.3700787;
            weight /= 2.20462;

            //Perform calculation
            var BMI = weight / Math.pow(height, 2);

            //Display result of calculation
            document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

            var output = Math.round(BMI * 100) / 100
            if (output < 18.5){
                document.getElementById("comment").innerText = "Underweight";
                //goes to underweight webpage after 3 seconds
                window.setTimeout(function(){window.location.replace("bmiLANDpage.html");} , 3000);
            }
            else if (output >= 18.5 && output <= 25){
                document.getElementById("comment").innerText = "Healthy Weight";
                window.setTimeout(function(){window.location.replace("bmiLANDpage.html");} , 3000);
                }
            else if (output >= 25 && output <= 30){
                document.getElementById("comment").innerText = "Overweight";
                window.setTimeout(function(){window.location.replace("bmiLANDpage.html");} , 3000);
                }
            else if (output > 30){
                document.getElementById("comment").innerText = "Obese";
                window.setTimeout(function(){window.location.replace("bmiLANDpage.html");} , 3000);
            }
  
        }

    
