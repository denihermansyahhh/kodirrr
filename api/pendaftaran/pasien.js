const Items =  [
    {
      'uuid': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
      'name': 'Dessie',
      'jenis_kelamin': 'Perempuan',
      'kategori': 'Umum',
      'tmpt_lahir': 'Mayer Greens',
      'nik': '934672358238',
      'tgl_periksa': '20-02-2021',
      'dokter': 'dr. Bella Koffa',
      'phone': '08129380511',
      'usia': '20',
      'alamat': 'street 431 Grimes Common suite Apt. 530 city East Lunahaven state Virginia country Hungary'
    },
    {
      'uuid': '46d6f992-5729-4588-b7f8-ce74f21157ba',
      'name': 'Olin',
      'jenis_kelamin': 'Perempuan',
      'kategori': 'Umum',
      'tmpt_lahir': 'Mayer Greens',
      'phone': '08223417756',
      'usia': '20',
      'nik': '934672358238',
      'alamat': 'street 0813 Mayer Greens suite Apt. 551 city Bergstromburgh',
      
    },
    {
      'uuid': 'bd30e201-cceb-410e-8497-a4072bc399f5',
      'name': 'Rollin',
      'jenis_kelamin': 'Lak-Laki',
      'kategori': 'Umum',
      'tmpt_lahir': 'Mayer Greens',
      'phone': '08655715502',
      'usia': '35',
      'nik': '934672358238',
      'alamat': 'street 0813 Mayer Greens suite Apt. 551 city Bergstromburgh'
    },
    {
      'uuid': 'da95e977-cd54-4077-a767-1b7f33ef6919',
      'name': 'Murl',
      'kategori': 'Umum',
      'tmpt_lahir': 'Bauchside',
      'phone': '08732190615',
      'usia': '29',
      'jenis_kelamin': 'Laki-laki',
      'nik': '934672358238',
      'alamat': 'Tanner Circles suite Apt. 994 city Bauchside state Ohio country Uganda'
    },
    {
      'uuid': '6124d4e8-77ed-4b34-868d-d312bfab5de2',
      'name': 'Breanna',
      'kategori': 'BPJS',
      'tmpt_lahir': 'Virginia',
      'phone': '645.045.0876 x35882',
      'usia': '18',
      'jenis_kelamin': 'Perempuan',
      'nik': '934672358238',
      'alamat': 'street 431 Grimes Common suite Apt. 530 city East Lunahaven state Virginia country Hungary'
    },
    {
      'uuid': 'eef93cb1-7766-4413-a5cf-ecbf71fa3674',
      'name': 'Maya',
      'kategori': 'BPJS',
      'tmpt_lahir': 'Cloydville',
      'phone': '08537702815',
      'usia': '26',
      'jenis_kelamin': 'Perempuan',
      'nik': '934672358238',
      'alamat': 'street Guillermo Springs suite Suite 574 city Cloydville country Saint Barthelemy',
    },
    {
      'uuid': '899d0e31-b71e-4d95-a8a0-6a8bceb314bd',
      'name': 'Santiago',
      'kategori': 'Umum',
      'tmpt_lahir': 'Alabama',
      'phone': '08921598655',
      'usia': '20',
      'jenis_kelamin': 'Laki-laki',
      'nik': '934672358238',
      'alamat': 'street 7868 Windler Dam suite Suite 876 city state Alabama country Belarus',
    },
    {
      'uuid': 'a41c6c4a-9cb1-45d1-8c6f-091044ba51ff',
      'name': 'Leonardo',
      'kategori': 'Umum',
      'tmpt_lahir': 'North Toyfor',
      'phone': '08757611519',
      'usia': '42',
      'jenis_kelamin': 'Laki-laki',
      'nik': '934672358238',
      'alamat': 'street 146 Lemke Mountains suite Apt. 407 city North Toyfor country Senegal',
    },
    {
      'uuid': '3782c174-1f2c-4dc4-b75d-0bedf400e023',
      'name': 'Lora',
      'kategori': 'BPJS',
      'tmpt_lahir': 'Leuschkemouth',
      'phone': '08285269280',
      'usia': '20',
      'jenis_kelamin': 'Perempuan',
      'nik': '934672358238',
      'alamat': 'street 4018 Willms Turnpike Suite 573 city Leuschkemouth country Dominican Republic',
    }
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
  