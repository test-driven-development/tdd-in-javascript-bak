import {CHILDRENS, NEW_RELEASE, REGULAR} from './movie-codes';

let makeRentalFrom = (movie, daysRented) => {
  const amountFor = () => {
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
    get daysRented() { return daysRented; },
    amountFor
  };
};

export {makeRentalFrom};
