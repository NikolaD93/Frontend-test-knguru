import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns';

export function formatReviewDate(dateString: string): string {
  const date = new Date(dateString);

  if (isToday(date)) {
    return `Today`;
  }

  if (isYesterday(date)) {
    return `${formatDistanceToNow(date)} ago`;
  }

  return format(date, 'd MMMM yyyy');
}
