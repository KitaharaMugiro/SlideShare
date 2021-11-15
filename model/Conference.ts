import { format, addHours } from "date-fns";

type Conference = {
    id: number;
    startDate: any;
    endDate: any;
    createdAt: any;
    title?: string | null | undefined;
    updatedAt: any;
}

export type ConferenceModel = {
    id: number;
    startDate: Date;
    endDate: Date;
    title: string;
    state: ConferenceState
    startDateString: string;
    endDateString: string;
}

type ConferenceState = "beforeStart" | "ongoing" | "afterEnd" | "completeEnd"

export default (conference?: Conference): ConferenceModel | null => {
    if (!conference) return null;

    const startDate = new Date(conference.startDate)
    const endDate = new Date(conference.endDate)
    const completeEndDate = addHours(endDate, 1) //1時間後に完全終了

    let state: ConferenceState = "beforeStart"
    if (startDate >= new Date()) {
        state = "beforeStart"
    } else if (endDate < new Date() && new Date() < completeEndDate) {
        state = "afterEnd"
    } else if (completeEndDate < new Date()) {
        state = "completeEnd"
    } else {
        state = "ongoing"
    }

    const response: ConferenceModel = {
        id: conference.id || 0,
        startDate,
        endDate,
        title: conference?.title || "",
        state,
        startDateString: format(startDate, "yyyy/MM/dd HH:mm"),
        endDateString: format(endDate, "yyyy/MM/dd HH:mm")
    }

    return response
}