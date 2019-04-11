import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PublicationCard.css';




export function PublicationCard(props) {
  const { title,body,creado } = props;
  const bull = <span className="bullet">•</span>;
  return (
    <Card className="card">
      <CardContent>

        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className="pos" color="textSecondary">
          Fecha de publicacion: {creado}
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
