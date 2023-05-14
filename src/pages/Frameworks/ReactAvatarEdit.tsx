import Button from '@/components/ui/Button/Button';
import Modal from '@/components/ui/Modal/Modal';
import React, { useState, useRef, useCallback } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { useToggle } from 'usehooks-ts';

const ReactAvatarEdit: React.FC = () => {
  const ref = useRef<AvatarEditor>();
  const [showModal, toggleShowModal] = useToggle();
  const [file, setFile] = useState<File>();

  const saveHandler = useCallback(() => {
    if (ref.current) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = ref.current.getImage();

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = ref.current.getImageScaledToCanvas();
      return [canvas, canvasScaled];
    }
    return undefined;
  }, []);

  return (
    <div>
      <Button onClick={toggleShowModal}>Открыть модалку</Button>
      {showModal && (
        <Modal onClose={toggleShowModal}>
          <div>Выберите картинку</div>
          <input
            onChange={(e) => setFile(e.target.files?.[0])}
            type="file"
          />
          {file && (
            <>
              <AvatarEditor
                ref={ref}
                border={50}
                color={[255, 255, 255, 0.6]}
                height={250}
                image={URL.createObjectURL(file)}
                rotate={0}
                scale={1.2}
                width={250}
              />
              <Button onClick={saveHandler}>
                Сохранить
              </Button>
            </>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ReactAvatarEdit;
