export const sortTickets = (ticket, preference) => {
  switch (preference) {
    case "High to Low":
      return [...ticket].sort((a, b) => b.priority.localeCompare(a.priority));
    case "Low to High":
      return [...ticket].sort((a, b) => a.priority.localeCompare(b.priority));
    default:
      return ticket;
  }
};
