import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _080a6d2e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _00c9457c = () => interopDefault(import('..\\pages\\apotek\\index.vue' /* webpackChunkName: "pages/apotek/index" */))
const _5370f5c4 = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages/chat" */))
const _4316140a = () => interopDefault(import('..\\pages\\dokter\\index.vue' /* webpackChunkName: "pages/dokter/index" */))
const _401583f7 = () => interopDefault(import('..\\pages\\empty.vue' /* webpackChunkName: "pages/empty" */))
const _01a249d9 = () => interopDefault(import('..\\pages\\forms.vue' /* webpackChunkName: "pages/forms" */))
const _ea063972 = () => interopDefault(import('..\\pages\\forms\\basic-forms.vue' /* webpackChunkName: "pages/forms/basic-forms" */))
const _23edc29d = () => interopDefault(import('..\\pages\\forms\\editors.vue' /* webpackChunkName: "pages/forms/editors" */))
const _5dea1d30 = () => interopDefault(import('..\\pages\\forms\\selection-controls.vue' /* webpackChunkName: "pages/forms/selection-controls" */))
const _6bf3906e = () => interopDefault(import('..\\pages\\forms\\selects.vue' /* webpackChunkName: "pages/forms/selects" */))
const _a8878a4a = () => interopDefault(import('..\\pages\\forms\\steppers.vue' /* webpackChunkName: "pages/forms/steppers" */))
const _83207760 = () => interopDefault(import('..\\pages\\forms\\text-fields.vue' /* webpackChunkName: "pages/forms/text-fields" */))
const _84d334dc = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _301213ae = () => interopDefault(import('..\\pages\\general\\alerts.vue' /* webpackChunkName: "pages/general/alerts" */))
const _35573a98 = () => interopDefault(import('..\\pages\\general\\avatars.vue' /* webpackChunkName: "pages/general/avatars" */))
const _941d8f7c = () => interopDefault(import('..\\pages\\general\\badges.vue' /* webpackChunkName: "pages/general/badges" */))
const _966ad742 = () => interopDefault(import('..\\pages\\general\\buttons.vue' /* webpackChunkName: "pages/general/buttons" */))
const _27adf4c1 = () => interopDefault(import('..\\pages\\general\\cards.vue' /* webpackChunkName: "pages/general/cards" */))
const _17cbed71 = () => interopDefault(import('..\\pages\\general\\carousels.vue' /* webpackChunkName: "pages/general/carousels" */))
const _37384105 = () => interopDefault(import('..\\pages\\general\\chips.vue' /* webpackChunkName: "pages/general/chips" */))
const _7b3a06fc = () => interopDefault(import('..\\pages\\general\\colors.vue' /* webpackChunkName: "pages/general/colors" */))
const _1f131c09 = () => interopDefault(import('..\\pages\\general\\dialogs.vue' /* webpackChunkName: "pages/general/dialogs" */))
const _392ea610 = () => interopDefault(import('..\\pages\\general\\icons.vue' /* webpackChunkName: "pages/general/icons" */))
const _3d94f6a8 = () => interopDefault(import('..\\pages\\general\\pagination.vue' /* webpackChunkName: "pages/general/pagination" */))
const _0884caa9 = () => interopDefault(import('..\\pages\\general\\parallax.vue' /* webpackChunkName: "pages/general/parallax" */))
const _b841b782 = () => interopDefault(import('..\\pages\\general\\progress.vue' /* webpackChunkName: "pages/general/progress" */))
const _1a36f810 = () => interopDefault(import('..\\pages\\general\\sliders.vue' /* webpackChunkName: "pages/general/sliders" */))
const _25ab1f17 = () => interopDefault(import('..\\pages\\general\\snackbar.vue' /* webpackChunkName: "pages/general/snackbar" */))
const _1bd7faf7 = () => interopDefault(import('..\\pages\\general\\tables.vue' /* webpackChunkName: "pages/general/tables" */))
const _f0eaed3c = () => interopDefault(import('..\\pages\\general\\tooltips.vue' /* webpackChunkName: "pages/general/tooltips" */))
const _6357efc1 = () => interopDefault(import('..\\pages\\general\\typography.vue' /* webpackChunkName: "pages/general/typography" */))
const _28148492 = () => interopDefault(import('..\\pages\\kasir\\index.vue' /* webpackChunkName: "pages/kasir/index" */))
const _7ffdaffd = () => interopDefault(import('..\\pages\\mail.vue' /* webpackChunkName: "pages/mail" */))
const _21447727 = () => interopDefault(import('..\\pages\\mail\\0\\_uuid.vue' /* webpackChunkName: "pages/mail/0/_uuid" */))
const _da5ff0fa = () => interopDefault(import('..\\pages\\mail\\_mailType.vue' /* webpackChunkName: "pages/mail/_mailType" */))
const _144d4b0e = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages/media" */))
const _43d61385 = () => interopDefault(import('..\\pages\\owner\\index.vue' /* webpackChunkName: "pages/owner/index" */))
const _20159396 = () => interopDefault(import('..\\pages\\pendaftaran\\index.vue' /* webpackChunkName: "pages/pendaftaran/index" */))
const _48d0bfcf = () => interopDefault(import('..\\pages\\pickers.vue' /* webpackChunkName: "pages/pickers" */))
const _7a955eea = () => interopDefault(import('..\\pages\\pickers\\datepicker.vue' /* webpackChunkName: "pages/pickers/datepicker" */))
const _1ece98ea = () => interopDefault(import('..\\pages\\pickers\\timepicker.vue' /* webpackChunkName: "pages/pickers/timepicker" */))
const _533b0fd9 = () => interopDefault(import('..\\pages\\widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _7499b795 = () => interopDefault(import('..\\pages\\widgets\\chart.vue' /* webpackChunkName: "pages/widgets/chart" */))
const _457fcf92 = () => interopDefault(import('..\\pages\\widgets\\list.vue' /* webpackChunkName: "pages/widgets/list" */))
const _479a8346 = () => interopDefault(import('..\\pages\\widgets\\social.vue' /* webpackChunkName: "pages/widgets/social" */))
const _2ab5aef2 = () => interopDefault(import('..\\pages\\widgets\\statistic.vue' /* webpackChunkName: "pages/widgets/statistic" */))
const _e63578e0 = () => interopDefault(import('..\\pages\\admin\\absen\\index.vue' /* webpackChunkName: "pages/admin/absen/index" */))
const _553642ab = () => interopDefault(import('..\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _015c3806 = () => interopDefault(import('..\\pages\\admin\\data_pasien\\index.vue' /* webpackChunkName: "pages/admin/data_pasien/index" */))
const _cb5fb530 = () => interopDefault(import('..\\pages\\admin\\dokter\\index.vue' /* webpackChunkName: "pages/admin/dokter/index" */))
const _1d97b9bf = () => interopDefault(import('..\\pages\\admin\\inventori\\index.vue' /* webpackChunkName: "pages/admin/inventori/index" */))
const _035100a9 = () => interopDefault(import('..\\pages\\admin\\karyawan\\index.vue' /* webpackChunkName: "pages/admin/karyawan/index" */))
const _74bb2700 = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages/admin/login" */))
const _47da6059 = () => interopDefault(import('..\\pages\\admin\\pelayanan_apotek\\index.vue' /* webpackChunkName: "pages/admin/pelayanan_apotek/index" */))
const _588cccaf = () => interopDefault(import('..\\pages\\admin\\pendapatan\\index.vue' /* webpackChunkName: "pages/admin/pendapatan/index" */))
const _21cf56a0 = () => interopDefault(import('..\\pages\\admin\\rekam_medis\\index.vue' /* webpackChunkName: "pages/admin/rekam_medis/index" */))
const _3b4b3041 = () => interopDefault(import('..\\pages\\admin\\rujukan\\index.vue' /* webpackChunkName: "pages/admin/rujukan/index" */))
const _a7717bf8 = () => interopDefault(import('..\\pages\\apotek\\dashboard.vue' /* webpackChunkName: "pages/apotek/dashboard" */))
const _1d827446 = () => interopDefault(import('..\\pages\\apotek\\inventori\\index.vue' /* webpackChunkName: "pages/apotek/inventori/index" */))
const _6d79ff4e = () => interopDefault(import('..\\pages\\apotek\\login.vue' /* webpackChunkName: "pages/apotek/login" */))
const _62e53288 = () => interopDefault(import('..\\pages\\apotek\\obat\\index.vue' /* webpackChunkName: "pages/apotek/obat/index" */))
const _1fc1fd73 = () => interopDefault(import('..\\pages\\apotek\\permintaan\\index.vue' /* webpackChunkName: "pages/apotek/permintaan/index" */))
const _15460c0e = () => interopDefault(import('..\\pages\\apotek\\report\\index.vue' /* webpackChunkName: "pages/apotek/report/index" */))
const _4dd2d03f = () => interopDefault(import('..\\pages\\dokter\\chat.vue' /* webpackChunkName: "pages/dokter/chat" */))
const _42785386 = () => interopDefault(import('..\\pages\\dokter\\dashboard.vue' /* webpackChunkName: "pages/dokter/dashboard" */))
const _8c18c614 = () => interopDefault(import('..\\pages\\dokter\\empty.vue' /* webpackChunkName: "pages/dokter/empty" */))
const _7b8062d8 = () => interopDefault(import('..\\pages\\dokter\\forms.vue' /* webpackChunkName: "pages/dokter/forms" */))
const _50b1a0a8 = () => interopDefault(import('..\\pages\\dokter\\forms\\basic-forms.vue' /* webpackChunkName: "pages/dokter/forms/basic-forms" */))
const _1b92587e = () => interopDefault(import('..\\pages\\dokter\\forms\\editors.vue' /* webpackChunkName: "pages/dokter/forms/editors" */))
const _2028c0af = () => interopDefault(import('..\\pages\\dokter\\forms\\selection-controls.vue' /* webpackChunkName: "pages/dokter/forms/selection-controls" */))
const _6398264f = () => interopDefault(import('..\\pages\\dokter\\forms\\selects.vue' /* webpackChunkName: "pages/dokter/forms/selects" */))
const _aeab3dcc = () => interopDefault(import('..\\pages\\dokter\\forms\\steppers.vue' /* webpackChunkName: "pages/dokter/forms/steppers" */))
const _f7b6fc9e = () => interopDefault(import('..\\pages\\dokter\\forms\\text-fields.vue' /* webpackChunkName: "pages/dokter/forms/text-fields" */))
const _38523ad1 = () => interopDefault(import('..\\pages\\dokter\\general.vue' /* webpackChunkName: "pages/dokter/general" */))
const _3635c730 = () => interopDefault(import('..\\pages\\dokter\\general\\alerts.vue' /* webpackChunkName: "pages/dokter/general/alerts" */))
const _53a4478e = () => interopDefault(import('..\\pages\\dokter\\general\\avatars.vue' /* webpackChunkName: "pages/dokter/general/avatars" */))
const _9a4142fe = () => interopDefault(import('..\\pages\\dokter\\general\\badges.vue' /* webpackChunkName: "pages/dokter/general/badges" */))
const _55a13600 = () => interopDefault(import('..\\pages\\dokter\\general\\buttons.vue' /* webpackChunkName: "pages/dokter/general/buttons" */))
const _1f528aa2 = () => interopDefault(import('..\\pages\\dokter\\general\\cards.vue' /* webpackChunkName: "pages/dokter/general/cards" */))
const _44feaa5c = () => interopDefault(import('..\\pages\\dokter\\general\\carousels.vue' /* webpackChunkName: "pages/dokter/general/carousels" */))
const _2edcd6e6 = () => interopDefault(import('..\\pages\\dokter\\general\\chips.vue' /* webpackChunkName: "pages/dokter/general/chips" */))
const _815dba7e = () => interopDefault(import('..\\pages\\dokter\\general\\colors.vue' /* webpackChunkName: "pages/dokter/general/colors" */))
const _802c84ac = () => interopDefault(import('..\\pages\\dokter\\general\\dialogs.vue' /* webpackChunkName: "pages/dokter/general/dialogs" */))
const _49e57a4e = () => interopDefault(import('..\\pages\\dokter\\general\\icons.vue' /* webpackChunkName: "pages/dokter/general/icons" */))
const _5bcf192a = () => interopDefault(import('..\\pages\\dokter\\general\\pagination.vue' /* webpackChunkName: "pages/dokter/general/pagination" */))
const _fafb45b0 = () => interopDefault(import('..\\pages\\dokter\\general\\parallax.vue' /* webpackChunkName: "pages/dokter/general/parallax" */))
const _1ddcb6be = () => interopDefault(import('..\\pages\\dokter\\general\\progress.vue' /* webpackChunkName: "pages/dokter/general/progress" */))
const _89e4cc9e = () => interopDefault(import('..\\pages\\dokter\\general\\sliders.vue' /* webpackChunkName: "pages/dokter/general/sliders" */))
const _c0ae9cd4 = () => interopDefault(import('..\\pages\\dokter\\general\\snackbar.vue' /* webpackChunkName: "pages/dokter/general/snackbar" */))
const _18c62136 = () => interopDefault(import('..\\pages\\dokter\\general\\tables.vue' /* webpackChunkName: "pages/dokter/general/tables" */))
const _01881be1 = () => interopDefault(import('..\\pages\\dokter\\general\\tooltips.vue' /* webpackChunkName: "pages/dokter/general/tooltips" */))
const _543ade80 = () => interopDefault(import('..\\pages\\dokter\\general\\typography.vue' /* webpackChunkName: "pages/dokter/general/typography" */))
const _afc6cddc = () => interopDefault(import('..\\pages\\dokter\\login.vue' /* webpackChunkName: "pages/dokter/login" */))
const _10ee09c4 = () => interopDefault(import('..\\pages\\dokter\\mail.vue' /* webpackChunkName: "pages/dokter/mail" */))
const _18e90d08 = () => interopDefault(import('..\\pages\\dokter\\mail\\0\\_uuid.vue' /* webpackChunkName: "pages/dokter/mail/0/_uuid" */))
const _e083a47c = () => interopDefault(import('..\\pages\\dokter\\mail\\_mailType.vue' /* webpackChunkName: "pages/dokter/mail/_mailType" */))
const _e3a937e6 = () => interopDefault(import('..\\pages\\dokter\\media.vue' /* webpackChunkName: "pages/dokter/media" */))
const _2f12c297 = () => interopDefault(import('..\\pages\\dokter\\pemeriksaan\\index.vue' /* webpackChunkName: "pages/dokter/pemeriksaan/index" */))
const _78e6d5e4 = () => interopDefault(import('..\\pages\\dokter\\pickers.vue' /* webpackChunkName: "pages/dokter/pickers" */))
const _98cf816c = () => interopDefault(import('..\\pages\\dokter\\pickers\\datepicker.vue' /* webpackChunkName: "pages/dokter/pickers/datepicker" */))
const _0fb187a9 = () => interopDefault(import('..\\pages\\dokter\\pickers\\timepicker.vue' /* webpackChunkName: "pages/dokter/pickers/timepicker" */))
const _f7e659f8 = () => interopDefault(import('..\\pages\\dokter\\report_pemeriksaan\\index.vue' /* webpackChunkName: "pages/dokter/report_pemeriksaan/index" */))
const _641235d0 = () => interopDefault(import('..\\pages\\dokter\\widgets.vue' /* webpackChunkName: "pages/dokter/widgets" */))
const _6c3e4d76 = () => interopDefault(import('..\\pages\\dokter\\widgets\\chart.vue' /* webpackChunkName: "pages/dokter/widgets/chart" */))
const _989e7b94 = () => interopDefault(import('..\\pages\\dokter\\widgets\\list.vue' /* webpackChunkName: "pages/dokter/widgets/list" */))
const _4488a985 = () => interopDefault(import('..\\pages\\dokter\\widgets\\social.vue' /* webpackChunkName: "pages/dokter/widgets/social" */))
const _9f4c3430 = () => interopDefault(import('..\\pages\\dokter\\widgets\\statistic.vue' /* webpackChunkName: "pages/dokter/widgets/statistic" */))
const _1a3c4154 = () => interopDefault(import('..\\pages\\kasir\\dashboard.vue' /* webpackChunkName: "pages/kasir/dashboard" */))
const _478484f4 = () => interopDefault(import('..\\pages\\kasir\\keuangan\\index.vue' /* webpackChunkName: "pages/kasir/keuangan/index" */))
const _1c87b0ae = () => interopDefault(import('..\\pages\\kasir\\login.vue' /* webpackChunkName: "pages/kasir/login" */))
const _390db41c = () => interopDefault(import('..\\pages\\kasir\\pembayaran\\index.vue' /* webpackChunkName: "pages/kasir/pembayaran/index" */))
const _770ae35e = () => interopDefault(import('..\\pages\\kasir\\report\\index.vue' /* webpackChunkName: "pages/kasir/report/index" */))
const _4be71ec7 = () => interopDefault(import('..\\pages\\owner\\dashboard.vue' /* webpackChunkName: "pages/owner/dashboard" */))
const _0d7db69c = () => interopDefault(import('..\\pages\\owner\\login.vue' /* webpackChunkName: "pages/owner/login" */))
const _372a9344 = () => interopDefault(import('..\\pages\\pendaftaran\\chat.vue' /* webpackChunkName: "pages/pendaftaran/chat" */))
const _a0d8056a = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pasien\\index.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pasien/index" */))
const _2c12b5d7 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pemeriksaan\\index.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pemeriksaan/index" */))
const _0553a350 = () => interopDefault(import('..\\pages\\pendaftaran\\dashboard.vue' /* webpackChunkName: "pages/pendaftaran/dashboard" */))
const _08d78ade = () => interopDefault(import('..\\pages\\pendaftaran\\empty.vue' /* webpackChunkName: "pages/pendaftaran/empty" */))
const _85bdff1a = () => interopDefault(import('..\\pages\\pendaftaran\\forms.vue' /* webpackChunkName: "pages/pendaftaran/forms" */))
const _790136ed = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\basic-forms.vue' /* webpackChunkName: "pages/pendaftaran/forms/basic-forms" */))
const _be6c4d7a = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\editors.vue' /* webpackChunkName: "pages/pendaftaran/forms/editors" */))
const _7e14fa6c = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\selection-controls.vue' /* webpackChunkName: "pages/pendaftaran/forms/selection-controls" */))
const _2e60b1d8 = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\selects.vue' /* webpackChunkName: "pages/pendaftaran/forms/selects" */))
const _6b3a0e16 = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\steppers.vue' /* webpackChunkName: "pages/pendaftaran/forms/steppers" */))
const _a717d014 = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\text-fields.vue' /* webpackChunkName: "pages/pendaftaran/forms/text-fields" */))
const _d77c44a8 = () => interopDefault(import('..\\pages\\pendaftaran\\general.vue' /* webpackChunkName: "pages/pendaftaran/general" */))
const _069db443 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\alerts.vue' /* webpackChunkName: "pages/pendaftaran/general/alerts" */))
const _28ef8084 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\avatars.vue' /* webpackChunkName: "pages/pendaftaran/general/avatars" */))
const _56d01348 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\badges.vue' /* webpackChunkName: "pages/pendaftaran/general/badges" */))
const _6afb9985 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\buttons.vue' /* webpackChunkName: "pages/pendaftaran/general/buttons" */))
const _b6ebe932 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\cards.vue' /* webpackChunkName: "pages/pendaftaran/general/cards" */))
const _05d04117 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\carousels.vue' /* webpackChunkName: "pages/pendaftaran/general/carousels" */))
const _97d750aa = () => interopDefault(import('..\\pages\\pendaftaran\\general\\chips.vue' /* webpackChunkName: "pages/pendaftaran/general/chips" */))
const _3dec8ac8 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\colors.vue' /* webpackChunkName: "pages/pendaftaran/general/colors" */))
const _5577bda2 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\dialogs.vue' /* webpackChunkName: "pages/pendaftaran/general/dialogs" */))
const _6044c39e = () => interopDefault(import('..\\pages\\pendaftaran\\general\\icons.vue' /* webpackChunkName: "pages/pendaftaran/general/icons" */))
const _9888b474 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\pagination.vue' /* webpackChunkName: "pages/pendaftaran/general/pagination" */))
const _18746a43 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\parallax.vue' /* webpackChunkName: "pages/pendaftaran/general/parallax" */))
const _9862784e = () => interopDefault(import('..\\pages\\pendaftaran\\general\\progress.vue' /* webpackChunkName: "pages/pendaftaran/general/progress" */))
const _5f300594 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\sliders.vue' /* webpackChunkName: "pages/pendaftaran/general/sliders" */))
const _359abeb1 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\snackbar.vue' /* webpackChunkName: "pages/pendaftaran/general/snackbar" */))
const _3a7eb911 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\tables.vue' /* webpackChunkName: "pages/pendaftaran/general/tables" */))
const _d10bae08 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\tooltips.vue' /* webpackChunkName: "pages/pendaftaran/general/tooltips" */))
const _35de10db = () => interopDefault(import('..\\pages\\pendaftaran\\general\\typography.vue' /* webpackChunkName: "pages/pendaftaran/general/typography" */))
const _2c8592a6 = () => interopDefault(import('..\\pages\\pendaftaran\\login.vue' /* webpackChunkName: "pages/pendaftaran/login" */))
const _3e3e83ba = () => interopDefault(import('..\\pages\\pendaftaran\\mail.vue' /* webpackChunkName: "pages/pendaftaran/mail" */))
const _c3bee466 = () => interopDefault(import('..\\pages\\pendaftaran\\mail\\0\\_uuid.vue' /* webpackChunkName: "pages/pendaftaran/mail/0/_uuid" */))
const _9d1274c6 = () => interopDefault(import('..\\pages\\pendaftaran\\mail\\_mailType.vue' /* webpackChunkName: "pages/pendaftaran/mail/_mailType" */))
const _6067fcb0 = () => interopDefault(import('..\\pages\\pendaftaran\\media.vue' /* webpackChunkName: "pages/pendaftaran/media" */))
const _1f7c37e9 = () => interopDefault(import('..\\pages\\pendaftaran\\pickers.vue' /* webpackChunkName: "pages/pendaftaran/pickers" */))
const _d5891cb6 = () => interopDefault(import('..\\pages\\pendaftaran\\pickers\\datepicker.vue' /* webpackChunkName: "pages/pendaftaran/pickers/datepicker" */))
const _1d568bf8 = () => interopDefault(import('..\\pages\\pendaftaran\\pickers\\timepicker.vue' /* webpackChunkName: "pages/pendaftaran/pickers/timepicker" */))
const _29e687f3 = () => interopDefault(import('..\\pages\\pendaftaran\\widgets.vue' /* webpackChunkName: "pages/pendaftaran/widgets" */))
const _1d14638a = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\chart.vue' /* webpackChunkName: "pages/pendaftaran/widgets/chart" */))
const _12d394d1 = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\list.vue' /* webpackChunkName: "pages/pendaftaran/widgets/list" */))
const _66414160 = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\social.vue' /* webpackChunkName: "pages/pendaftaran/widgets/social" */))
const _4ead07a6 = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\statistic.vue' /* webpackChunkName: "pages/pendaftaran/widgets/statistic" */))
const _0b1db0e4 = () => interopDefault(import('..\\pages\\admin\\dokter\\edit.vue' /* webpackChunkName: "pages/admin/dokter/edit" */))
const _e928697a = () => interopDefault(import('..\\pages\\admin\\dokter\\tambah.vue' /* webpackChunkName: "pages/admin/dokter/tambah" */))
const _ca382cfa = () => interopDefault(import('..\\pages\\admin\\karyawan\\edit.vue' /* webpackChunkName: "pages/admin/karyawan/edit" */))
const _42865822 = () => interopDefault(import('..\\pages\\admin\\karyawan\\tambah.vue' /* webpackChunkName: "pages/admin/karyawan/tambah" */))
const _ea7c0c06 = () => interopDefault(import('..\\pages\\admin\\ruangan\\data\\index.vue' /* webpackChunkName: "pages/admin/ruangan/data/index" */))
const _c7bd3306 = () => interopDefault(import('..\\pages\\admin\\ruangan\\tipe\\index.vue' /* webpackChunkName: "pages/admin/ruangan/tipe/index" */))
const _7324311c = () => interopDefault(import('..\\pages\\admin\\rujukan\\detail.vue' /* webpackChunkName: "pages/admin/rujukan/detail" */))
const _6bb26435 = () => interopDefault(import('..\\pages\\admin\\rujukan\\proses.vue' /* webpackChunkName: "pages/admin/rujukan/proses" */))
const _42529722 = () => interopDefault(import('..\\pages\\apotek\\obat\\tambah.vue' /* webpackChunkName: "pages/apotek/obat/tambah" */))
const _37b59fe5 = () => interopDefault(import('..\\pages\\apotek\\permintaan\\detail_tebus_obat.vue' /* webpackChunkName: "pages/apotek/permintaan/detail_tebus_obat" */))
const _16153d43 = () => interopDefault(import('..\\pages\\apotek\\permintaan\\proses.vue' /* webpackChunkName: "pages/apotek/permintaan/proses" */))
const _56e4ffab = () => interopDefault(import('..\\pages\\dokter\\rujukan\\rawat_inap.vue' /* webpackChunkName: "pages/dokter/rujukan/rawat_inap" */))
const _76078916 = () => interopDefault(import('..\\pages\\dokter\\rujukan\\rs_lain.vue' /* webpackChunkName: "pages/dokter/rujukan/rs_lain" */))
const _2eaab6ee = () => interopDefault(import('..\\pages\\kasir\\pembayaran\\detail_pembayaran.vue' /* webpackChunkName: "pages/kasir/pembayaran/detail_pembayaran" */))
const _04faf93a = () => interopDefault(import('..\\pages\\kasir\\pembayaran\\riwayat_detail_pembayaran.vue' /* webpackChunkName: "pages/kasir/pembayaran/riwayat_detail_pembayaran" */))
const _4dddd0a1 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pasien\\edit.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pasien/edit" */))
const _1ea2efc0 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pasien\\tambah.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pasien/tambah" */))
const _499fd695 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pemeriksaan\\edit.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pemeriksaan/edit" */))
const _31fb48b4 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pemeriksaan\\tambah.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pemeriksaan/tambah" */))
const _b0f714a2 = () => interopDefault(import('..\\pages\\admin\\ruangan\\data\\edit.vue' /* webpackChunkName: "pages/admin/ruangan/data/edit" */))
const _ad96ed64 = () => interopDefault(import('..\\pages\\admin\\ruangan\\data\\tambah.vue' /* webpackChunkName: "pages/admin/ruangan/data/tambah" */))
const _6e45792f = () => interopDefault(import('..\\pages\\admin\\ruangan\\tipe\\edit.vue' /* webpackChunkName: "pages/admin/ruangan/tipe/edit" */))
const _787aa664 = () => interopDefault(import('..\\pages\\admin\\ruangan\\tipe\\tambah.vue' /* webpackChunkName: "pages/admin/ruangan/tipe/tambah" */))
const _6496dcfc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _080a6d2e,
    name: "admin"
  }, {
    path: "/apotek",
    component: _00c9457c,
    name: "apotek"
  }, {
    path: "/chat",
    component: _5370f5c4,
    name: "chat"
  }, {
    path: "/dokter",
    component: _4316140a,
    name: "dokter"
  }, {
    path: "/empty",
    component: _401583f7,
    name: "empty"
  }, {
    path: "/forms",
    component: _01a249d9,
    name: "forms",
    children: [{
      path: "basic-forms",
      component: _ea063972,
      name: "forms-basic-forms"
    }, {
      path: "editors",
      component: _23edc29d,
      name: "forms-editors"
    }, {
      path: "selection-controls",
      component: _5dea1d30,
      name: "forms-selection-controls"
    }, {
      path: "selects",
      component: _6bf3906e,
      name: "forms-selects"
    }, {
      path: "steppers",
      component: _a8878a4a,
      name: "forms-steppers"
    }, {
      path: "text-fields",
      component: _83207760,
      name: "forms-text-fields"
    }]
  }, {
    path: "/general",
    component: _84d334dc,
    name: "general",
    children: [{
      path: "alerts",
      component: _301213ae,
      name: "general-alerts"
    }, {
      path: "avatars",
      component: _35573a98,
      name: "general-avatars"
    }, {
      path: "badges",
      component: _941d8f7c,
      name: "general-badges"
    }, {
      path: "buttons",
      component: _966ad742,
      name: "general-buttons"
    }, {
      path: "cards",
      component: _27adf4c1,
      name: "general-cards"
    }, {
      path: "carousels",
      component: _17cbed71,
      name: "general-carousels"
    }, {
      path: "chips",
      component: _37384105,
      name: "general-chips"
    }, {
      path: "colors",
      component: _7b3a06fc,
      name: "general-colors"
    }, {
      path: "dialogs",
      component: _1f131c09,
      name: "general-dialogs"
    }, {
      path: "icons",
      component: _392ea610,
      name: "general-icons"
    }, {
      path: "pagination",
      component: _3d94f6a8,
      name: "general-pagination"
    }, {
      path: "parallax",
      component: _0884caa9,
      name: "general-parallax"
    }, {
      path: "progress",
      component: _b841b782,
      name: "general-progress"
    }, {
      path: "sliders",
      component: _1a36f810,
      name: "general-sliders"
    }, {
      path: "snackbar",
      component: _25ab1f17,
      name: "general-snackbar"
    }, {
      path: "tables",
      component: _1bd7faf7,
      name: "general-tables"
    }, {
      path: "tooltips",
      component: _f0eaed3c,
      name: "general-tooltips"
    }, {
      path: "typography",
      component: _6357efc1,
      name: "general-typography"
    }]
  }, {
    path: "/kasir",
    component: _28148492,
    name: "kasir"
  }, {
    path: "/mail",
    component: _7ffdaffd,
    name: "mail",
    children: [{
      path: "0/:uuid?",
      component: _21447727,
      name: "mail-0-uuid"
    }, {
      path: ":mailType?",
      component: _da5ff0fa,
      name: "mail-mailType"
    }]
  }, {
    path: "/media",
    component: _144d4b0e,
    name: "media"
  }, {
    path: "/owner",
    component: _43d61385,
    name: "owner"
  }, {
    path: "/pendaftaran",
    component: _20159396,
    name: "pendaftaran"
  }, {
    path: "/pickers",
    component: _48d0bfcf,
    name: "pickers",
    children: [{
      path: "datepicker",
      component: _7a955eea,
      name: "pickers-datepicker"
    }, {
      path: "timepicker",
      component: _1ece98ea,
      name: "pickers-timepicker"
    }]
  }, {
    path: "/widgets",
    component: _533b0fd9,
    name: "widgets",
    children: [{
      path: "chart",
      component: _7499b795,
      name: "widgets-chart"
    }, {
      path: "list",
      component: _457fcf92,
      name: "widgets-list"
    }, {
      path: "social",
      component: _479a8346,
      name: "widgets-social"
    }, {
      path: "statistic",
      component: _2ab5aef2,
      name: "widgets-statistic"
    }]
  }, {
    path: "/admin/absen",
    component: _e63578e0,
    name: "admin-absen"
  }, {
    path: "/admin/dashboard",
    component: _553642ab,
    name: "admin-dashboard"
  }, {
    path: "/admin/data_pasien",
    component: _015c3806,
    name: "admin-data_pasien"
  }, {
    path: "/admin/dokter",
    component: _cb5fb530,
    name: "admin-dokter"
  }, {
    path: "/admin/inventori",
    component: _1d97b9bf,
    name: "admin-inventori"
  }, {
    path: "/admin/karyawan",
    component: _035100a9,
    name: "admin-karyawan"
  }, {
    path: "/admin/login",
    component: _74bb2700,
    name: "admin-login"
  }, {
    path: "/admin/pelayanan_apotek",
    component: _47da6059,
    name: "admin-pelayanan_apotek"
  }, {
    path: "/admin/pendapatan",
    component: _588cccaf,
    name: "admin-pendapatan"
  }, {
    path: "/admin/rekam_medis",
    component: _21cf56a0,
    name: "admin-rekam_medis"
  }, {
    path: "/admin/rujukan",
    component: _3b4b3041,
    name: "admin-rujukan"
  }, {
    path: "/apotek/dashboard",
    component: _a7717bf8,
    name: "apotek-dashboard"
  }, {
    path: "/apotek/inventori",
    component: _1d827446,
    name: "apotek-inventori"
  }, {
    path: "/apotek/login",
    component: _6d79ff4e,
    name: "apotek-login"
  }, {
    path: "/apotek/obat",
    component: _62e53288,
    name: "apotek-obat"
  }, {
    path: "/apotek/permintaan",
    component: _1fc1fd73,
    name: "apotek-permintaan"
  }, {
    path: "/apotek/report",
    component: _15460c0e,
    name: "apotek-report"
  }, {
    path: "/dokter/chat",
    component: _4dd2d03f,
    name: "dokter-chat"
  }, {
    path: "/dokter/dashboard",
    component: _42785386,
    name: "dokter-dashboard"
  }, {
    path: "/dokter/empty",
    component: _8c18c614,
    name: "dokter-empty"
  }, {
    path: "/dokter/forms",
    component: _7b8062d8,
    name: "dokter-forms",
    children: [{
      path: "basic-forms",
      component: _50b1a0a8,
      name: "dokter-forms-basic-forms"
    }, {
      path: "editors",
      component: _1b92587e,
      name: "dokter-forms-editors"
    }, {
      path: "selection-controls",
      component: _2028c0af,
      name: "dokter-forms-selection-controls"
    }, {
      path: "selects",
      component: _6398264f,
      name: "dokter-forms-selects"
    }, {
      path: "steppers",
      component: _aeab3dcc,
      name: "dokter-forms-steppers"
    }, {
      path: "text-fields",
      component: _f7b6fc9e,
      name: "dokter-forms-text-fields"
    }]
  }, {
    path: "/dokter/general",
    component: _38523ad1,
    name: "dokter-general",
    children: [{
      path: "alerts",
      component: _3635c730,
      name: "dokter-general-alerts"
    }, {
      path: "avatars",
      component: _53a4478e,
      name: "dokter-general-avatars"
    }, {
      path: "badges",
      component: _9a4142fe,
      name: "dokter-general-badges"
    }, {
      path: "buttons",
      component: _55a13600,
      name: "dokter-general-buttons"
    }, {
      path: "cards",
      component: _1f528aa2,
      name: "dokter-general-cards"
    }, {
      path: "carousels",
      component: _44feaa5c,
      name: "dokter-general-carousels"
    }, {
      path: "chips",
      component: _2edcd6e6,
      name: "dokter-general-chips"
    }, {
      path: "colors",
      component: _815dba7e,
      name: "dokter-general-colors"
    }, {
      path: "dialogs",
      component: _802c84ac,
      name: "dokter-general-dialogs"
    }, {
      path: "icons",
      component: _49e57a4e,
      name: "dokter-general-icons"
    }, {
      path: "pagination",
      component: _5bcf192a,
      name: "dokter-general-pagination"
    }, {
      path: "parallax",
      component: _fafb45b0,
      name: "dokter-general-parallax"
    }, {
      path: "progress",
      component: _1ddcb6be,
      name: "dokter-general-progress"
    }, {
      path: "sliders",
      component: _89e4cc9e,
      name: "dokter-general-sliders"
    }, {
      path: "snackbar",
      component: _c0ae9cd4,
      name: "dokter-general-snackbar"
    }, {
      path: "tables",
      component: _18c62136,
      name: "dokter-general-tables"
    }, {
      path: "tooltips",
      component: _01881be1,
      name: "dokter-general-tooltips"
    }, {
      path: "typography",
      component: _543ade80,
      name: "dokter-general-typography"
    }]
  }, {
    path: "/dokter/login",
    component: _afc6cddc,
    name: "dokter-login"
  }, {
    path: "/dokter/mail",
    component: _10ee09c4,
    name: "dokter-mail",
    children: [{
      path: "0/:uuid?",
      component: _18e90d08,
      name: "dokter-mail-0-uuid"
    }, {
      path: ":mailType?",
      component: _e083a47c,
      name: "dokter-mail-mailType"
    }]
  }, {
    path: "/dokter/media",
    component: _e3a937e6,
    name: "dokter-media"
  }, {
    path: "/dokter/pemeriksaan",
    component: _2f12c297,
    name: "dokter-pemeriksaan"
  }, {
    path: "/dokter/pickers",
    component: _78e6d5e4,
    name: "dokter-pickers",
    children: [{
      path: "datepicker",
      component: _98cf816c,
      name: "dokter-pickers-datepicker"
    }, {
      path: "timepicker",
      component: _0fb187a9,
      name: "dokter-pickers-timepicker"
    }]
  }, {
    path: "/dokter/report_pemeriksaan",
    component: _f7e659f8,
    name: "dokter-report_pemeriksaan"
  }, {
    path: "/dokter/widgets",
    component: _641235d0,
    name: "dokter-widgets",
    children: [{
      path: "chart",
      component: _6c3e4d76,
      name: "dokter-widgets-chart"
    }, {
      path: "list",
      component: _989e7b94,
      name: "dokter-widgets-list"
    }, {
      path: "social",
      component: _4488a985,
      name: "dokter-widgets-social"
    }, {
      path: "statistic",
      component: _9f4c3430,
      name: "dokter-widgets-statistic"
    }]
  }, {
    path: "/kasir/dashboard",
    component: _1a3c4154,
    name: "kasir-dashboard"
  }, {
    path: "/kasir/keuangan",
    component: _478484f4,
    name: "kasir-keuangan"
  }, {
    path: "/kasir/login",
    component: _1c87b0ae,
    name: "kasir-login"
  }, {
    path: "/kasir/pembayaran",
    component: _390db41c,
    name: "kasir-pembayaran"
  }, {
    path: "/kasir/report",
    component: _770ae35e,
    name: "kasir-report"
  }, {
    path: "/owner/dashboard",
    component: _4be71ec7,
    name: "owner-dashboard"
  }, {
    path: "/owner/login",
    component: _0d7db69c,
    name: "owner-login"
  }, {
    path: "/pendaftaran/chat",
    component: _372a9344,
    name: "pendaftaran-chat"
  }, {
    path: "/pendaftaran/daftar_pasien",
    component: _a0d8056a,
    name: "pendaftaran-daftar_pasien"
  }, {
    path: "/pendaftaran/daftar_pemeriksaan",
    component: _2c12b5d7,
    name: "pendaftaran-daftar_pemeriksaan"
  }, {
    path: "/pendaftaran/dashboard",
    component: _0553a350,
    name: "pendaftaran-dashboard"
  }, {
    path: "/pendaftaran/empty",
    component: _08d78ade,
    name: "pendaftaran-empty"
  }, {
    path: "/pendaftaran/forms",
    component: _85bdff1a,
    name: "pendaftaran-forms",
    children: [{
      path: "basic-forms",
      component: _790136ed,
      name: "pendaftaran-forms-basic-forms"
    }, {
      path: "editors",
      component: _be6c4d7a,
      name: "pendaftaran-forms-editors"
    }, {
      path: "selection-controls",
      component: _7e14fa6c,
      name: "pendaftaran-forms-selection-controls"
    }, {
      path: "selects",
      component: _2e60b1d8,
      name: "pendaftaran-forms-selects"
    }, {
      path: "steppers",
      component: _6b3a0e16,
      name: "pendaftaran-forms-steppers"
    }, {
      path: "text-fields",
      component: _a717d014,
      name: "pendaftaran-forms-text-fields"
    }]
  }, {
    path: "/pendaftaran/general",
    component: _d77c44a8,
    name: "pendaftaran-general",
    children: [{
      path: "alerts",
      component: _069db443,
      name: "pendaftaran-general-alerts"
    }, {
      path: "avatars",
      component: _28ef8084,
      name: "pendaftaran-general-avatars"
    }, {
      path: "badges",
      component: _56d01348,
      name: "pendaftaran-general-badges"
    }, {
      path: "buttons",
      component: _6afb9985,
      name: "pendaftaran-general-buttons"
    }, {
      path: "cards",
      component: _b6ebe932,
      name: "pendaftaran-general-cards"
    }, {
      path: "carousels",
      component: _05d04117,
      name: "pendaftaran-general-carousels"
    }, {
      path: "chips",
      component: _97d750aa,
      name: "pendaftaran-general-chips"
    }, {
      path: "colors",
      component: _3dec8ac8,
      name: "pendaftaran-general-colors"
    }, {
      path: "dialogs",
      component: _5577bda2,
      name: "pendaftaran-general-dialogs"
    }, {
      path: "icons",
      component: _6044c39e,
      name: "pendaftaran-general-icons"
    }, {
      path: "pagination",
      component: _9888b474,
      name: "pendaftaran-general-pagination"
    }, {
      path: "parallax",
      component: _18746a43,
      name: "pendaftaran-general-parallax"
    }, {
      path: "progress",
      component: _9862784e,
      name: "pendaftaran-general-progress"
    }, {
      path: "sliders",
      component: _5f300594,
      name: "pendaftaran-general-sliders"
    }, {
      path: "snackbar",
      component: _359abeb1,
      name: "pendaftaran-general-snackbar"
    }, {
      path: "tables",
      component: _3a7eb911,
      name: "pendaftaran-general-tables"
    }, {
      path: "tooltips",
      component: _d10bae08,
      name: "pendaftaran-general-tooltips"
    }, {
      path: "typography",
      component: _35de10db,
      name: "pendaftaran-general-typography"
    }]
  }, {
    path: "/pendaftaran/login",
    component: _2c8592a6,
    name: "pendaftaran-login"
  }, {
    path: "/pendaftaran/mail",
    component: _3e3e83ba,
    name: "pendaftaran-mail",
    children: [{
      path: "0/:uuid?",
      component: _c3bee466,
      name: "pendaftaran-mail-0-uuid"
    }, {
      path: ":mailType?",
      component: _9d1274c6,
      name: "pendaftaran-mail-mailType"
    }]
  }, {
    path: "/pendaftaran/media",
    component: _6067fcb0,
    name: "pendaftaran-media"
  }, {
    path: "/pendaftaran/pickers",
    component: _1f7c37e9,
    name: "pendaftaran-pickers",
    children: [{
      path: "datepicker",
      component: _d5891cb6,
      name: "pendaftaran-pickers-datepicker"
    }, {
      path: "timepicker",
      component: _1d568bf8,
      name: "pendaftaran-pickers-timepicker"
    }]
  }, {
    path: "/pendaftaran/widgets",
    component: _29e687f3,
    name: "pendaftaran-widgets",
    children: [{
      path: "chart",
      component: _1d14638a,
      name: "pendaftaran-widgets-chart"
    }, {
      path: "list",
      component: _12d394d1,
      name: "pendaftaran-widgets-list"
    }, {
      path: "social",
      component: _66414160,
      name: "pendaftaran-widgets-social"
    }, {
      path: "statistic",
      component: _4ead07a6,
      name: "pendaftaran-widgets-statistic"
    }]
  }, {
    path: "/admin/dokter/edit",
    component: _0b1db0e4,
    name: "admin-dokter-edit"
  }, {
    path: "/admin/dokter/tambah",
    component: _e928697a,
    name: "admin-dokter-tambah"
  }, {
    path: "/admin/karyawan/edit",
    component: _ca382cfa,
    name: "admin-karyawan-edit"
  }, {
    path: "/admin/karyawan/tambah",
    component: _42865822,
    name: "admin-karyawan-tambah"
  }, {
    path: "/admin/ruangan/data",
    component: _ea7c0c06,
    name: "admin-ruangan-data"
  }, {
    path: "/admin/ruangan/tipe",
    component: _c7bd3306,
    name: "admin-ruangan-tipe"
  }, {
    path: "/admin/rujukan/detail",
    component: _7324311c,
    name: "admin-rujukan-detail"
  }, {
    path: "/admin/rujukan/proses",
    component: _6bb26435,
    name: "admin-rujukan-proses"
  }, {
    path: "/apotek/obat/tambah",
    component: _42529722,
    name: "apotek-obat-tambah"
  }, {
    path: "/apotek/permintaan/detail_tebus_obat",
    component: _37b59fe5,
    name: "apotek-permintaan-detail_tebus_obat"
  }, {
    path: "/apotek/permintaan/proses",
    component: _16153d43,
    name: "apotek-permintaan-proses"
  }, {
    path: "/dokter/rujukan/rawat_inap",
    component: _56e4ffab,
    name: "dokter-rujukan-rawat_inap"
  }, {
    path: "/dokter/rujukan/rs_lain",
    component: _76078916,
    name: "dokter-rujukan-rs_lain"
  }, {
    path: "/kasir/pembayaran/detail_pembayaran",
    component: _2eaab6ee,
    name: "kasir-pembayaran-detail_pembayaran"
  }, {
    path: "/kasir/pembayaran/riwayat_detail_pembayaran",
    component: _04faf93a,
    name: "kasir-pembayaran-riwayat_detail_pembayaran"
  }, {
    path: "/pendaftaran/daftar_pasien/edit",
    component: _4dddd0a1,
    name: "pendaftaran-daftar_pasien-edit"
  }, {
    path: "/pendaftaran/daftar_pasien/tambah",
    component: _1ea2efc0,
    name: "pendaftaran-daftar_pasien-tambah"
  }, {
    path: "/pendaftaran/daftar_pemeriksaan/edit",
    component: _499fd695,
    name: "pendaftaran-daftar_pemeriksaan-edit"
  }, {
    path: "/pendaftaran/daftar_pemeriksaan/tambah",
    component: _31fb48b4,
    name: "pendaftaran-daftar_pemeriksaan-tambah"
  }, {
    path: "/admin/ruangan/data/edit",
    component: _b0f714a2,
    name: "admin-ruangan-data-edit"
  }, {
    path: "/admin/ruangan/data/tambah",
    component: _ad96ed64,
    name: "admin-ruangan-data-tambah"
  }, {
    path: "/admin/ruangan/tipe/edit",
    component: _6e45792f,
    name: "admin-ruangan-tipe-edit"
  }, {
    path: "/admin/ruangan/tipe/tambah",
    component: _787aa664,
    name: "admin-ruangan-tipe-tambah"
  }, {
    path: "/",
    component: _6496dcfc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
