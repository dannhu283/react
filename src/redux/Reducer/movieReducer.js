const initState = { selectedSeats: [], totalPrice: 0 };

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "selectSeat": {
      const { isSelected, ...seat } = action.payload;

      if (isSelected) {
        const selectedSeats = [
          ...state.selectedSeats,
          { ...seat, isBooked: false },
        ];
        const totalPrice = state.totalPrice + seat.gia;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;
      return { ...state, selectedSeats, totalPrice };
    }
    case "removeSeat": {
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== action.payload
      );

      const totalPrice = selectedSeats.reduce(
        (result, item) => result + item.gia,
        0
      );

      return { ...state, selectedSeats, totalPrice };
    }
    //e làm thêm tính năng reset
    case "reset": {
      return initState;
    }

    default:
      return state;
  }
};

export default movieReducer;
