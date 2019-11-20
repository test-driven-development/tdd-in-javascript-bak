import {CHILDRENS, NEW_RELEASE, REGULAR} from './movie-codes';

let makeRentalFrom = (movie, daysRented) => {
  const getFrequentRenterPoints = () => {
// add frequent renter points by default
    let frequentRenterPoints = 1;
    // add bonus for a two day new release rental
    if ((movie.priceCode === NEW_RELEASE) &&
      daysRented > 1) {
      frequentRenterPoints++;
    }
    return frequentRenterPoints;
  };

  const getCharge = () => {
    let result = 0;
    //noinspection Eslint
    switch (movie.priceCode) {
      case REGULAR:

        result += 2;
        if (daysRented > 2) result += (daysRented - 2) * 1.5;
        break;

      case NEW_RELEASE:

        result += daysRented * 3;
        break;

      case CHILDRENS:

        result += 1.5;
        if (daysRented > 3) result += (daysRented - 3) * 1.5;
        break;
      default:

    }
    return result;
  };
  return {
    get movie() { return movie; },
    getCharge,
    getFrequentRenterPoints
  };
};

export {makeRentalFrom};
