export const SEND_STATION = 'SEND_STATION';
export const SEND_GENRE = 'SEND_GENRE';

export const sendStation = station => ({
    type: SEND_STATION,
    station,
})

export const sendGenre = genre => ({
    type: SEND_GENRE,
    genre,
})