import car from "./assets/car.jpg"; // hoặc "../assets/car.jpg" nếu bạn để file này trong subfolder

export default function CarCards() {
  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4">Cards Columns</h3>
      <div className="row g-4">
        {/* Card 1 - Blue */}
        <div className="col-md-4">
          <div className="card border-0 text-center" style={{ backgroundColor: "blue" }}>
            <img src={car} className="card-img-top p-3" alt="Car" />
            <div className="card-body">
              <p className="card-text text-white">VF5</p>
            </div>
          </div>
        </div>

        {/* Card 2 - Yellow */}
        <div className="col-md-4">
          <div className="card border-0 text-center" style={{ backgroundColor: "yellow" }}>
            <img src={car} className="card-img-top p-3" alt="Car" />
            <div className="card-body">
              <p className="card-text text-dark">VF7</p>
            </div>
          </div>
        </div>

        {/* Card 3 - Red */}
        <div className="col-md-4">
          <div className="card border-0 text-center" style={{ backgroundColor: "red" }}>
            <img src={car} className="card-img-top p-3" alt="Car" />
            <div className="card-body">
              <p className="card-text text-white">VF9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
