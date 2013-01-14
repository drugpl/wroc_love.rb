#= require jquery
#= require handlebars
#= require handlebars_view
#= require sugar
#= require moment
#= require agenda
#= require main

$ ->
  speakersPlaceholder = $('.speakers')
  speakers = {
    speakers: [{
      photo_url: "http://lorempixel.com/g/635/476/",
      name: "foo",
      talk_title: "bar",
      bio: "baz"
    }]
  }

  new HandlebarsView('speakers').render(speakersPlaceholder, speakers)

  supportersPlaceholder = $('.supporters')
  supporters = {
    supporters: [{
      website_url: "#",
      logo_url: "http://drug.org.pl/assets/drug-logo-1bc50d7003f9eecbc09a624e8e29626d.png",
      name: "DRUG"
    }]
  }

  new HandlebarsView('supporters').render(supportersPlaceholder, supporters)

