export default interface Review {
  gid: number;
  reviewedUser: number;
  reviewer: number;
  date: number;
  activityGid: number;
  comment: string;
  rating: number;
}
