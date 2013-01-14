class window.HandlebarsView
  constructor: (templateName) ->
    source = $("##{templateName}-template").html()
    @template = Handlebars.compile(source, noEscape: true)

  render: (where, context) =>
    where.append @template(context)

