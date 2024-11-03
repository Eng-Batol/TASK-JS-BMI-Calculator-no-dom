const { el } = require("@faker-js/faker");

/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */
function calculateBMI(weight, height) {
  /**
   *  Write your code here 👇🏼
   * The equation for BMI is (weight (kg) / height^2(m)).
   */
  // let BMI = 0;
  let  heightInMeter = height / 100;
  /**
   * Stop making changes here!
   */
  const BMI = (weight/heightInMeter**2)
  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState;
  
  /**
   * Stop making changes here!
   */
   if (BMI <18.5) {
    BMIState = "underweight";

   }else if (BMI <= 24.9){
    BMIState="healthy";
   } else if ( BMI <= 29.9 ){
    BMIState = "overweight";
   } else {
    BMIState = "obese";
   }

  return BMIState;// becouse i want he if statmnt to rerturn the value of the 
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState = "not healthy";

  /**
   * Stop making changes here!
   */
  return BMIState;
}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };
