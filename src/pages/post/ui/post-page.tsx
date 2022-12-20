import { useUnit } from 'effector-react';
import { PDFRenderer, PNGRenderer } from 'react-doc-viewer';

import { routes } from '@/shared/config/routing';

import * as Styles from './styles';
import { $files, filesUploaded } from '../model';
import '../model/init';

export function PostPage() {
  const files = useUnit($files);

  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.Button onClick={() => routes.postsList.open()}>
          Go to Posts List
        </Styles.Button>
        <Styles.Title>Post Page</Styles.Title>
      </Styles.Header>

      <Styles.DocViewerWrapper>
        <Styles.FileInput
          multiple
          type="file"
          onChange={(e) => filesUploaded(e.target.files)}
        />

        {!!files.length && (
          <Styles.StyledDocViewer
            documents={files}
            pluginRenderers={[PDFRenderer, PNGRenderer]}
          />
        )}
      </Styles.DocViewerWrapper>
    </Styles.Wrapper>
  );
}
