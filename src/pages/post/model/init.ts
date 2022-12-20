import { sample } from 'effector';
import { debug } from 'patronum';

import { $files, filesUploaded } from '.';

sample({
  clock: filesUploaded,
  filter: Boolean,
  fn(files) {
    return Array.from(files).map((file) => ({
      uri: URL.createObjectURL(file),
    }));
  },
  target: $files,
});

debug($files);
