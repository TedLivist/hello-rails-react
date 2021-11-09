class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    @greeting = @greetings.sample
    render json: @greeting
  end
end
