import $ from 'jquery';
import ui from './ui';
import '../base/settings.js';

import '../../styles/summernote-bs3.scss';

$.summernote = $.extend($.summernote, {
  ui: ui,
  interface: 'bs3',
});
