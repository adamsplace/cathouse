class UsersController < ApplicationController

    def create
        render json: User.create!, status: 201
    end

    private

    def user_params
        params.require( :user ).permit( :username, :password, 
            :password_confirmation )
    end
end
