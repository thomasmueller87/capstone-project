import Title from './card/Title';
import Place from './card/Place';
import CardContainer from './card/CardContainer';

const initialLog = {
  id: 1,
  date: '16.08.2021',
  time: '13:48',
  duration: '48 min',
  country: 'Egypt',
  spot: 'Abu Nashim',
  airStart: '200 bar',
  airEnd: '60 bar',
  airEAN: '32 %',
  waterDepthMax: '28.4m',
  waterDepthAvg: '17.3m',
  waterTemp: '23 °C',
  notes:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolor dignissimos, aliquam officiis itaque consequuntur eveniet quia soluta eius sint?',
  buddy: 'Antonia',
};

function DiveLog() {
  return (
    <CardContainer>
      <Title logData={initialLog} />
      <Place label='Place' logData={initialLog} />
    </CardContainer>
  );
}

export default DiveLog;
