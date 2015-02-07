require 'bundler'
Bundler.require

require './model'

class MrandMrsMays < Sinatra::Base
  use Rack::Session::Cookie, :secret => "mysecretcode"
  use Rack::Flash, :accessorize => [:error, :success]

  get '/' do
    @title = 'The Mays Wedding | Home'
    haml :index
  end

  get '/venue' do
    @title = 'The Mays Wedding | Venue'
    haml :venue
  end

  get '/staying' do
    @title = 'The Mays Wedding | Staying'
    haml :staying
  end

  get '/rsvp' do
    @title = 'The Mays Wedding | RSVP'
    haml :rsvp
  end
  
  post '/submit_song' do
    @song = Song.new(:song_name => params[:song_name], :requestor => params[:requestor], :created => Time.now)
    @song.save
    return 'Thank you!'
    #flash[:notice] = "Thanks for the suggestion!"
  end

end