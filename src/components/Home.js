import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://i1.adis.ws/i/office/W2_HP1_2270x839_Desktop',
  },
  {
    label: 'Bird',
    imgPath:
      'https://www.gentlemansgazette.com/wp-content/uploads/2017/12/how-a-dress-shoe-should-fit_3870x1440.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://www.gentlemansgazette.com/wp-content/uploads/2014/04/Oxford-Shoe-Guide_3870x1440-900x342.jpg',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'data:image/jpeg;base64,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',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRynxwICg-AgkdXAJ6OWVgHWRrasZXOSXaW9g&usqp=CAU',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    height: 400,
    display: 'block',
    // maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  //cards csss
  cardroot: {
    maxWidth: 345,
    // minWidth: 500,


  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>



      <h2 align='center'>New collection</h2>
      <hr />
      <div className='homeCollection'>

        <Grid container direction="row-reverse" justify="space-around" >

          <Grid item xs={12} sm={6} md={4}>

            <Card className={classes.cardroot}>
              <CardActionArea>
                <Link to='/product'>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="350"
                    image="https://i8.amplience.net/i/office/3904710000_lh.jpg?$newpicture$&version=5.5"

                    title="Contemplative Reptile"
                  />
                </Link>

              </CardActionArea>

            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardroot}>
              <CardActionArea>
                <Link to='/product'>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="350"
                    image="https://i8.amplience.net/i/office/2026402825_lh.jpg?$newpicture$"

                    title="Contemplative Reptile"
                  />
                </Link>
              </CardActionArea>

            </Card>


          </Grid>
          <Grid  item xs={12} sm={12} md={4}>
            <Card className={classes.cardroot}>
              <CardActionArea>
                <Link to='/product'>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="350"
                    image="https://i8.amplience.net/i/office/2604310000_lh.jpg?$newpicture$&version=5.5"
                    title="Contemplative Reptile"
                  />
                </Link>
              </CardActionArea>


            </Card>



          </Grid>
        </Grid>
      </div>









    </div>
  );
}

export default Home;