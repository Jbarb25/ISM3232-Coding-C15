//Task 1: Select the riskDashboard container and print to the console

const riskDashboardByID = document.getElementById("riskDashboard"); //pull the container by its ID
const riskDashboardByQuery = document.querySelector('#riskDashboard');  //pull the container by the query's first instance
console.log('Risk Dashboard Loaded') //print to the console


//Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department){  //add a function that established the parameters to the risk card
    const riskCard = document.createElement("div"); //create a card continer 
    riskCard.classList.add("riskCard"); //class the card with "riskCard"

    const riskHeading = document.createElement("h3"); //Establish a header for the card
    riskHeading.textContent = riskName //The header will be filled with the risk name

    const riskLabel = document. createElement("span"); //Establish a priority level for the card
    riskLabel.textContent = `Risk Level: ${riskLevel}`; //The risk level will be printed to the card

    const departmetPara = document. createElement("p"); //Establish a paragraph for the department
    departmetPara.textContent = `Department: ${department}`; //the paragraph will be filled with the department information

    //Append the risk items to the risk card
    riskCard.appendChild(riskHeading); 
    riskCard.appendChild(riskLabel);
    riskCard.appendChild(departmetPara);

    //Append the risk card to the risk dashboard 
    riskDashboardByID.appendChild(riskCard)

    //Task 3: Removing Risk Items
    const resolveButton = document.createElement("button"); //establish a resolve button
    resolveButton.textContent = "Resolve"; //label the button
    resolveButton.classList.add("resolveButton"); //assign the button the resolveButton class
    riskCard.appendChild(resolveButton); //append the button to the card

    resolveButton.addEventListener('click', (event) => {
       //Task 3: removeChild and stopPropagation()
    event.stopPropagation(); //clicking the resolve button will not bubble up to the ticket container
    riskDashboardByID.removeChild(riskCard); //remove the selected support ticket
});

    //Task 4: Categorized Risk By Level
    if (riskLevel === "High"){  //if risk is high 
        riskCard.classList.add("high-risk")} //class it high-risk
    else if (riskLevel === "Medium"){ //if risk is medium
        riskCard.classList.add("medium-risk")} //class it medium-risk
    else if (riskLevel === "Low"){ //if class is low
        riskCard.classList.add("low-risk")}; //class it low-risk

    colorCodedRiskLevel();  //Call the function to color code the risks 

}

    //Task 4: Color Code based on Risk Level
    function colorCodedRiskLevel(){ //function to color code the risk card by its level
        const highRisks = document.querySelectorAll(".high-risk");  //assign an array of all high risk card
        const medRisks = document.querySelectorAll(".medium-risk"); //assign an array of all medium risk card
        const lowRisks = document.querySelectorAll(".low-risk"); //assign an array of all low risk card
        Array.from(highRisks).forEach(riskCard => { //for each card from the high risks array, color the card red
            riskCard.style.backgroundColor ="#ff6666"});
        Array.from(medRisks).forEach(riskCard => { //for each card from the medium risks array, color the card yellow
            riskCard.style.backgroundColor ="#ffcc00"});
        Array.from(lowRisks).forEach(riskCard => { //for each card from the low risks array, color the card green
            riskCard.style.backgroundColor = "#66ff66"});}
    

//Test out risk cards with risk items from the javascript
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task 3: Test Resolve
addRiskItem("Market Fluctuations", "High", "Finance"); //Clicking Resolve removes the card from the dashboard

//Task 4: Test Categorizing Risk Level
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

//The button to submit new risk assessments lets users to input a new risk within the browser
const newRiskButton = document.querySelector(".riskAssessment"); //establish the button variable
const riskNameInput = document.getElementById("riskName"); //establish the risk name input variable
const riskLevelInput = document.getElementById("riskLevel") //establish the risk level input variable
const departmentInput = document.getElementById("department") //establish the risk department input variable

newRiskButton.addEventListener('click', (event) => { //the button will do the following when clicked
    event.stopPropagation(); //stop from bubbling up to the dashboard container
    const riskName = riskNameInput.value; //the risk name is linked ot the risk name input from the browser
    const riskLevel = riskLevelInput.value; //the risk level is linked ot the risk level input from the browser
    const department = departmentInput.value; //the risk department is linked ot the risk department input from the browser

    addRiskItem(riskName, riskLevel, department); //call the function to add the risk items to the risk card
    riskNameInput.value = ''; //plug in the risk name input info
    riskLevelInput.value = ''; //plug in the risk level input info
    departmentInput.value = ''; //plug in the risk department input info

    riskDashboardByID.appendChild(".addRiskAssessment")}); //append the new input card to the risk dashboard to display in browser


//Task 3: Removing Risk Items
    //Refer to task 2 for modification


//Task 4: Categorizing Risk by Level
  //Refer to task 2 for modification 

//Task 5: Implementing Bulk Updates 
const riskIncreaseButton = document.querySelector('.riskIncreaseButton'); //call the button established in the html that will increase the risk level

riskIncreaseButton.addEventListener('click', (event) => { //when the button is clicked it will do the following
    event.stopPropagation(); //stop it from bubbling to the dashboard container
    increaseRiskLevel();}); //call and apply the function

function increaseRiskLevel(){ 
    const allRiskCards = document.querySelectorAll(".riskCard"); //create an array of all risk cards
    allRiskCards.forEach(riskCard => { //for each risk card do the following
        const riskLevelElement = riskCard.querySelector('span'); //establish the risk level from the risk card
        const currentLevel = riskLevelElement.textContent; //establish the risk level element as a text 

    if (currentLevel === "Risk Level: Low"){ //if current risk level is low
        riskCard.classList.remove("low-risk"); //remove the current class list
        riskCard.classList.add("medium-risk"); //update the class to a higher risk
        riskLevelElement.textContent = "Risk Level: Medium" //update the browser to show the updated risk level
        colorCodedRiskLevel()} //apply the updated color code
    else if (currentLevel === "Risk Level: Medium"){ //if current risk level is medium
            riskCard.classList.remove("medium-risk"); //remove the current class lit
            riskCard.classList.add("high-risk"); //update the class to a higher risk
            riskLevelElement.textContent = "Risk Level: High" //update the browser to show the updated risk level
        colorCodedRiskLevel()}})} //apply the updated color code