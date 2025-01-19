export function generateGoogleMapsLink(coordinates: string): string {
    const [x, y] = coordinates.split(",").map((coord) => coord.trim());
    return `https://www.google.com/maps?q=${x},${y}`;
}