// Function to handle Sign-Up button
function handleSignUp() {
  const profile = localStorage.getItem("profile");
  if (profile) {
      // Notify the user and suggest login instead
      alert("You already have a profile. Please log in.");
  } else {
      // Redirect to the profile creation page
      window.location.href = "page2-profile.html";
  }
}

// Function to handle Log-In button
function handleLogin() {
  const profile = localStorage.getItem("profile");
  if (profile) {
      // Redirect to the next page if the profile exists
      window.location.href = "page3-inputActivity.html";
  } else {
      // Notify the user they need to sign up first
      alert("No profile found. Please sign up first.");
  }
}

// Function to save the profile
function saveProfile() {
  const name = document.getElementById("userName")?.value; 
  const weight = document.getElementById("userWeight")?.value;

  if (name && weight) {
      const newProfile = { name, weight };
      localStorage.setItem("profile", JSON.stringify(newProfile));
      window.location.href = "page3-inputActivity.html";
  } else {
      alert("Please fill in all the required fields.");
  }
}








//Function for MetsCalcuation
function MetsCalcuation(weight){
  const profile = localStorage.getItem("profile")

  const parsedProfile = JSON.parse(profile)
  const weight = parsedProfile.weight
  var potential= document.getElementById("activitySelect")
  var calories,mets;
  const act= potential.value;

      switch(act){

          case "Yoga":
          mets= 3.3;
          break;

          case "Strength Training":
          mets= 6.0
          break;

          case "Running":
          mets= 10;
          break;

          case "Swimming":
          mets= 7;
          break;

          case "Cycling":
          mets= 10;
          break;

          case "Pilates":
          mets= 4

          default:
            mets= 0;
            break;
        }
        calories = (weight/2.2)* mets
      
        const Calories = "You have burned(approximately)" + calories + "in an hour"
        document.getElementById("Calories").innerText =result;

        }
        

  



//Function for MetsCalcuation
function MetsCalcuation(weight){
  const profile = localStorage.getItem("profile")

  const parsedProfile = JSON.parse(profile)
  const weight = parsedProfile.weight
  var potential= document.getElementById("activitySelect")
  var calories,mets;
  const act= potential.value;

      switch(act){

          case "Yoga":
          mets= 3.3;
          break;

          case "Strength Training":
          mets= 6.0
          break;

          case "Running":
          mets= 10;
          break;

          case "Swimming":
          mets= 7;
          break;

          case "Cycling":
          mets= 10;
          break;

          case "Pilates":
          mets= 4

          default:
            mets= 0;
            break;
        }
        calories = (weight/2.2)* mets
      
        const Calories = "You have burned(approximately)" + calories + "in an hour"
        document.getElementById("Calories").innerText =result;

        }