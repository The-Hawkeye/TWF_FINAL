
function getProductWeight(product) {
    const weights = {
        "A": 3,
        "B": 2,
        "C": 8,
        "D": 12,
        "E": 25,
        "F": 15,
        "G": 0.5,
        "H": 1,
        "I": 2
    };
    return weights[product];
}
function calculateDeliveryCost(order) {
    const distances = {
        "C1": 3,
        "C2": 2.5,
        "C3": 2
    };

    let totalCostToL1 = [0, 0, 0];

    for (let product in order) {
        let center = getProductCenter(product);
        let weight = getProductWeight(product) * order[product];
        let distance = distances[center];

        totalCostToL1[center.charCodeAt(1) - 49] += weight;
    }
  
    for (let i = 0; i < totalCostToL1.length; i++) {
        let weight = totalCostToL1[i];
        let center = "C" + (i + 1);
        let distance = distances[center];
        let costToL1 = calculateCost(distance, weight);
         if (distance !== Math.max(...Object.values(distances)) && weight!=0) {
            costToL1+= 10*distances[center];
        }
        
        totalCostToL1[i] = costToL1;
    }
   
    let totalCost = totalCostToL1.reduce((acc, curr) => acc + curr, 0);
    return totalCost;
}




function getProductCenter(product) {
    const centers = {
        "A": "C1",
        "B": "C1",
        "C": "C1",
        "D": "C2",
        "E": "C2",
        "F": "C2",
        "G": "C3",
        "H": "C3",
        "I": "C3"
    };
    return centers[product];
}

function calculateCost(distance, weight) {
    if(weight==0)
      return 0;
    let temp = Math.ceil(weight / 5);
    
   
    return 10*distance+ 8*distance*(temp-1) ;
}


module.exports = calculateDeliveryCost;
