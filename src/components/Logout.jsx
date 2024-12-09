import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  // Function to handle logout button click and show modal
  const handleLogoutClick = () => {
    setShowModal(true); // Show the modal
  };

  // Function to handle the confirmation of logout
  const confirmLogout = () => {
    // Clear user data from localStorage and sessionStorage
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // Redirect to the login page after logout
    navigate('/');
  };

  // Function to handle the cancel button in the modal
  const cancelLogout = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div>
      {/* Logout button */}
      <button onClick={handleLogoutClick} className="btn btn-danger">
        Logout
      </button>

      {/* Modal for confirming logout */}
      {showModal && (
        <div
          className="modal"
          style={{
            display: 'block',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        >
          <div className="modal-dialog" style={{ marginTop: '15%', maxWidth: '400px' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button className="close" onClick={cancelLogout}>&times;</button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to logout?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={cancelLogout}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={confirmLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
