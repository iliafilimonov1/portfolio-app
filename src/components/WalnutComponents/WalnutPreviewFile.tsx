import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const WalnutPreviewFile: React.FC<{}> = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // const url = 'https://gamerwall.pro/uploads/posts/2022-08/1661250612_37-gamerwall-pro-p-zimnie-uzori-vkontakte-63.jpg';

  return (
    <Worker workerUrl=" https://unpkg.com/pdfjs-dist@2.1.266/build/pdf.worker.min.js ">
      <div style={{ height: '750px' }}>
        <Viewer
          fileUrl="/pdf-open-parameters.pdf"
          plugins={[
            defaultLayoutPluginInstance,
          ]}
        />
      </div>
    </Worker>
  );
};

export default WalnutPreviewFile;
