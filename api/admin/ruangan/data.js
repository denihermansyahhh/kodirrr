const Items =  [
    {
      'nama_ruangan': 'Paviliun',
      'tipe': 'BPJS',
      'fasilitas': '4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi',
    },
    {
      'nama_ruangan': 'Anggrek',
      'tipe': 'VIP',
      'fasilitas': '4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi',
    },
    {
      'nama_ruangan': 'Kamboja',
      'tipe': 'VVIP',
      'fasilitas': '4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi',
    },
    {
      'nama_ruangan': 'Mawar',
      'tipe': 'Umum',
      'fasilitas': '4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi',
    },
    {
      'nama_ruangan': 'Melati',
      'tipe': 'Umum',
      'fasilitas': '4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi',
    },
  ];
  
  const getUserById = (nama_ruangan) => {
    return (nama_ruangan === undefined) ? Items[0] : Items.find(x => x.nama_ruangan === nama_ruangan);
  };
  
  const getUser = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
  };
  
  export {
    Items,
    getUser,
    getUserById
  };
  