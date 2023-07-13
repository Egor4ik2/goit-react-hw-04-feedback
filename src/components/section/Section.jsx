import React, { useState } from 'react';
import './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
const [isOpen, setIsOpen] = useState(true);

const toggleSection = () => {
setIsOpen((prevState) => !prevState);
};

return (
<div>
<h2 onClick={toggleSection}>{title}</h2>
{isOpen && <div>{children}</div>}
</div>
);
};

Section.propTypes = {
title: PropTypes.string.isRequired,
children: PropTypes.node.isRequired,
};

export default Section;