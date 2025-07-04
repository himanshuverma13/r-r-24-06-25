import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './rewardHistory.css';

const RewardHistory = ({ showHistory,MyRewardDataAPI }) => {
  console.log('MyRewardDataAPI: ', MyRewardDataAPI);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sample data for rewards
  const rewardsData = [
    {
      id: 1,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 2,
      rewardType: 'Mystery Rewards',
      date: '22 May, 2025',
      expiryDate: '-',
      earnings: '+200 Meteors',
      type: 'green',
    },
    {
      id: 3,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '22 Jun 2025',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 4,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '22 Jun 2025',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 5,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'green',
    },
    {
      id: 6,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 7,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 11,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 12,
      rewardType: 'Mystery Rewards',
      date: '22 May, 2025',
      expiryDate: '-',
      earnings: '+200 Meteors',
      type: 'green',
    },
    {
      id: 13,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '22 Jun 2025',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 14,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '22 Jun 2025',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 15,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'green',
    },
    {
      id: 16,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'orange',
    },
    {
      id: 17,
      rewardType: 'Streak Store',
      date: '29 May, 2025',
      expiryDate: '-',
      earnings: '+540 Meteors',
      type: 'orange',
    },
  ];

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil((MyRewardDataAPI?.part5 || rewardsData)?.length / rowsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number.parseInt(e.target.value));
    setCurrentPage(1);
  };

  const HandleToggle = () => {
    showHistory(false);
  };

  // Calculate displayed data based on pagination
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = (MyRewardDataAPI?.part5 || rewardsData)?.slice(startIndex, endIndex);

  const StatCard = ({ number, title, index }) => (
    <div
      className={`stat-card ${index == 4 ? '' : 'border-bottom border-2 border-secondary'} py-4 px-5 mx-3 text-center`}
    >
      <div className="font-24 text-blue montserrat-bold py-2">{number}</div>
      <div className="font-16 text-blue montserrat-semibold py-2">{title}</div>
    </div>
  );

  const RewardRow = ({ reward }) => (
    <tr className="bg-transparent">
      <td className="py-3 bg-transparent px-4">
        <div className="d-flex align-items-center font-16 montserrat-semibold">
          {/* <span className={`reward-dot me-2 ${reward.type}`}></span> */}
          {reward?.earned_by_action}
        </div>
      </td>
      <td className="py-3 px-4 bg-transparent font-16 montserrat-semibold">
        {reward?.referred_on}
      </td>
      <td
        className="py-3 px-4 bg-transparent font-16 text-center montserrat-semibold"
        // style={{ color: reward.expiryDate === '-' ? '#6c757d' : '#dc3545' }}
      >
        {reward.expiryDate || '-'}
      </td>
      <td className="py-3 px-4 bg-transparent text-center">
        <span
          className={`p-1 px-2 rounded-2 font-14  montserrat-medium bg-light text-blue`}
        >
          <span className="dot">*</span>
          {reward?.earned_meteors}
        </span>
      </td>
    </tr>
  );

  return (
    <section className="hero-section">
      <div className="">
        <div className="container-fluid px-5">
          <div onClick={HandleToggle} className="back my-3">
            {'<'}Back
          </div>
          <div className="head d-flex  justify-content-between my-3">
            <h2 className="font-32 space-grotesk-bold text-blue">
              My Reward History
            </h2>
            <span>
              <select
                className="rows-select   "
                value={'Filter'}
                // onChange={handleRowsPerPageChange}
              >
                <option value={5}>Filter</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </span>
          </div>
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="sidebar">
                <StatCard index="1" number="03" title="Total Rewards" />
                <StatCard index="2" number="03" title="Total Redeemed" />
                <StatCard index="3" number="03" title="Total Meteors" />
                <StatCard index="4" number="03" title="Total Stars" />
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9 col-md-8">
              <div className="main-content">
                <div className="table-container">
                  <table className="table table-hover mb-0">
                    <thead className="">
                      <tr className="">
                        <th className="px-4 font-14 montserrat-semibold">
                          Reward Type
                        </th>
                        <th className="px-4 font-14 montserrat-semibold">
                          Date
                        </th>
                        <th className="px-4 font-14 montserrat-semibold text-center">
                          Expiry Date
                        </th>
                        <th className="px-4 font-14 montserrat-semibold text-center">
                          Earnings/Redemption
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {displayedData?.map((reward,index) => (
                        <RewardRow key={index} reward={reward} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Pagination Controls */}
              <div className="pagination-controls mt-4 d-flex justify-content-between align-items-center">
                <div className="space"></div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-pagination me-2"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-pagination background-text-blue active"
                    onClick={handleNext}
                    disabled={
                      currentPage >= Math.ceil(rewardsData.length / rowsPerPage)
                    }
                  >
                    Next
                  </button>
                </div>

                <div className="d-flex align-items-center">
                  <span className="me-2 text-muted">Rows per page:</span>
                  <select
                    className="rows-select bg-transparent   "
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardHistory;
