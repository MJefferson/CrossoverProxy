
# Module Dependencies
$ = require 'jquery'

getProfile = (username) ->
  $.get("http://instagram.com/#{username}/").pipe(parseData)

parseData = (html) ->
  scripts = $('script', html).prevObject
  # Instagram's code dumps all of a profile's data into a global var, using a <script> tag
  metadata = scripts[5].innerHTML

  window = {}
  eval metadata
  window._jscalls[0][2]

module.exports =
  grab: getProfile
