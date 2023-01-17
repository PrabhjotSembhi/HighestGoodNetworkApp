import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/**
 * Modal popup to delete the user profile
 */
const DuplicateNamePopup = React.memo(props => {
  const closePopup = e => {
    props.onClose();
  };

  return (
    <Modal isOpen={props.open} toggle={closePopup}>
      <ModalHeader toggle={closePopup}>Duplicate Names</ModalHeader>
      <ModalBody>
        <p>There is already a user with the same name.</p>
        <p>Do you wish to proceed and have duplicate names?</p>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.createUserProfile(true);
              props.onClose();
            }}
          >
            Confirm
          </Button>
          <Button onClick={() => props.onClose()}>Cancel</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
});

const DivSpacer = React.memo(() => {
  return <div style={{ padding: '5px' }}></div>;
});

export default DuplicateNamePopup;
