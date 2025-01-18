export function extractDate(dateTime: Date): string {
    const date = new Date(dateTime);
    return date.toISOString().slice(0, 10);
}