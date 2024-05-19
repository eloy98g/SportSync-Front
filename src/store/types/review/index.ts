export default interface Review {
  users: string[];
  rating: number | null;
  comment: string;
  reviewedBy: string;
  activityGid: string;
}
