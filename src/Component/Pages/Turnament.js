import React from 'react';

const Turnament = () => {
    return (
        <div>
            <div class="card bg-base-100 w-96 shadow-xl ">
          <figure>
            <img
              src="https://i.ytimg.com/vi/c6QqpO79YRg/maxresdefault.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Carroum Turnament
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
            <div className='card-actions justify-end'> 
                <button className='btn btn-primary'>Join Turnament</button>
            </div>
          </div>
        </div>
 
        </div>
    );
};

export default Turnament;