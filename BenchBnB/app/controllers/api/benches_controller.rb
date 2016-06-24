class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
  end
end
