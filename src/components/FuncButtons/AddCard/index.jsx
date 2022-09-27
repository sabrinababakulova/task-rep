import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center,
} from '@chakra-ui/react';
import Card from '../../Card';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
const AddCard = () => {
  const { t } = useTranslation();
  const isReadOnly = useSelector((state) => state.allCardsInfo.isReadOnly);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        isDisabled={isReadOnly}
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
      >
        {t('buttons.addCard')}
      </Button>

      <Modal
        size="xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('buttons.cardInfo')}</ModalHeader>
          <Center>
            <Card
              data={{ header: '', body: '' }}
              cardType="newCard"
              editing={true}
              onClose={onClose}
            />
          </Center>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCard;
