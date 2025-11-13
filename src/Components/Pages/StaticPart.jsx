// src/Components/Pages/StaticPart.jsx
import React from 'react'

const StaticPart = () => {
  return (
    <div className="w-full max-w-6xl px-4">
      <div className="stats stats-vertical lg:stats-horizontal w-full rounded-box bg-base-100 shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  )
}

export default StaticPart