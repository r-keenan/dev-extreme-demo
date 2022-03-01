export function generateData(count) {
  let i;
  const ids = [666, 1, 2];
  const surnames = ["Case", "Heller", "Biggums"];
  const names = ["Krystal", "Debbie", "Tyrone"];
  const issues = [
    "Mean to new hire",
    "Drinking on the job",
    "Under the influence of drugs while at work",
  ];
  const filledBys = ["Ross Keenan", "Kyle Wickersham", "Self"];
  const actionTakens = [
    "Moved her to another building",
    "Mandatory AA meetings",
    "Mandatory NA Meetings",
  ];
  const items = [];

  for (i = 0; i < count; i += 1) {
    const item = {
      id: ids[i],
      firstName: names[i],
      lastName: surnames[i],
      issue: issues[i],
      filledby: filledBys[i],
      actionTaken: actionTakens[i],
    };
    items.push(item);
  }
  return items;
}
