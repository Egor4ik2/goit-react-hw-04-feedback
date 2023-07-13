import React, { useState } from 'react';
import './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
const [showNotification, setShowNotification] = useState(true);

const handleCloseNotification = () => {
setShowNotification(false);
};

return (
<>
{showNotification && (
<div>
<p>{message}</p>
<button onClick={handleCloseNotification}>Close</button>
</div>
)}
</>
);
};

Notification.propTypes = {
message: PropTypes.string.isRequired,
};

export default Notification;