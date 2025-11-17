/**
 * @packageDocumentation
 * Date/time helpers for changelog operations.
 */

/** Normalize newlines to \n for consistent parsing. */
export function nl(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}

/**
 * Format a date to 'YYYY-MM-DD HH:MM:SS' in a specific IANA timezone.
 *
 * @param d - Date instance.
 * @param timeZone - IANA timezone (e.g., 'America/New_York').
 * @returns Formatted local timestamp.
 */
export function formatTimestamp(d: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .formatToParts(d)
    .reduce<Record<string, string>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    }, {});
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
}

/**
 * Format a date to 'YYYY-MM-DD' in a specific IANA timezone.
 *
 * @param d - Date instance.
 * @param timeZone - IANA timezone.
 * @returns Date string in YYYY-MM-DD.
 */
export function formatDay(d: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(d)
    .reduce<Record<string, string>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}
