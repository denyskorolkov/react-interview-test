/**
 * @param reservations - list of reservations
 *
 * @returns true if any 2 reservations conflict
 *   - reservations conflict if their times overlap in any way
 *   - reservations DO NOT conflict if they are just touching each other (reservation1.end === reservation2.start)
 */

interface Reservation {
  start: Date;
  end: Date;
}

// eslint-disable-next-line no-unused-vars
export const isScheduleConflict = (reservations: Reservation[]) => {
  // TODO: complete the implementation of this func

  return false;
};
