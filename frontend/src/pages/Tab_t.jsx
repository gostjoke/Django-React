import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button'; // 需要導入 Button
import { PieChart } from '@mui/x-charts/PieChart';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [showTabPanel, setShowTabPanel] = React.useState(true); // 控制開關狀態

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // 控制顯示或隱藏 TabPanel
  const toggleTabPanel = () => {
    setShowTabPanel((prev) => !prev); // 切換開關狀態
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Button variant="contained" onClick={toggleTabPanel}>
        {showTabPanel ? '隱藏 Tabs' : '顯示 Tabs'}
      </Button>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* 根據 showTabPanel 狀態來決定是否顯示 TabList */}
          {showTabPanel && (
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          )}
        </Box>

        {/* TabPanel 也應該根據 showTabPanel 狀態來隱藏 */}
        {showTabPanel && (
          <>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">
            <PieChart
                series={[
                    {
                    data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                    },
                ]}
                width={400}
                height={200}
            />
            </TabPanel>
          </>
        )}
      </TabContext>
    </Box>
  );
}
