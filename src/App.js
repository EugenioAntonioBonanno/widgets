import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Convert from './components/Convert';

const items = [ 
  {
    title: 'What is React',
    content: 'React runs front end show'
  }, 
  {
    title: 'Why use React?',
    content: 'Because everyone loves it'
  }, 
  {
    title: 'How do you use React',
    content: 'Scream instructions into your computer screen and watch the magic'
  }
]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value:  'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }
];

export default function App () {


  return (
    <div>
      <Translate />
    </div>
  );
};

