import { SupportedLanguage } from './languages';
import firebase from 'firebase';

export enum ProjectType {
    Template,
    Submission,
    Private,
}

export enum ProjectStatus {
    Unsubmitted,
    Submitted,
    HasFeedback,
}

export interface TaskProps {
    name: string;
    created: firebase.firestore.Timestamp;
    createdBy: string;
    language: SupportedLanguage;
    examMode: boolean;
}

export interface TemplateTask extends TaskProps {
    type: ProjectType.Template;
    classroomId: string;
}

export interface SubmissionTask extends TaskProps {
    type: ProjectType.Submission;
    status: ProjectStatus;
    parentTask: string;
    feedback?: string;
    classroomId: string;
}

export interface PrivateTask extends TaskProps {
    type: ProjectType.Private;
}

export type Task<T extends ProjectType = any> = T extends ProjectType.Submission ? SubmissionTask
    : T extends ProjectType.Template ? TemplateTask
        : T extends ProjectType.Private ? PrivateTask
            : never;

export type TaskDoc = {
    id: string;
} & Task;

export function isSubmissionTask(task?: Task | null): task is SubmissionTask {
    return task?.type === ProjectType.Submission
}

export function isTemplateTask(task: Task): task is TemplateTask {
    return task.type === ProjectType.Template
}
