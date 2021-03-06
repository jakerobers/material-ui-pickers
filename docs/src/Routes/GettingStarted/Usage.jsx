import React from 'react';
import PropTypes from 'prop-types';
import Code from '_shared/Code';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// eslint-disable-next-line
import quickStartCode from '!raw-loader!Examples/CodeSnippets/QuickStart';

const Usage = ({ classes }) => (
  <div>
    <Typography variant="display2" gutterBottom> Usage </Typography>

    <Typography variant="body1" gutterBottom>
      Material-UI-pickers rely only on material-ui controls and the date-management lib
      you have choose. Please note that all components are controlled, thats means that its required
      to pass <span className="inline-code"> value </span> and <span className="inline-code"> onChange </span> props.
    </Typography>

    <Typography
      variant="display1"
      className={classes.quickStartHeader}
      gutterBottom
    >
      Quick Start
    </Typography>

    <Typography variant="body1" gutterBottom>
      Here is a quick example you to get started
    </Typography>

    <Code withMargin text={quickStartCode} />

    <Typography variant="display1" gutterBottom>
      Interactive example
    </Typography>

    <iframe
      title="codesandbox"
      src="https://codesandbox.io/embed/l2ykr7kwvz?hidenavigation=1&fontsize=14&view=preview"
      style={{
        width: '100%',
        height: 650,
        border: 0,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </div>
);

Usage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  quickStartHeader: {
    marginTop: '1em',
  },
};

export default withStyles(styles)(Usage);
