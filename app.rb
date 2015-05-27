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
        return 'Thanks for the suggestion!'
    end
    
    post '/rsvp' do
        @guest = Guest.new(:yes_attendees => params[:yes_attendees], :no_attendees => params[:no_attendees], :contact_email => params[:contact_email], :red_wine_drinkers => params[:red_wine_drinkers], :white_wine_drinkers => params[:white_wine_drinkers], :beer_drinkers => params[:beer_drinkers], :dietary_restriction => params[:dietary_restriction], :dietary_restriction_details => params[:dietary_restriction_details], :created => Time.now)
        @guest.save
        return 'Thanks for RSVPing!'
    end
    
    get '/new_index' do
        @title = 'New Wedding Page'
        haml :new_index, :layout => :new_layout
    end
end