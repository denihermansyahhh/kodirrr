const Items =  [
    {
      'tipe_ruangan': 'BPJS',
    },
    {
      'tipe_ruangan': 'Umum',
    },
    {
      'tipe_ruangan': 'Bisnis',
    },
    {
      'tipe_ruangan': 'VIP',
    },
    {
      'tipe_ruangan': 'VVIP',
    },
  ];
  
  const getUserById = (tipe_ruangan) => {
    return (tipe_ruangan === undefined) ? Items[0] : Items.find(x => x.tipe_ruangan === tipe_ruangan);
  };
  
  const getUser = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
  };
  
  export {
    Items,
    getUser,
    getUserById
  };
  