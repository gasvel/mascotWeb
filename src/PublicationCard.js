import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 350,
    height: 250,
    display: 'inline-block',
    margin: '20px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
};

function PublicationCard(props) {
  const { classes,title,body,user } = props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Publicado por: {user}
        </Typography>
        <Typography component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver publicacion</Button>
      </CardActions>
    </Card>
  );

}

PublicationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PublicationCard);
