Rails.application.routes.draw do
  root 'static#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'greeting', to: 'greetings#index'
    end
  end

  # Forward all requests to StaticController#index but requests
  # must be non-Ajax(!req.xhr?) and HTML Mime type (req.format.html?).
  # This does not include the root ("/") path.
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
