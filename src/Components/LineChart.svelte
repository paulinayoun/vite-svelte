<script>
    import '@carbon/charts-svelte/styles.css';
    import { LineChart } from '@carbon/charts-svelte';
  </script>
  
  <LineChart
    data={[
      { group: 'Dataset 1', key: '2024-01-01', value: 50000 },
      { group: 'Dataset 1', key: '2024-02-01', value: 53200 },
      { group: 'Dataset 1', key: '2024-03-01', value: 57400 },
      { group: 'Dataset 2', key: '2024-01-01', value: 32000 },
      { group: 'Dataset 2', key: '2024-02-01', value: 41200 },
      { group: 'Dataset 2', key: '2024-03-01', value: 45300 }
    ]}
    options={{
        theme: 'g90',
      title: 'Simple Line Chart',
      axes: {
        bottom: {
          title: 'Date',
          mapsTo: 'key',
          scaleType: 'time'
        },
        left: {
          title: 'Value',
          mapsTo: 'value',
          scaleType: 'linear'
        }
      },
      height: '400px'
    }}
  />