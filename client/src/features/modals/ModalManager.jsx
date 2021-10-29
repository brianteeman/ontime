import PropTypes from 'prop-types';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import EventSettingsModal from './EventSettingsModal';
import AppSettingsModal from './AppSettingsModal';
import AliasesModal from './AliasesModal';

export default function ModalManager(props) {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      motionPreset={'slideInBottom'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ontime Settings</ModalHeader>
        <ModalCloseButton />

        <Tabs size='sm' isLazy>
          <TabList>
            <Tab>Event Settings</Tab>
            <Tab>Application Settings</Tab>
            <Tab>URL Aliases</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <EventSettingsModal />
            </TabPanel>
            <TabPanel>
              <AppSettingsModal />
            </TabPanel>
            <TabPanel>
              <AliasesModal />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ModalContent>
    </Modal>
  );
}

ModalManager.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};