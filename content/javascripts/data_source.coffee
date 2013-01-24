class window.DataSource
  @SOURCE_URL = 'api/all.json'

  @fetchAll: (callback, errback) =>
    $.getJSON(@SOURCE_URL, callback).error(errback)

