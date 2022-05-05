class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :record_not_valid

    before_action :authorized

    def current_user
        # User.find_by( id: session[:user_id] )
        true
    end

    private

    def logged_in?
        !!current_user
    end

    def authorized
        render json: { message: "Please log in" }, 
            status: :unauthorized unless logged_in?
    end

    def record_not_valid( invalid )
        render json: { errors: invalid.record.errors.full_messages }, 
            status: 422
    end
end
