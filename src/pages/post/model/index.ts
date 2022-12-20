import { createEvent, createStore } from 'effector';

export const $files = createStore<{ uri: string }[]>([]);

export const filesUploaded = createEvent<FileList | null>();
