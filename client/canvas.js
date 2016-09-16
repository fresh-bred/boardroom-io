import {socket, p2p} from './socket';

const $ = require('jquery');

$(document).ready(() => {
  $('body').on('DOMNodeInserted', 'video', function (e) {
    const numberOfVideos = $('#remoteVideos video').length;
    let numRows = 1;
    let numCols = 2;
    let colWidth = '498px';
    let rowHeight = '498px';
    if (numberOfVideos > 1) {
      numRows = Math.ceil(Math.sqrt(numberOfVideos));
      numCols = numRows;
      colWidth = (498 / numRows).toString();
      colWidth += 'px';
      rowHeight = colWidth;
    }
    $('video').height(rowHeight);
    $('video').width(colWidth);
  });

  $('body').on('DOMNodeRemoved', 'video', (e) => {
    const numberOfVideos = $('#remoteVideos video').length - 1;
    let numRows = 1;
    let numCols = 2;
    let colWidth = '498px';
    let rowHeight = '498px';
    if (numberOfVideos > 0) {
      numRows = Math.ceil(Math.sqrt(numberOfVideos));
      numCols = numRows;
      colWidth = (498 / numRows).toString();
      colWidth += 'px';
      rowHeight = colWidth;
    }
    $('video').height(rowHeight);
    $('video').width(colWidth);
  });
});
