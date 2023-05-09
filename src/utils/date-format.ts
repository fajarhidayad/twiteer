import moment from "moment";

export const formatDate = (date: string) => {
  const isToday = moment(date).isSame(moment(), "day");
  if (isToday) {
    return moment(date).fromNow();
  } else {
    return moment(date).format("D MMM [at] HH:mm");
  }
};
