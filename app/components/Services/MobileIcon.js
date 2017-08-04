import React, { PropTypes } from 'react';

function MobileIcon(props) {
  return (
    <svg width="140px" height="120px" viewBox="0 0 140 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="phone-icon">
        <path d="M40,15.4580716 L40,10.2816379 C40,6.81336207 42.859375,4 46.384375,4 L93.61375,4 C97.140625,4 100,6.81336207 100,10.2816379 L100,15.4580716 L40,15.4580716 Z M93.615625,111 L46.384375,111 C42.859375,111 40,108.186638 40,104.718362 L40,88.9756637 L100,88.9756637 L100,104.716517 C100,108.186638 97.140625,111 93.615625,111 Z" id="body" fill={props.theme.main} fillRule="nonzero" />
        <rect id="screen" fill={props.theme.bg} fillRule="nonzero" x="40" y="15.0689655" width="60" height="73.7931034" />
        <path d="M70.21875,105.775862 C67.163925,105.775862 64.6875,103.29799 64.6875,100.241379 C64.6875,97.1847689 67.163925,94.7068966 70.21875,94.7068966 C73.273575,94.7068966 75.75,97.1847689 75.75,100.241379 C75.75,103.29799 73.273575,105.775862 70.21875,105.775862 Z M70.21875,11.6896552 L62.84375,11.6896552 C61.8241563,11.6896552 61,10.8650172 61,9.84482759 C61,8.82463793 61.8241563,8 62.84375,8 L70.21875,8 C71.2383437,8 72.0625,8.82463793 72.0625,9.84482759 C72.0625,10.8650172 71.2383437,11.6896552 70.21875,11.6896552 Z M77.59375,11.6896552 L75.75,11.6896552 C74.7304063,11.6896552 73.90625,10.8650172 73.90625,9.84482759 C73.90625,8.82463793 74.7304063,8 75.75,8 L77.59375,8 C78.6133437,8 79.4375,8.82463793 79.4375,9.84482759 C79.4375,10.8650172 78.6133437,11.6896552 77.59375,11.6896552 Z" id="controls" fillOpacity="0.2" fill="#000000" fillRule="nonzero" />
        <path d="M73.597,35.0087152 L66.403,35.0087152 C65.3525,35.0087152 64.5,34.1555398 64.5,33.1042075 L64.5,25.9045077 C64.5,24.8531754 65.3525,24 66.403,24 L73.597,24 C74.6475,24 75.5,24.8531754 75.5,25.9045077 L75.5,33.1042075 C75.5,34.1555398 74.6475,35.0087152 73.597,35.0087152 Z M57.097,35.0087152 L49.903,35.0087152 C48.8525,35.0087152 48,34.1555398 48,33.1042075 L48,25.9045077 C48,24.8531754 48.8525,24 49.903,24 L57.097,24 C58.1475,24 59,24.8531754 59,25.9045077 L59,33.1042075 C59,34.1555398 58.1475,35.0087152 57.097,35.0087152 Z M90.097,35.0087152 L82.903,35.0087152 C81.8525,35.0087152 81,34.1555398 81,33.1042075 L81,25.9045077 C81,24.8531754 81.8525,24 82.903,24 L90.097,24 C91.1475,24 92,24.8531754 92,25.9045077 L92,33.1042075 C92,34.1555398 91.1475,35.0087152 90.097,35.0087152 Z M73.597,51.4869272 L66.403,51.4869272 C65.3525,51.4869272 64.5,50.6337517 64.5,49.5824194 L64.5,42.3827197 C64.5,41.3313873 65.3525,40.4782119 66.403,40.4782119 L73.597,40.4782119 C74.6475,40.4782119 75.5,41.3313873 75.5,42.3827197 L75.5,49.5824194 C75.5,50.6337517 74.6475,51.4869272 73.597,51.4869272 Z M57.097,51.4869272 L49.903,51.4869272 C48.8525,51.4869272 48,50.6337517 48,49.5824194 L48,42.3827197 C48,41.3313873 48.8525,40.4782119 49.903,40.4782119 L57.097,40.4782119 C58.1475,40.4782119 59,41.3313873 59,42.3827197 L59,49.5824194 C59,50.6337517 58.1475,51.4869272 57.097,51.4869272 Z M90.097,51.4869272 L82.903,51.4869272 C81.8525,51.4869272 81,50.6337517 81,49.5824194 L81,42.3827197 C81,41.3313873 81.8525,40.4782119 82.903,40.4782119 L90.097,40.4782119 C91.1475,40.4782119 92,41.3313873 92,42.3827197 L92,49.5824194 C92,50.6337517 91.1475,51.4869272 90.097,51.4869272 Z M73.597,68 L66.403,68 C65.3525,68 64.5,67.1468246 64.5,66.0954923 L64.5,58.8957925 C64.5,57.8444602 65.3525,56.9912848 66.403,56.9912848 L73.597,56.9912848 C74.6475,56.9912848 75.5,57.8444602 75.5,58.8957925 L75.5,66.0954923 C75.5,67.1468246 74.6475,68 73.597,68 Z M57.097,68 L49.903,68 C48.8525,68 48,67.1468246 48,66.0954923 L48,58.8957925 C48,57.8444602 48.8525,56.9912848 49.903,56.9912848 L57.097,56.9912848 C58.1475,56.9912848 59,57.8444602 59,58.8957925 L59,66.0954923 C59,67.1468246 58.1475,68 57.097,68 Z M90.097,68 L82.903,68 C81.8525,68 81,67.1468246 81,66.0954923 L81,58.8957925 C81,57.8444602 81.8525,56.9912848 82.903,56.9912848 L90.097,56.9912848 C91.1475,56.9912848 92,57.8444602 92,58.8957925 L92,66.0954923 C92,67.1468246 91.1475,68 90.097,68 Z" id="icons" fill={props.theme.accent} fillRule="nonzero" />
      </g>
    </svg>
  );
}

MobileIcon.propTypes = {
  theme: PropTypes.object,
};

export default MobileIcon;
