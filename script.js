const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    const prices = document.querySelectorAll('.prices');
    let total = 0;

    // Sum all price values
    prices.forEach((price) => {
        total += parseFloat(price.textContent);
    });

    // Select the table to append the result
    const table = document.querySelector('table');
    
    // Create the new row and cell
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    // Requirement: The ID must be 'ans'
    totalCell.setAttribute('id', 'ans');
    totalCell.textContent = total;

    newRow.appendChild(totalCell);
    table.appendChild(newRow);

  
};

getSumBtn.addEventListener("click", getSum);

