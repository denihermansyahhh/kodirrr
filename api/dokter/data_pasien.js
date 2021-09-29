const Items =  [
    {
      'no': '1',
      'no_rekam_medis': '001',
      'name': 'Dessie',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Laki-laki',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'demam, batuk',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'paracetamol, dextomethorphan'
    },
    {
      'no': '2',
      'no_rekam_medis': '002',
      'name': 'Jamal',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Laki-laki',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, pilek',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'pnilephine, inza'
    },
    {
      'no': '3',
      'no_rekam_medis': '003',
      'name': 'kodir',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Laki-laki',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, demam, nafsu makan berkurang',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'bodrex, paracetamol, vit C'
    },
    {
      'no': '4',
      'no_rekam_medis': '004',
      'name': 'Yadi',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Laki-laki',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'Luka Kulit',
      'tindakan': 'pengecekan, perban',
      'resep_obat': 'etanol, betadine'
    },
    {
      'no': '5',
      'no_rekam_medis': '005',
      'name': 'Rukhan',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Laki-laki',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, demam, batuk',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'bodrex, '
    },
    {
      'no': '6',
      'no_rekam_medis': '006',
      'name': 'Susi',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Perempuan',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, demam, batuk',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'bodrex, '
    },
    {
      'no': '7',
      'no_rekam_medis': '007',
      'name': 'Yanti',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Perempuan',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, demam, batuk',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'bodrex, '
    },
    {
      'no': '8',
      'no_rekam_medis': '008',
      'name': 'Wati',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Perempuan',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, demam, batuk',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'bodrex, '
    },
    {
      'no': '9',
      'no_rekam_medis': '009',
      'name': 'Caroline',
      'alamat': 'Brebes RT 01/03',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Perempuan',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, demam, batuk',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'bodrex, '
    },
    {
      'no': '10',
      'no_rekam_medis': '010',
      'name': 'Brenda',
      'alamat': 'Brebes RT 01/03',
      'tgl_lahir': '12 Juni 1996',
      'usia': '25',
      'jenis_kelamin': 'Perempuan',
      'alamat': 'street 655 Archibald Groves',
      'poli': 'Umum',
      'keluhan': 'pusing, demam, batuk',
      'tindakan': 'pengecekan umum',
      'resep_obat': 'bodrex, '
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
  