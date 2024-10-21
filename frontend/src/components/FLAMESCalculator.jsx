import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import SVGAnimation from './SVGAnimation';
import axios from 'axios';  // Import Axios for HTTP requests

const calculateFLAMES = (name1, name2) => {
  const cleanName1 = name1.replace(/\s+/g, '').toLowerCase();
  const cleanName2 = name2.replace(/\s+/g, '').toLowerCase();
  
  let arr1 = cleanName1.split('');
  let arr2 = cleanName2.split('');

  for (let i = 0; i < arr1.length; i++) {
    let char = arr1[i];
    if (arr2.includes(char)) {
      arr1.splice(i, 1);
      arr2.splice(arr2.indexOf(char), 1);
      i--;
    }
  }

  const remainingCount = arr1.length + arr2.length;
  const flames = ['Friends', 'Lovers', 'Affection', 'Marriage', 'Enemies', 'Siblings'];

  let index = 0;
  while (flames.length > 1) {
    index = (index + remainingCount - 1) % flames.length;
    flames.splice(index, 1);
  }

  return flames[0];
};

const FLAMESCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relation, setRelation] = useState('');

  const handleCalculate = async () => {
    if (name1 && name2) {
      const result = calculateFLAMES(name1, name2);
      setRelation(result);

      // Send the data to the backend
      try {
        await axios.post('http://localhost:5000/api/flames', {
          name1,
          name2,
          relation: result
        });
        console.log('Data saved to MongoDB');
      } catch (error) {
        console.error('Error saving data:', error);
      }
    }
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>FLAMES Relationship Calculator</Typography>
      <TextField
        label="First Name"
        variant="outlined"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        sx={{ margin: 1 }}
      />
      <TextField
        label="Second Name"
        variant="outlined"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        sx={{ margin: 1 }}
      />
      <Button variant="contained" onClick={handleCalculate} sx={{ margin: 1 }}>
        Calculate
      </Button>

      {relation && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5">Relationship: {relation}</Typography>
          <SVGAnimation relation={relation} />
        </Box>
      )}
    </Box>
  );
};

export default FLAMESCalculator;
