#= require handlebars

class window.HandlebarsView
  constructor: (templateName) ->
    source = $("##{templateName}-template").html()
    @template = Handlebars.compile(source, noEscape: true)

  render: (where, context = null) =>
    where.append @template(context)

