import styled from 'styled-components';
import Header from '../components/Header';
import SettingsForm from '../components/form/SettingsForm';
import Export from '../components/Export';
import Import from '../components/Import';
import Navbar from '../components/Navbar';

export default function Settings({ onImportLogs }) {
  return (
    <>
      <Header title='Settings' />
      <SettingsGrid>
        <div className='card-grid'>
          <div className='settings'>
            <SettingsForm />
          </div>
          <div className='export'>
            <Export />
          </div>
          <div className='import'>
            <Import onImportLogs={onImportLogs} />
          </div>
        </div>
      </SettingsGrid>
      <Navbar />
    </>
  );
}

const SettingsGrid = styled.div`
  margin: 0;
  padding: 0;

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0px 10px;
    grid-template-areas:
      'settings settings'
      'export import';
  }
  .settings {
    grid-area: settings;
  }
  .export {
    grid-area: export;
  }
  .import {
    grid-area: import;
  }
`;
