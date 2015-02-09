require 'rubygems'
require 'data_mapper'
require 'dm-sqlite-adapter'
DataMapper.setup(:default, "sqlite://#{Dir.pwd}/mrandmars_mays.sqlite")

class Song
  include DataMapper::Resource

  property :id, Serial
  property :song_name, Text, :required => true
  property :requestor, Text, :required => true
  property :created, DateTime
end

class Guest
	include DataMapper::Resource

	property :id, Serial
	property :yes_attendees, Text
	property :no_attendees, Text
	property :contact_email, Text, :required => true
	property :red_wine_drinkers, Integer, :required => true
	property :white_wine_drinkers, Integer, :required => true
	property :beer_drinkers, Integer, :required => true
	property :dietary_restriction, Boolean
	property :dietary_restriction_details, Text
	property :created, DateTime
end

# Tell DataMapper the models are done being defined
DataMapper.finalize

# Update the database to match the properties of User.
DataMapper.auto_upgrade!