export const SEND_STATION = 'SEND_STATION';
export const SEND_GENRE = 'SEND_GENRE';
export const SEND_FEELING = 'SEND_FEELING';
export const SEND_SEAT = 'SEND_SEAT';
export const SEND_PAYMENT = 'SEND_PAYMENT';

export const sendStation = station => ({
    type: SEND_STATION,
    station,
})

export const sendGenre = genre => ({
    type: SEND_GENRE,
    genre,
})

export const sendSeat = seat => ({
    type: SEND_SEAT,
    seat,
})

export const sendPayment = payment => ({
    type: SEND_PAYMENT,
    payment,
})