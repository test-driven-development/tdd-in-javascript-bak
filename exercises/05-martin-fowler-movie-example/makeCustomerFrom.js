let makeCustomerFrom = (name) => {
  let rentals = [];
  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let rental = rentals[i];
        frequentRenterPoints += rental.getFrequentRenterPoints();

        //show figures for this rental
        statement += '\t' + rental.movie.title + '\t' + rental.getCharge().toString(10) + '\n';

        total += rental.getCharge();
      }

      //add footer lines
      statement += 'Amount owed is ' + total.toString(10) + '\n';
      statement += 'You earned ' + String(frequentRenterPoints) +
          ' frequent renter points';

      return statement;
    }
  };
};

export {makeCustomerFrom};
