const Items =  [
    {
      'id': '1',
      'name': 'dr. stefanus',
      'hari': 'Senin',
      'jam': '08.00-12.00',
      'jenis_kelamin': 'Laki-laki',
      'alamat': 'street 655 Archibald Groves',
    },
  ];
  
  const getUserById = (uuid) => {
    return (uuid === undefined) ? Items[0] : Items.find(x => x.uuid === uuid);
  };
  
  const getUser = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
  };
  
  export {
    Items,
    getUser,
    getUserById
  };
  