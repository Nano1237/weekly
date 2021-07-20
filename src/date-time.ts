export class DateTime {

    /**
     * @description
     * Either returns 0 if the current week number is negative or it returns the number of weeks passed from the beginning
     */
    public static getCurrentWeekNumber(start: Date): number {
        const weekNow = this.weeksBetween(start, new Date());
        return weekNow > 0 ? weekNow : 1;
    }

    /**
     * @description
     * Returns the passed weeks between two dates
     * @param start
     * @param end
     */
    private static weeksBetween(start: Date, end: Date): number {
        return Math.ceil((end.getTime() - start.getTime()) / 604800000);
    }
}
