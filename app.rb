require 'bundler'
Bundler.require

require './model'

class MrandMrsMays < Sinatra::Base
  use Rack::Session::Cookie, :secret => "mysecretcode"
  use Rack::Flash, :accessorize => [:error, :success]

  get '/' do
    @title = 'The Mays Wedding'
    haml :index, :layout => false
  end
  
  post '/submit_song' do
    @song = Song.new(:song_name => params[:song_name], :requestor => params[:requestor], :created => Time.now)
    @song.save
    flash[:notice] = "Thanks for the suggestion!"
    redirect '/'
  end

end