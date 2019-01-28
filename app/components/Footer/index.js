import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Typography } from '@material-ui/core';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

class Footer extends React.PureComponent {
  render() {
    const { className } = this.props;

    return (
      <footer className={className}>
        <Grid container spacing={32} justify="space-evenly">
          <Grid item xs>
            <Typography variant="title" color="textPrimary" gutterBottom>
              <FormattedMessage {...messages.copyright} />
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <FormattedMessage {...messages.licenseMessage} />
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subheading" color="textSecondary">
              <FormattedMessage
                {...messages.authorMessage}
                values={{
                  author: <A href="#">Martin, Charlie and Fernando</A>,
                }}
              />
            </Typography>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
