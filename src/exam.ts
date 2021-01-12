import type firebase from 'firebase';

export type ExamEventName = 'start' | 'breach';

export interface ExamEvent {
    event: ExamEventName;
    createdAt: firebase.firestore.Timestamp;
    ip: string;

    metadata: {
        [key: string]: string;
    }
}
