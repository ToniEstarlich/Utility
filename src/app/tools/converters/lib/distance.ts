export function convertKilometersToMiles(kilometers: number): number {
  if (!Number.isFinite(kilometers) || kilometers < 0) {
    throw new Error("Enter a valid non-negative distance.");
  }

  return kilometers * 0.621371;
}
