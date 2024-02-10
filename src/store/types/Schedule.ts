import Day from "./Day";
import ScheduleType from "./ScheduleType";
import TimeSlot from "./TimeSlot";

export default interface Schedule {
  type: ScheduleType;
  timeSlot: TimeSlot[];
  days: Day[];
}
