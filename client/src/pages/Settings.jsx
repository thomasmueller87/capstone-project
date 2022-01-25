import Header from '../components/Header';
import SettingsForm from '../components/form/SettingsForm';
import Export from '../components/Export';
import Import from '../components/Import';

export default function Settings({ logs, onImportLogs }) {
  return (
    <>
      <Header title='Settings' />
      <SettingsForm />
      <Export />
      <Import onImportLogs={onImportLogs} />
    </>
  );
}
