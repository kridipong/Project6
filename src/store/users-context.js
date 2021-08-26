
import React from 'react';

const UsersContext = React.createContext({
  users: [{name:'kridipong' , id:"u1"},
  {name:'Wimonrat' , id:"u2"},
  {name:'Sydney' , id:"u3"},
  {name:'Disney' , id:"u4"},
]
});

export default UsersContext;