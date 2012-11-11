require 'bundler/setup'
Bundler.require

use Rack::Rewrite do
  r301 %r{^([^\.]*[^\/])$}, '$1/'
  r301 %r{^(.*\/)$}, '$1index.html'
end

use Rack::Static, :urls => ["/"], :root => Dir.pwd + '/output'

class NanocRack
  def call(env)
    [200, {"Content-Type" => "text/html"}, ["Ooops. This shouldn't happen."] ]
  end
end
run NanocRack.new
