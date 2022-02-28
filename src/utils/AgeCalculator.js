function AgeCalculator(dob) {
    const current = new Date();
    
     dob_split = dob.split("/");
  
    //The plus one is necesary because the months are counting from 0.
     let potentialAge = current.getUTCFullYear() - parseInt(dob_split[2]);
     if (current.getUTCMonth() + 1 < parseInt(dob_split[0])) {
      potentialAge = potentialAge - 1;
       return potentialAge;
     }
     if (current.getUTCMonth() === parseInt(dob_split[0])) {
      if (current.getUTCDate() +1 < parseInt(dob_split[1])) {
        potentialAge = potentialAge - 1;
       return potentialAge;
      }
    }
    return potentialAge;
  }

  export default AgeCalculator;