import Header from '../components/Header';
import SettingsForm from '../components/form/SettingsForm';
import Export from '../components/Export';
//import Import from '../components/Import';


export default function Settings({ logs }) {
  return (
    <>
      <Header title='Settings' />
      <SettingsForm />
      <Export />

    </>
  );
}
