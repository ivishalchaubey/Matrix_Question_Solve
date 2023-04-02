export const ViewMatrix = (req, res) => {
  try {
    const countries = ["india", "nepal", "germany", "finland"];
    let countriesMatrix = [];
    const rowSize = 3;
    const colSize = 3;
    for (let row = 0; row < rowSize; row++) {
      let rowCountries = [];
      for (let col = 0; col < colSize; col++) {
        rowCountries.push(
          countries[Math.floor(Math.random() * countries.length)]
        );
      }
      countriesMatrix.push(rowCountries);
    }

    const frequencyMap = new Map();
    // Filling frequency
    for (let contry in countries) {
      frequencyMap.set(countries[contry], 1);
    }

    // iterate matrix to count frequecy
    for (let row = 0; row < rowSize; row++) {
      for (let col = 1; col < colSize; col++) {
        if (countriesMatrix[row][col - 1] === countriesMatrix[row][col]) {
          frequencyMap.set(
            countriesMatrix[row][col - 1],
            frequencyMap.get(countriesMatrix[row][col - 1]) + 1
          );
        }
      }
    }

    let answer = [];
    for (const [key, value] of frequencyMap) {
      if (value > 1) {
        answer.push(key + ": " + value);
      }
    }
    res.send({
      countriesMatrix,
      Rank: answer.join("|"),
    });
    // console.log(countriesMatrix);
    // console.log("Frequency-> " + answer.join("|"));
  } catch (error) {
    res.send("Error While Calling View Matrix API");
  }
};
